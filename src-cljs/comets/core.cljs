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
            [comets.math :as math]
            [goog.string :as gstr]))

;; The canvas surface on which to draw
(def surface (.getElementById js/document "surface"))

;; Drawing context
(def context (.getContext surface "2d"))

;;
(def viewport {:w 900 :h 600})

;; ----------------------------------------------------------------------
;;
;;  Input stuff
;;
;; ----------------------------------------------------------------------

;; It's more convinient to grab input events and then poll them later
(def mouse-pos  (atom {:x 1 :y 1}))
(def keys-down  (atom {:w [0 0] :a [0 0] :s [0 0] :d [0 0]}))
(def click-down (atom false))


(defn is-canvas-coord
  "Find out whether current mouse coordinates are inside the canvas"
  [canvas-rect event]
  (let [view-x (aget event "clientX")
        view-y (aget event "clientY")
        rect-l (aget canvas-rect "left")
        rect-t (aget canvas-rect "top")
        rect-b (aget canvas-rect "bottom")
        rect-r (aget canvas-rect "right")]
    (if (or (< view-x rect-l)
            (> view-x rect-r)
            (< view-y rect-t)
            (> view-y rect-b))
      false
      true)))


(defn update-mouse-down
  [event]
  (reset! click-down true))


(defn update-mouse-up
  [event]
  (reset! click-down false))


(defn update-mouse-pos
  "Update relative canvas mouse coordinates."
  [event]
  (reset! mouse-pos
          (let [rect (.getBoundingClientRect surface)
                new-x (- (aget event "clientX") (aget rect "left"))
                new-y (- (aget event "clientY") (aget rect "top"))]
            (if (is-canvas-coord rect event)
              {:x new-x :y new-y}
              {:x (:x @mouse-pos) :y (:y @mouse-pos)}))))


(defn update-key-down
  [event]
  (let [keys @keys-down]
    (case (aget event "keyCode")
      87 (reset! keys-down (update-in keys [:w] (fn [] [ 0 -1])))
      65 (reset! keys-down (update-in keys [:a] (fn [] [-1  0])))
      83 (reset! keys-down (update-in keys [:s] (fn [] [ 0  1])))
      68 (reset! keys-down (update-in keys [:d] (fn [] [ 1  0])))
      event)))


(defn update-key-up
  [event]
  (let [keys @keys-down]
    (case (aget event "keyCode")
      87 (reset! keys-down (update-in keys [:w] (fn [] [0 0])))
      65 (reset! keys-down (update-in keys [:a] (fn [] [0 0])))
      83 (reset! keys-down (update-in keys [:s] (fn [] [0 0])))
      68 (reset! keys-down (update-in keys [:d] (fn [] [0 0])))
      event)))

;; ----------------------------------------
;;  Register callbacks
;; ----------------------------------------
(aset js/window "onmousemove" update-mouse-pos)
(aset js/window "onkeydown" update-key-down)
(aset js/window "onkeyup" update-key-up)
(aset js/window "onmouseup" update-mouse-up)
(aset js/window "onmousedown" update-mouse-down)

;; ----------------------------------------------------------------------
;;
;;  Drawing functions
;;
;; ----------------------------------------------------------------------

(defn draw-player-ship
  [state context]
  (let [px (get-in state [:player :motion :pos-x])
        py (get-in state [:player :motion :pos-y])
        angle (get-in state [:player :rotation-angle])]
    (do (.save context)
        (.translate context px py)
        (.rotate context angle)
        (.translate context -10 -5)
        (.beginPath context)
        (.moveTo context 0 0)
        (.lineTo context 5 5)
        (.lineTo context 0, 10)
        (.lineTo context 20, 5)
        (.lineTo context 0 0)
        (.stroke context)
        (.restore context))))


(defn draw-bullets
  [state context]
  (doseq [b (:bullets state)]
    (let [bx (get-in b [:motion :pos-x])
          by (get-in b [:motion :pos-y])
          r  (:radius b)]
      (do (.save context)
          (.beginPath context)
          (.arc context (+ bx r) (+ by r) r 0 (* 2 3.1415) false)
          (.fill context)
          (.closePath context)
          (.restore context)))))


(defn draw-comets
  [state comets]
  (doseq [c (:comets state)]
    (let [cx (get-in c [:position :y])
          cy (get-in c [:position :x])
          r  (:radius c)]
      (if (:is-fragment c)
        (do (.save context)
            (.beginPath context)
            (.arc context (+ cx r) (+ cy r) r 0 (* 2 3.1415) false)
            (.stroke context)
            (.closePath context)
            (.restore context))
        (do (.save context)
            (.beginPath context)
            (.arc context (+ cx r) (+ cy r) r 0 (* 2 3.1415) false)
            (.stroke context)
            (.closePath context)
            (.restore context))))))


(defn draw-rocket
  [c rocket]
  ())


(defn draw-explosion
  [c exp]
  ())


(defn draw-hud
  [state context]
  (let [score (get-in state [:player :score])
        lives (get-in state [:player :lives])]
    (do (.beginPath context)
        (.rect context 0 0 (:w viewport) (:h viewport))
        (aset context "lineWidth" 2)
        (aset context "strokeStyle" "white")
        (.stroke context)
        (aset context "font" "20px Sans")
        (aset context "fillStyle" "white")
        (.fillText context (gstr/format "score: %s" score) 30 30)
        (.fillText context (gstr/format "lives: %s" lives) 30 55))))


(defn draw-alien-ship
  [state]
   ())


(defn draw-frame
  [state]
  (do (.clearRect context 0 0 (:w viewport) (:h viewport))
      (draw-player-ship state context)
      (draw-bullets state context)
      (draw-comets state context)
      (draw-hud state context)
      state))

;; ----------------------------------------------------------------------
;;
;;  Timing functions
;;
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
                  :pos-x (/ (:w viewport) 2)
                  :pos-y (/ (:h viewport) 2)
                  :speed 120)
   :forward-vector [0 0]
   :rotation-angle 0
   :radius 11
   :lives 3
   :health 100
   :attack-delay 130
   :time-before-attack 0
   :collision-circle-radius 5
   :score 0})


(def bullet
  {:motion motion
   :damage 10
   :radius 2
   :time-to-live 5               ;; in seconds
   :collision-circle-radius 2})


(def comet ;; when a comet is at 50% of max health it is split
  {:motion motion
   :radius 20
   :health 100
   :spawn-delay 2500
   :time-before-spawn 0
   :collision-circle-radius 20})


(def game-state
  (atom {:timer time
         :player player
         :bullets []
         :comets []}))


(defn move
  "Updates the motion <m> for time <t> and wraps the position
   if it leaves the viewport."
  [m t r]
  (let [x   (:pos-x m)
        y   (:pos-y m)
        s   (* (:speed m) (/ t 1000))
        dir (:dir m)]
    (cond
      (and (<= x (- 0 r))                   ;; Object is to the left of the viewport and is
           (<= (nth dir 0) 0))              ;; moving away from it
      (assoc m :pos-x (+ (:w viewport) r))
      (and (>= x (+ (:w viewport) r))       ;; right
           (>= (nth dir 0) 0))
      (assoc m :pos-x (- 0 r))
      (and (<= y (- 0 r))                   ;; above
           (<= (nth dir 1) 0))
      (assoc m :pos-y (+ (:h viewport) r))
      (and (>= y (+ (:h viewport) r))       ;; beneath
           (>= (nth dir 1) 0))
      (assoc m :pos-y (- 0 r))
      :else
      (let [moved-x (* s (nth dir 0))
            moved-y (* s (nth dir 1))
            new-x   (+ x moved-x)
            new-y   (+ y moved-y)]
        (assoc m :pos-x new-x :pos-y new-y)))))

;; ----------------------------------------------------------------------
;;
;;  Comets
;;
;; ----------------------------------------------------------------------

(defn comet-spawn
  [state is-fragment]
  (let [rad (if is-fragment
               (/ (:radius comet) 2)
               (:radius comet))
        axi (math/rng-int 2)                      ;; The axis on which the comet is spawned: x=0 y=1
        pos (if (= axi 0)                         ;; Position on the x or y axis
              {:x (math/rng-int (:w viewport)) :y (- rad 1)}
              {:x (- rad 1) :y (math/rng-int (:h viewport))})
        dir [(math/rng-float) (math/rng-float)]]
    (update-in
     state
     [:comets]
     (fn []
       (conj (:comets state)
             (assoc comet
                    :position pos
                    :direction-vector dir))))))


(defn update-comet-position
  [comet time-delta]
  ())


(defn update-comets
  [state]
  ())

;; ----------------------------------------------------------------------
;;
;;  Bullets
;;
;; ----------------------------------------------------------------------

(defn bullet-spawn
  [state motion]
  (let [bullet  (assoc bullet :motion motion)
        bullets (conj (:bullets state) bullet)]
    (assoc state :bullets bullets)))


(defn update-bullet-position
  [bullet time-delta]
  (let [motion  (get-in bullet [:motion])
        radius  (get-in bullet [:radius])]
    (assoc bullet :motion (move motion time-delta radius))))


(defn update-bullets
  [state]
  (let [time (get-in state [:time :delta])]
    (update-in
     state
     [:bullets]
     (fn [] (into []
                  (map (fn [b] (update-bullet-position b time)) (:bullets state)))))))
;; ----------------------------------------------------------------------
;;
;;  Player stuff
;;
;; ----------------------------------------------------------------------

;;(defn player-spawn
;;  [state]
;;  (assoc player :))

(defn update-player-position
  [state]
  (let [player (get-in state [:player])
        motion (get-in player [:motion])
        radius (get-in player [:radius])
        time   (get-in state [:time :delta])]
    (assoc state :player
           (assoc player :motion
                  (move motion time radius)))))


(defn update-player-direction
  [state]
  (update-in state [:player :motion :dir]
             (fn [] (math/vector-normalize
                     (map +
                          (:w @keys-down)
                          (:a @keys-down)
                          (:s @keys-down)
                          (:d @keys-down))))))


(defn update-player-rotation-angle
  "Updates the rotation-angle of the ship and the forward-vector.

  Direction is based on the position of the mouse sursor. The player ship
  should always facing the cursor"
  [state]
  (let [mx  (:x @mouse-pos)                   ;; mouse pointer x coordinate
        my  (:y @mouse-pos)                   ;; mouse pointer y coordinate
        px  (get-in state [:player :motion :pos-x]) ;; player position x
        py  (get-in state [:player :motion :pos-y]) ;; player position y
        a   (- px mx)                         ;; Distance between the mouse and the player along the x axis
        b   (- py my)                         ;; Distance between the mouse and the player along the y axis
        ang (.atan2 js/Math a b)
        adj (* -1 (+ ang (/ 3.1415 2)))]      ;; The angle at which the player would be facing the mouse
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
    (if (and @click-down (<= think 0))
      (update-in (bullet-spawn state (assoc motion
                                            :pos-x (+ px (* 11 fw-x))
                                            :pos-y (+ py (* 11 fw-y))
                                            :dir   [fw-x fw-y]
                                            :speed 300))
                 [:player :time-before-attack]
                 (fn [] delay))
      (update-in state
                 [:player :time-before-attack]
                 (fn [] (- think time))))))


(reset! game-state (comet-spawn @game-state false))

(defn debug
  [s]
  (do (.log js/console (gstr/format "x=%s y=%s" (get-in s [:player :motion :pos-x]) (get-in s [:player :motion :pos-y])))
      s))


(defn update-frame
  []
  (do (reset! game-state
              (update-time-start
               (draw-frame
;;              (debug
                (update-bullets
                 (update-player-attack
                  (update-player-position
                   (update-player-direction
                    (update-player-rotation-angle
                     (update-time-delta @game-state)))))))))
      (.requestAnimationFrame js/window update-frame)))


(.requestAnimationFrame js/window update-frame)
