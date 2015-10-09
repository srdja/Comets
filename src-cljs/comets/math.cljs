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

(ns comets.math)

(defn vector-normalize
  [v]
  (let [x (nth v 0)
        y (nth v 1)]
    (if (or (= x 0) (= y 0))
      v
      (let [l (.sqrt js/Math (+ (* x x)
                                (* y y)))]
        [(* (/ 1 l) x)
         (* (/ 1 l) y)]))))


(defn rng-int
  "Returns a random number from 0 to range -1"
  [range]
  (.floor js/Math (* range (.random js/Math))))


(defn rng-float
  []
  (* (.random js/Math)
     (if (= 1 (rng-int 2))
       -1
        1))
