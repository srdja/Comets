(ns comets.draw
  (:require [goog.string.format]
            [goog.string :as gstr]))

(def surface (.getElementById js/document "surface"))

;; Drawing context
(def context (.getContext surface "2d"))


(def viewport {:w 900 :h 600})


(defn draw-player-ship
  [state context]
  (let [player (get-in state [:player])
        px     ((:motion player) :pos-x)
        py     ((:motion player) :pos-y)
        angle  (:rotation-angle player)]
    (if-not (:is-spawned player)
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
          (.restore context))
      (let [timenow  (.now js/Date)
            ;; modulate color based on time
            color    (* (mod (- timenow (:spawn-timestamp player)) 255) 1)
            colorstr (str "rgb(" color "," color "," color ")")]
        (do (.save context)
            (aset context "strokeStyle" colorstr)
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
            (.restore context))))))


(defn draw-particles
  [particles context color]
  (doseq [p particles]
    (let [px (get-in p [:motion :pos-x])
          py (get-in p [:motion :pos-y])
          r  (:radius p)]
      (do (.save context)
          (.beginPath context)
          (aset context "fillStyle" color)
          (.arc context (+ px r) (+ py r) r 0 (* 2 3.1415) false)
          (.fill context)
          (.closePath context)
          (.restore context)))))


(defn draw-bullets
  [state context]
  (draw-particles (:bullets state) context "#81F7D8"))


(defn draw-explosions
  [state context]
  (doseq [e (:explosions state)]
    (draw-particles e context "white")))


(defn draw-comets
  [state comets]
  (doseq [c (:comets state)]
    (let [cx (get-in c [:motion :pos-x])
          cy (get-in c [:motion :pos-y])
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
            (.moveTo context cx (- cy r)) ;; base
            (.lineTo context (+ cx (* r 0.2)) (- cy (* r 0.4)))
            (.lineTo context (+ cx (* r 0.8)) (- cy (* r 0.8)))
            (.lineTo context (+ cx r) cy) ;; base
            (.lineTo context (+ cx (* r 0.6)) (+ cy (* r 0.1)))
            (.lineTo context (+ cx (* r 0.8)) (+ cy (* r 0.9)))
            (.lineTo context (+ cx (* r 0.2)) (+ cy (* r 0.8)))
            (.lineTo context cx (+ cy r)) ;; base
            (.lineTo context (- cx (* r 0.7)) (+ cy (* r 0.5)))
            (.lineTo context (- cx (* r 0.6)) (+ cy (* r 0.2)))
            (.lineTo context (- cx r) cy) ;; base
            (.lineTo context cx (- cy r)) ;; base
            (.stroke context)
            (.restore context))))))


(defn draw-hud
  [state context]
  (let [score (get-in state [:player :score])
        lives (get-in state [:player :lives])]
    (do (.beginPath context)
        (.rect context 0 0 (:w viewport) (:h viewport))
        (aset context "lineWidth" 1)
        (aset context "strokeStyle" "white")
        (.stroke context)
        (aset context "font" "20px Share Tech Mono")
        (aset context "fillStyle" "white")
        (.fillText context (gstr/format "score: %s" score) 15 30)
        (.fillText context (gstr/format "lives: %s" lives) 15 55)
        (aset context "font" "8px Sans")
        (aset context "fillStyle" "white")
        (.fillText context (gstr/format "Moving around (W,A,S,D) / Aiming (Mouse pointer) / Shooting (Left click)") 15 (- (:h viewport) 10)))))


(defn draw-alien-ship
  [state]
  ())


(defn draw-frame
  [state]
  (do (.clearRect context 0 0 (:w viewport) (:h viewport))
      (draw-player-ship state context)
      (draw-bullets state context)
      (draw-explosions state context)
      (draw-comets state context)
      (draw-hud state context)
      state))
