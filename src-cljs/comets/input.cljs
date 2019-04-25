(ns comets.input
  (:require [comets.draw :as draw]))

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
          (let [rect (.getBoundingClientRect draw/surface)
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
