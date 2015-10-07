// Compiled by ClojureScript 0.0-2322
goog.provide('comets.math');
goog.require('cljs.core');
comets.math.vector_normalize = (function vector_normalize(v){var x = cljs.core.nth.call(null,v,(0));var y = cljs.core.nth.call(null,v,(1));var l = Math.sqrt(((x * x) + (y * y)));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((1.0 / l) * x),((1.0 / l) * y)], null);
});

//# sourceMappingURL=math.js.map