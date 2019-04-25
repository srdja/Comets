// Compiled by ClojureScript 0.0-2322
goog.provide('comets.math');
goog.require('cljs.core');
comets.math.vector_normalize = (function vector_normalize(v){var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(0));var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(0))))
{return v;
} else
{var l = Math.sqrt(((x * x) + (y * y)));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((1) / l) * x),(((1) / l) * y)], null);
}
});
/**
* Returns a random number from 0 to range -1
*/
comets.math.rng_int = (function rng_int(range){return Math.floor((range * Math.random()));
});
comets.math.rng_float = (function rng_float(){return (Math.random() * ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),comets.math.rng_int((2))))?(-1):(1)));
});
