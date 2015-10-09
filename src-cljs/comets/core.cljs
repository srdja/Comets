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
  (let [px (get-in state [:player :position :x])
        py (get-in state [:player :position :y])
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
    (let [bx (get-in b [:position :x])
          by (get-in b [:position :y])
          r  (:radius b)]
      (do (.save context)
          (.beginPath context)
          (.arc context (+ bx r) (+ by r) r 0 (* 2 3.1415) false)
          (.fill context)
          (.closePath context)
          (.restore context)))))


(defn draw-comet
  [c comet]
  ())


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
        (.rect context 0 0 900 700)
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
  (do (.clearRect context 0 0 900 700)
      (draw-player-ship state context)
      (draw-bullets state context)
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


(def time
  {:start (.now js/Date)
   :delta 0
   :current 0})


(def animation
  {:duration 0})


(def player
  {:is-alive true
   :position {:x (/ 900 2) :y (/ 700 2)}
   :direction-vector [0 0]
   :forward-vector [0 0]
   :rotation-angle 0
   :lives 3
   :speed-mod 120
   :health 100
   :attack-delay 400
   :time-before-attack 0
   :collision-circle-radius 5
   :score 0})


(def bullet
  {:position {:x 0 :y 0}
   :direction-vector [0 0]
   :damage 10
   :speed-mod 240
   :radius 2
   :time-to-live 5               ;; in seconds
   :collision-circle-radius 2})


(def game-state
  (atom {:timer time
         :player player
         :bullets []
         }))

;; ----------------------------------------------------------------------
;;
;;  Bullets
;;
;; ----------------------------------------------------------------------

(defn bullet-spawn
  [state pos dir]
  (update-in
   state
   [:bullets]
   (fn []
     (conj (:bullets state)
           (assoc bullet
                  :position pos
                  :direction-vector dir)))))


(defn update-bullet-position
  [bullet time-delta]
  (let [x       (get-in bullet [:position :x])
        y       (get-in bullet [:position :y])
        speed   (get-in bullet [:speed-mod])
        dir     (get-in bullet [:direction-vector])
        moved-x (* speed (/ time-delta 1000) (nth dir 0))
        moved-y (* speed (/ time-delta 1000) (nth dir 1))
        new-x   (+ x moved-x)
        new-y   (+ y moved-y)]
    (update-in bullet [:position] (fn [] {:x new-x :y new-y}))))


(defn update-bullets
  [state]
  (let [time (get-in state [:time :delta])]
    (update-in
     state
     [:bullets]
     (fn [] (into []
                  (map (fn [m] (update-bullet-position m time)) (:bullets state)))))))
;; ----------------------------------------------------------------------
;;
;;  Player stuff
;;
;; ----------------------------------------------------------------------

(defn update-player-position
  [s]
  (let [play-x  (get-in s [:player :position :x])
        play-y  (get-in s [:player :position :y])
        dir     (get-in s [:player :direction-vector])
        speed   (get-in s [:player :speed-mod])
        dt-sec  (/ (get-in s [:time :delta]) 1000)
        moved-x (* speed dt-sec (nth dir 0))
        moved-y (* speed dt-sec (nth dir 1))
        new-x   (+ play-x moved-x)
        new-y   (+ play-y moved-y)]
    (update-in s [:player :position] (fn [] {:x new-x :y new-y}))))


(defn update-player-direction
  [s]
  (update-in s [:player :direction-vector]
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
  [s]
  (let [mx  (:x @mouse-pos)                   ;; mouse pointer x coordinate
        my  (:y @mouse-pos)                   ;; mouse pointer y coordinate
        px  (get-in s [:player :position :x]) ;; player position x
        py  (get-in s [:player :position :y]) ;; player position y
        a   (- px mx)                         ;; Distance between the mouse and the player along the x axis
        b   (- py my)                         ;; Distance between the mouse and the player along the y axis
        ang (.atan2 js/Math a b)
        adj (* -1 (+ ang (/ 3.1415 2)))]      ;; The angle at which the player would be facing the mouse
                                              ;; * -1 flips the direction of the rotation
    (update-in (update-in s [:player :rotation-angle] (fn [] adj))
               [:player :forward-vector] (fn [] (math/vector-normalize [(* a -1) (* -1 b)])))))


(defn update-player-attack
  [state]
  (let [bullets (:bullets state)
        px      (get-in state [:player :position :x])
        py      (get-in state [:player :position :y])
        fw-x    (nth (get-in state [:player :forward-vector]) 0)
        fw-y    (nth (get-in state [:player :forward-vector]) 1)
        delay   (get-in state [:player :attack-delay])
        think   (get-in state [:player :time-before-attack])
        time    (get-in state [:time :delta])]
    (if (and @click-down (<= think 0))
      (update-in (bullet-spawn state
                               {:x (+ px (* -13 fw-x))   ;; the bullet should spawn at the tip of the ship
                                :y (+ py (* -13 fw-y))}  ;; coordinates are flipped
                               [fw-x fw-y])
                 [:player :time-before-attack]
                 (fn [] delay))
      (update-in state
                 [:player :time-before-attack]
                 (fn [] (- think time))))))


(defn new-game
  [s]
  s)


(defn debug
  [s]
  (do (.log js/console (gstr/format "x=%s" (nth (get-in s [:player :forward-vector]) 1)))
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
