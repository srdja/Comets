;;
;; This file is part of Comets.
;;
;; Comets is free software: you can redistribute it and/or modify
;; it under the terms of the GNU General Public License as published by
;; the Free Software Foundation, either version 3 of the License, or
;; (at your option) any later version.
;;
;; Comets is distributed in the hope that it will be useful,
;; but WITHOUT ANY WARRANTY; without even the implied warranty of
;; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
;; GNU General Public License for more details.
;;
;; You should have received a copy of the GNU General Public License
;; along with Comets.  If not, see <http://www.gnu.org/licenses/>.
;;

;; TODO: Break this file into multiple smaller ones
;;
;; NOTE: Functions should probably just work the narrowest possible
;;       structure and let the caller update the wider structure
;;
;; TODO/NOTE: Many functions can be generalized


(ns comets.core
  (:require [goog.string.format]
            [comets.math  :as math]
            [comets.input :as input]
            [comets.draw  :as draw]
            [goog.string  :as gstr]))


;;  Timing functions
;; ----------------------------------------------------------------------

(defn update-time-delta
  "Called at the begining of a frame to determine the duration of
   the previous frame."
  [s]
  (let [ct (.now js/Date)
        upd-delta-t (fn [] (- ct (get-in s [:time :start])))
        new-delta-t (update-in s [:time :delta] upd-delta-t)]
    (update-in new-delta-t [:time :current] (fn [] ct))))


(defn update-time-start
  "Called at the end of the current frame to prepare the
   timer for the next frame."
  [s]
  (update-in s [:time :start]
             (fn [] (get-in s [:time :current]))))

;; ----------------------------------------------------------------------
;;
;;  Game data structures
;;
;; ----------------------------------------------------------------------


(def motion
  {:pos-x 0    ;; position on the x axis
   :pos-y 0    ;; position on the y axis
   :dir [0 0]  ;; normalized direction vector
   :speed 0})  ;; speed - "dir" units per second


(def time
  {:start (.now js/Date)
   :delta 0
   :current 0})


(def player
  {:motion (assoc motion
                  :pos-x (/ (:w draw/viewport) 2)
                  :pos-y (/ (:h draw/viewport) 2)
                  :speed 120)
   :forward-vector [0 0]
   :rotation-angle 0
   :radius 11
   :lives 3
   :health 100
   :attack-delay 130

   :is-spawned true
   :spawn-state-duration 2500 ; 2.5 seconds
   :spawn-timestamp (.now js/Date)

   :time-before-attack 0
   :collision-circle-radius 5
   :score 0})


(def bullet
  {:motion motion
   :damage 10
   :radius 2
   :ttl 3000               ;; time to live in milisecods
   :collision-circle-radius 2})


(def comet ;; when a comet is at 50% of max health it is split
  {:motion motion
   :radius 40
   :health 100
   :spawn-delay 2500
   :time-before-spawn 0
   :collision-circle-radius 36})


(def particle
  {:motion motion
   :ttl 0
   :radius 1})


(def game-state
  (atom {:timer time
         :player player
         :bullets []
         :comets []
         :explosions []}))


(defn move
  "Updates the motion for time and wraps the position
   if it leaves the viewport."
  [motion time radius]
  (let [x   (:pos-x motion)
        y   (:pos-y motion)
        s   (* (:speed motion) (/ time 1000))
        dir (:dir motion)]
    (cond
      (and (<= x (- 0 radius))                   ;; Object is to the left of the viewport and is
           (<= (nth dir 0) 0))                   ;; moving away from it
      (assoc motion :pos-x (+ (:w draw/viewport) radius))
      (and (>= x (+ (:w draw/viewport) radius))       ;; right
           (>= (nth dir 0) 0))
      (assoc motion :pos-x (- 0 radius))
      (and (<= y (- 0 radius))                   ;; above
           (<= (nth dir 1) 0))
      (assoc motion :pos-y (+ (:h draw/viewport) radius))
      (and (>= y (+ (:h draw/viewport) radius))       ;; beneath
           (>= (nth dir 1) 0))
      (assoc motion :pos-y (- 0 radius))
      :else
      (let [moved-x (* s (nth dir 0))
            moved-y (* s (nth dir 1))
            new-x   (+ x moved-x)
            new-y   (+ y moved-y)]
        (assoc motion :pos-x new-x :pos-y new-y)))))


(defn update-motion
  [mover time-delta]
  (let [motion (get-in mover [:motion])
        radius (get-in mover [:radius])]
    (assoc mover :motion (move motion time-delta radius))))


(defn update-ttl
  [expierable time]
  (let [t (- (:ttl expierable) time)]
    (assoc expierable :ttl t)))


;; ----------------------------------------------------------------------
;;  Collision
;; ----------------------------------------------------------------------


(defn circle-collided?
  [m1 m2 r1 r2]
  (let [x1 (get-in m1 [:pos-x])
        x2 (get-in m2 [:pos-x])
        y1 (get-in m1 [:pos-y])
        y2 (get-in m2 [:pos-y])
        a  (- (max x1 x2) (min x1 x2))
        b  (- (max y1 y2) (min y1 y2))
        h  (.sqrt js/Math (+ (* a a) (* b b)))]
    (if (< h (+ r1 r2))
      true
      false)))

(defn respawn-player
  [state]
  (assoc (get-in state [:player])
         :motion (get-in player [:motion])
         :lives (- (get-in (get-in state [:player]) [:lives]) 1)
         :is-spawned true
         :spawn-timestamp (.now js/Date)))



(defn player-comet-collision
  [state]
  (let [p-motion (get-in state [:player :motion])
        p-radius (get-in state [:player :collision-circle-radius])
        comets   (get-in state [:comets])]
    (if (get-in state [:player :is-spawned])
      state
      (if (some #(let [comet-motion (:motion %1)
                       comet-radius (:collision-circle-radius %1)]
                   (circle-collided? p-motion comet-motion p-radius comet-radius))
                comets)
        (let [lives (get-in state [:player :lives])]
          (assoc state :player (respawn-player state)))
        state))))

;; ----------------------------------------------------------------------
;;  Explosion
;; ----------------------------------------------------------------------

;;; TODO SHIP BRAKEUP ANIMATION
(defn particle-spawn
  [x y]
  (let [m (assoc motion
                 :pos-x x
                 :pos-y y
                 :speed (math/rng-int 600)
                 :dir (math/vector-normalize [(math/rng-float) (math/rng-float)]))
        ttl (math/rng-int 1000)]
    (assoc particle :motion m :ttl ttl)))


(defn explosion-spawn
  [state x y n]
  (assoc state
         :explosions (conj (:explosions state)
                           ;; (vec (repeat n (particle-spawn x y))))))
                           [(particle-spawn x y) (particle-spawn x y) (particle-spawn x y)
                            (particle-spawn x y) (particle-spawn x y) (particle-spawn x y)
                            (particle-spawn x y) (particle-spawn x y) (particle-spawn x y)
                            (particle-spawn x y) (particle-spawn x y) (particle-spawn x y)
                            (particle-spawn x y) (particle-spawn x y) (particle-spawn x y)
                            (particle-spawn x y) (particle-spawn x y) (particle-spawn x y)
                            (particle-spawn x y) (particle-spawn x y) (particle-spawn x y)
                            (particle-spawn x y) (particle-spawn x y) (particle-spawn x y)
                            (particle-spawn x y) (particle-spawn x y) (particle-spawn x y)
                            (particle-spawn x y) (particle-spawn x y) (particle-spawn x y)
                            (particle-spawn x y) (particle-spawn x y) (particle-spawn x y)
                            (particle-spawn x y) (particle-spawn x y) (particle-spawn x y)
                            (particle-spawn x y) (particle-spawn x y) (particle-spawn x y)])))


(defn update-particles
  [particles time]
  (let [remaining-particles (doall (remove (fn [p] (<= (:ttl p) 0)) particles))]
    (into
     []
     (map (fn [p] (update-motion (update-ttl p time) time)) remaining-particles))))


(defn update-explosions
  [state]
  (let [time  (get-in state [:time :delta])
        exps  (get-in state [:explosions])
        u-exp (into [] (map (fn [e] (update-particles e time)) exps))
        r-exp (into [] (remove (fn [e] (empty? e)) u-exp))]
    (assoc state :explosions r-exp)))


;; ----------------------------------------------------------------------
;;  comets
;; ----------------------------------------------------------------------

(defn comet-spawn
  [state is-fragment]
  (let [rad (if is-fragment
              (/ (:radius comet) 2)
              (:radius comet))
        axi (math/rng-int 2)                      ;; the axis on which the comet is spawned: x=0 y=1
        pos (if (= axi 0)                         ;; position on the x or y axis
              {:x (math/rng-int (:w draw/viewport)) :y (- rad 1)}
              {:x (- rad 1) :y (math/rng-int (:h draw/viewport))})
        dir (math/vector-normalize [(math/rng-float) (math/rng-float)])]
    (assoc state :comets
           (conj (:comets state)
                 (assoc comet
                        :motion (assoc motion :pos-x (:x pos)
                                       :pos-y (:y pos)
                                       :speed 100
                                       :dir dir)
                        :radius rad)))))


(defn update-comets
  [state]
  (let [time (get-in state [:time :delta])]
    (assoc state
           :comets (into []
                         (map (fn [c] (update-motion c time))
                              (:comets state))))))

;; ----------------------------------------------------------------------
;;  bullets
;; ----------------------------------------------------------------------

(defn bullet-spawn
  [state motion]
  (let [bullet  (assoc bullet :motion motion)
        bullets (conj (:bullets state) bullet)
        exp     (explosion-spawn state 400 300 20)]
    (assoc exp :bullets bullets)))


(defn update-bullets
  [state]
  (let [time (get-in state [:time :delta])
        bullets (:bullets state)
        remaining-bullets (remove (fn [b] (<= (:ttl b) 0)) bullets)]
    (assoc state
           :bullets (into []
                          (map (fn [b] (update-motion (update-ttl b time) time))
                               remaining-bullets)))))

;; ----------------------------------------------------------------------
;;  Player
;; ----------------------------------------------------------------------

(defn update-player-spawn-timer
  [state]
  (if-not (:is-spawned (get-in state [:player]))
    ;; It's not spawned so just return the state as is
    state
    ;; It's in spawn state. Advance the timer
    (let [player    (get-in state [:player])
          duration  (:spawn-state-duration player)
          timestamp (:spawn-timestamp player) ;; rename to spawn time
          timenow   (.now js/Date)]
      (if (>= (- timenow timestamp) duration)
        (assoc state :player (assoc player :is-spawned false))
        state))))




(defn update-player-position
  [state]
  (let [player (get-in state [:player])
        time   (get-in state [:time :delta])]
    (assoc state :player (update-motion player time))))


(defn update-player-direction
  [state]
  (update-in state [:player :motion :dir]
             (fn [] (math/vector-normalize
                     (map +
                          (:w @input/keys-down)
                          (:a @input/keys-down)
                          (:s @input/keys-down)
                          (:d @input/keys-down))))))


(defn update-player-rotation-angle
  "updates the rotation-angle of the ship and the forward-vector.

  direction is based on the position of the mouse sursor. the player ship
  should always facing the cursor"
  [state]
  (let [mx  (:x @input/mouse-pos)                   ;; mouse pointer x coordinate
        my  (:y @input/mouse-pos)                   ;; mouse pointer y coordinate
        px  (get-in state [:player :motion :pos-x]) ;; player position x
        py  (get-in state [:player :motion :pos-y]) ;; player position y
        a   (- px mx)                         ;; distance between the mouse and the player along the x axis
        b   (- py my)                         ;; distance between the mouse and the player along the y axis
        ang (.atan2 js/Math a b)
        adj (* -1 (+ ang (/ 3.1415 2)))]      ;; the angle at which the player would be facing the mouse
    ;; * -1 flips the direction of the rotation
    (update-in (update-in state [:player :rotation-angle] (fn [] adj))
               [:player :forward-vector] (fn [] (math/vector-normalize [(* a -1) (* -1 b)])))))


(defn update-player-attack
  [state]
  (let [px    (get-in state [:player :motion :pos-x])
        py    (get-in state [:player :motion :pos-y])
        fw-x  (nth (get-in state [:player :forward-vector]) 0)
        fw-y  (nth (get-in state [:player :forward-vector]) 1)
        delay (get-in state [:player :attack-delay])
        think (get-in state [:player :time-before-attack])
        time  (get-in state [:time :delta])]
    (if (and @input/click-down (<= think 0))
      (update-in (bullet-spawn state (assoc motion
                                            :pos-x (+ px (* 11 fw-x))
                                            :pos-y (+ py (* 11 fw-y))
                                            :dir   [fw-x fw-y]
                                            :speed 400))
                 [:player :time-before-attack]
                 (fn [] delay))
      (update-in state
                 [:player :time-before-attack]
                 (fn [] (- think time))))))


(reset! game-state (comet-spawn @game-state false))
(reset! game-state (comet-spawn @game-state false))
(reset! game-state (comet-spawn @game-state false))


(defn update-frame
  []
  (do (reset! game-state
              (->> (update-time-delta @game-state)
                   (update-player-spawn-timer)
                   (update-player-rotation-angle)
                   (update-player-direction)
                   (update-player-position)
                   (update-player-attack)
                   (update-bullets)
                   (update-comets)
                   (update-explosions)
                   (player-comet-collision)
                   (draw/draw-frame)
                   (update-time-start)))
      (.requestAnimationFrame js/window update-frame)))


(.requestAnimationFrame js/window update-frame)
