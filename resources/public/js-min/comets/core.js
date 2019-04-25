// Compiled by ClojureScript 0.0-2322
goog.provide('comets.core');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string');
goog.require('comets.draw');
goog.require('comets.draw');
goog.require('comets.input');
goog.require('comets.input');
goog.require('comets.math');
goog.require('comets.math');
goog.require('goog.string.format');
/**
* Called at the begining of a frame to determine the duration of
* the previous frame.
*/
comets.core.update_time_delta = (function update_time_delta(s){var ct = Date.now();var upd_delta_t = ((function (ct){
return (function (){return (ct - cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$88,cljs.core.constant$keyword$89], null)));
});})(ct))
;var new_delta_t = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$88,cljs.core.constant$keyword$90], null),upd_delta_t);return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(new_delta_t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$88,cljs.core.constant$keyword$91], null),((function (ct,upd_delta_t,new_delta_t){
return (function (){return ct;
});})(ct,upd_delta_t,new_delta_t))
);
});
/**
* Called at the end of the current frame to prepare the
* timer for the next frame.
*/
comets.core.update_time_start = (function update_time_start(s){return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$88,cljs.core.constant$keyword$89], null),(function (){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$88,cljs.core.constant$keyword$91], null));
}));
});
comets.core.motion = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$71,(0),cljs.core.constant$keyword$72,(0),cljs.core.constant$keyword$92,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.constant$keyword$93,(0)], null);
comets.core.time = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$89,Date.now(),cljs.core.constant$keyword$90,(0),cljs.core.constant$keyword$91,(0)], null);
comets.core.player = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$94,cljs.core.constant$keyword$70,cljs.core.constant$keyword$95,cljs.core.constant$keyword$73,cljs.core.constant$keyword$76,cljs.core.constant$keyword$96,cljs.core.constant$keyword$97,cljs.core.constant$keyword$81,cljs.core.constant$keyword$98,cljs.core.constant$keyword$99,cljs.core.constant$keyword$82,cljs.core.constant$keyword$74,cljs.core.constant$keyword$75],[(5),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(comets.core.motion,cljs.core.constant$keyword$71,(cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(comets.draw.viewport) / (2)),cljs.core.array_seq([cljs.core.constant$keyword$72,(cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(comets.draw.viewport) / (2)),cljs.core.constant$keyword$93,(120)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(0),(11),(2500),(0),(0),(100),(130),(3),true,Date.now()]);
comets.core.bullet = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$70,comets.core.motion,cljs.core.constant$keyword$100,(10),cljs.core.constant$keyword$76,(2),cljs.core.constant$keyword$101,(3000),cljs.core.constant$keyword$94,(2)], null);
comets.core.comet = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$70,comets.core.motion,cljs.core.constant$keyword$76,(40),cljs.core.constant$keyword$98,(100),cljs.core.constant$keyword$102,(2500),cljs.core.constant$keyword$103,(0),cljs.core.constant$keyword$94,(36)], null);
comets.core.particle = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$70,comets.core.motion,cljs.core.constant$keyword$101,(0),cljs.core.constant$keyword$76,(1)], null);
comets.core.game_state = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$104,comets.core.time,cljs.core.constant$keyword$69,comets.core.player,cljs.core.constant$keyword$77,cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$79,cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$78,cljs.core.PersistentVector.EMPTY], null)) : cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$104,comets.core.time,cljs.core.constant$keyword$69,comets.core.player,cljs.core.constant$keyword$77,cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$79,cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$78,cljs.core.PersistentVector.EMPTY], null)));
/**
* Updates the motion for time and wraps the position
* if it leaves the viewport.
*/
comets.core.move = (function move(motion,time,radius){var x = cljs.core.constant$keyword$71.cljs$core$IFn$_invoke$arity$1(motion);var y = cljs.core.constant$keyword$72.cljs$core$IFn$_invoke$arity$1(motion);var s = (cljs.core.constant$keyword$93.cljs$core$IFn$_invoke$arity$1(motion) * (time / (1000)));var dir = cljs.core.constant$keyword$92.cljs$core$IFn$_invoke$arity$1(motion);if(((x <= ((0) - radius))) && ((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dir,(0)) <= (0))))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(motion,cljs.core.constant$keyword$71,(cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(comets.draw.viewport) + radius));
} else
{if(((x >= (cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(comets.draw.viewport) + radius))) && ((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dir,(0)) >= (0))))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(motion,cljs.core.constant$keyword$71,((0) - radius));
} else
{if(((y <= ((0) - radius))) && ((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dir,(1)) <= (0))))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(motion,cljs.core.constant$keyword$72,(cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(comets.draw.viewport) + radius));
} else
{if(((y >= (cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(comets.draw.viewport) + radius))) && ((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dir,(1)) >= (0))))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(motion,cljs.core.constant$keyword$72,((0) - radius));
} else
{var moved_x = (s * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dir,(0)));var moved_y = (s * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dir,(1)));var new_x = (x + moved_x);var new_y = (y + moved_y);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(motion,cljs.core.constant$keyword$71,new_x,cljs.core.array_seq([cljs.core.constant$keyword$72,new_y], 0));

}
}
}
}
});
comets.core.update_motion = (function update_motion(mover,time_delta){var motion = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(mover,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$70], null));var radius = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(mover,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76], null));return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mover,cljs.core.constant$keyword$70,comets.core.move(motion,time_delta,radius));
});
comets.core.update_ttl = (function update_ttl(expierable,time){var t = (cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(expierable) - time);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(expierable,cljs.core.constant$keyword$101,t);
});
comets.core.circle_collided_QMARK_ = (function circle_collided_QMARK_(m1,m2,r1,r2){var x1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$71], null));var x2 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$71], null));var y1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$72], null));var y2 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$72], null));var a = ((function (){var x__3867__auto__ = x1;var y__3868__auto__ = x2;return ((x__3867__auto__ > y__3868__auto__) ? x__3867__auto__ : y__3868__auto__);
})() - (function (){var x__3874__auto__ = x1;var y__3875__auto__ = x2;return ((x__3874__auto__ < y__3875__auto__) ? x__3874__auto__ : y__3875__auto__);
})());var b = ((function (){var x__3867__auto__ = y1;var y__3868__auto__ = y2;return ((x__3867__auto__ > y__3868__auto__) ? x__3867__auto__ : y__3868__auto__);
})() - (function (){var x__3874__auto__ = y1;var y__3875__auto__ = y2;return ((x__3874__auto__ < y__3875__auto__) ? x__3874__auto__ : y__3875__auto__);
})());var h = Math.sqrt(((a * a) + (b * b)));if((h < (r1 + r2)))
{return true;
} else
{return false;
}
});
comets.core.respawn_player = (function respawn_player(state){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$69], null)),cljs.core.constant$keyword$70,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(comets.core.player,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$70], null)),cljs.core.array_seq([cljs.core.constant$keyword$82,(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$69], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$82], null)) - (1)),cljs.core.constant$keyword$74,true,cljs.core.constant$keyword$75,Date.now()], 0));
});
comets.core.player_comet_collision = (function player_comet_collision(state){var p_motion = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$69,cljs.core.constant$keyword$70], null));var p_radius = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$69,cljs.core.constant$keyword$94], null));var comets__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79], null));if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$69,cljs.core.constant$keyword$74], null))))
{return state;
} else
{if(cljs.core.truth_(cljs.core.some(((function (p_motion,p_radius,comets__$1){
return (function (p1__8045_SHARP_){var comet_motion = cljs.core.constant$keyword$70.cljs$core$IFn$_invoke$arity$1(p1__8045_SHARP_);var comet_radius = cljs.core.constant$keyword$94.cljs$core$IFn$_invoke$arity$1(p1__8045_SHARP_);return comets.core.circle_collided_QMARK_(p_motion,comet_motion,p_radius,comet_radius);
});})(p_motion,p_radius,comets__$1))
,comets__$1)))
{var lives = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$69,cljs.core.constant$keyword$82], null));return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$69,comets.core.respawn_player(state));
} else
{return state;
}
}
});
comets.core.particle_spawn = (function particle_spawn(x,y){var m = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(comets.core.motion,cljs.core.constant$keyword$71,x,cljs.core.array_seq([cljs.core.constant$keyword$72,y,cljs.core.constant$keyword$93,comets.math.rng_int((600)),cljs.core.constant$keyword$92,comets.math.vector_normalize(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comets.math.rng_float(),comets.math.rng_float()], null))], 0));var ttl = comets.math.rng_int((1000));return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(comets.core.particle,cljs.core.constant$keyword$70,m,cljs.core.array_seq([cljs.core.constant$keyword$101,ttl], 0));
});
comets.core.explosion_spawn = (function explosion_spawn(state,x,y,n){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$78,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$78.cljs$core$IFn$_invoke$arity$1(state),cljs.core.PersistentVector.fromArray([comets.core.particle_spawn(x,y),comets.core.particle_spawn(x,y),comets.core.particle_spawn(x,y),comets.core.particle_spawn(x,y),comets.core.particle_spawn(x,y),comets.core.particle_spawn(x,y),comets.core.particle_spawn(x,y),comets.core.particle_spawn(x,y),comets.core.particle_spawn(x,y),comets.core.particle_spawn(x,y),comets.core.particle_spawn(x,y),comets.core.particle_spawn(x,y),comets.core.particle_spawn(x,y),comets.core.particle_spawn(x,y),comets.core.particle_spawn(x,y),comets.core.particle_spawn(x,y),comets.core.particle_spawn(x,y),comets.core.particle_spawn(x,y),comets.core.particle_spawn(x,y),comets.core.particle_spawn(x,y),comets.core.particle_spawn(x,y),comets.core.particle_spawn(x,y),comets.core.particle_spawn(x,y),comets.core.particle_spawn(x,y),comets.core.particle_spawn(x,y),comets.core.particle_spawn(x,y),comets.core.particle_spawn(x,y),comets.core.particle_spawn(x,y),comets.core.particle_spawn(x,y),comets.core.particle_spawn(x,y),comets.core.particle_spawn(x,y),comets.core.particle_spawn(x,y),comets.core.particle_spawn(x,y),comets.core.particle_spawn(x,y),comets.core.particle_spawn(x,y),comets.core.particle_spawn(x,y),comets.core.particle_spawn(x,y),comets.core.particle_spawn(x,y),comets.core.particle_spawn(x,y)], true)));
});
comets.core.update_particles = (function update_particles(particles,time){var remaining_particles = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p){return (cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(p) <= (0));
}),particles));return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (remaining_particles){
return (function (p){return comets.core.update_motion(comets.core.update_ttl(p,time),time);
});})(remaining_particles))
,remaining_particles));
});
comets.core.update_explosions = (function update_explosions(state){var time = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$88,cljs.core.constant$keyword$90], null));var exps = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$78], null));var u_exp = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (time,exps){
return (function (e){return comets.core.update_particles(e,time);
});})(time,exps))
,exps));var r_exp = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (time,exps,u_exp){
return (function (e){return cljs.core.empty_QMARK_(e);
});})(time,exps,u_exp))
,u_exp));return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$78,r_exp);
});
comets.core.comet_spawn = (function comet_spawn(state,is_fragment){var rad = (cljs.core.truth_(is_fragment)?(cljs.core.constant$keyword$76.cljs$core$IFn$_invoke$arity$1(comets.core.comet) / (2)):cljs.core.constant$keyword$76.cljs$core$IFn$_invoke$arity$1(comets.core.comet));var axi = comets.math.rng_int((2));var pos = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(axi,(0)))?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$83,comets.math.rng_int(cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(comets.draw.viewport)),cljs.core.constant$keyword$84,(rad - (1))], null):new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$83,(rad - (1)),cljs.core.constant$keyword$84,comets.math.rng_int(cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(comets.draw.viewport))], null));var dir = comets.math.vector_normalize(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comets.math.rng_float(),comets.math.rng_float()], null));return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$79,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(state),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(comets.core.comet,cljs.core.constant$keyword$70,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(comets.core.motion,cljs.core.constant$keyword$71,cljs.core.constant$keyword$83.cljs$core$IFn$_invoke$arity$1(pos),cljs.core.array_seq([cljs.core.constant$keyword$72,cljs.core.constant$keyword$84.cljs$core$IFn$_invoke$arity$1(pos),cljs.core.constant$keyword$93,(100),cljs.core.constant$keyword$92,dir], 0)),cljs.core.array_seq([cljs.core.constant$keyword$76,rad], 0))));
});
comets.core.update_comets = (function update_comets(state){var time = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$88,cljs.core.constant$keyword$90], null));return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$79,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (time){
return (function (c){return comets.core.update_motion(c,time);
});})(time))
,cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(state))));
});
comets.core.bullet_spawn = (function bullet_spawn(state,motion){var bullet = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(comets.core.bullet,cljs.core.constant$keyword$70,motion);var bullets = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$77.cljs$core$IFn$_invoke$arity$1(state),bullet);var exp = comets.core.explosion_spawn(state,(400),(300),(20));return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exp,cljs.core.constant$keyword$77,bullets);
});
comets.core.update_bullets = (function update_bullets(state){var time = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$88,cljs.core.constant$keyword$90], null));var bullets = cljs.core.constant$keyword$77.cljs$core$IFn$_invoke$arity$1(state);var remaining_bullets = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (time,bullets){
return (function (b){return (cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(b) <= (0));
});})(time,bullets))
,bullets);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$77,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (time,bullets,remaining_bullets){
return (function (b){return comets.core.update_motion(comets.core.update_ttl(b,time),time);
});})(time,bullets,remaining_bullets))
,remaining_bullets)));
});
comets.core.update_player_spawn_timer = (function update_player_spawn_timer(state){if(cljs.core.not(cljs.core.constant$keyword$74.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$69], null)))))
{return state;
} else
{var player = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$69], null));var duration = cljs.core.constant$keyword$96.cljs$core$IFn$_invoke$arity$1(player);var timestamp = cljs.core.constant$keyword$75.cljs$core$IFn$_invoke$arity$1(player);var timenow = Date.now();if(((timenow - timestamp) >= duration))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$69,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(player,cljs.core.constant$keyword$74,false));
} else
{return state;
}
}
});
comets.core.update_player_position = (function update_player_position(state){var player = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$69], null));var time = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$88,cljs.core.constant$keyword$90], null));return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$69,comets.core.update_motion(player,time));
});
comets.core.update_player_direction = (function update_player_direction(state){return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$69,cljs.core.constant$keyword$70,cljs.core.constant$keyword$92], null),(function (){return comets.math.vector_normalize(cljs.core.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(comets.input.keys_down) : cljs.core.deref.call(null,comets.input.keys_down))),cljs.core.constant$keyword$85.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(comets.input.keys_down) : cljs.core.deref.call(null,comets.input.keys_down))),cljs.core.constant$keyword$86.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(comets.input.keys_down) : cljs.core.deref.call(null,comets.input.keys_down))),cljs.core.array_seq([cljs.core.constant$keyword$87.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(comets.input.keys_down) : cljs.core.deref.call(null,comets.input.keys_down)))], 0)));
}));
});
/**
* updates the rotation-angle of the ship and the forward-vector.
* 
* direction is based on the position of the mouse sursor. the player ship
* should always facing the cursor
*/
comets.core.update_player_rotation_angle = (function update_player_rotation_angle(state){var mx = cljs.core.constant$keyword$83.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(comets.input.mouse_pos) : cljs.core.deref.call(null,comets.input.mouse_pos)));var my = cljs.core.constant$keyword$84.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(comets.input.mouse_pos) : cljs.core.deref.call(null,comets.input.mouse_pos)));var px = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$69,cljs.core.constant$keyword$70,cljs.core.constant$keyword$71], null));var py = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$69,cljs.core.constant$keyword$70,cljs.core.constant$keyword$72], null));var a = (px - mx);var b = (py - my);var ang = Math.atan2(a,b);var adj = ((-1) * (ang + (3.1415 / (2))));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$69,cljs.core.constant$keyword$73], null),((function (mx,my,px,py,a,b,ang,adj){
return (function (){return adj;
});})(mx,my,px,py,a,b,ang,adj))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$69,cljs.core.constant$keyword$95], null),((function (mx,my,px,py,a,b,ang,adj){
return (function (){return comets.math.vector_normalize(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(a * (-1)),((-1) * b)], null));
});})(mx,my,px,py,a,b,ang,adj))
);
});
comets.core.update_player_attack = (function update_player_attack(state){var px = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$69,cljs.core.constant$keyword$70,cljs.core.constant$keyword$71], null));var py = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$69,cljs.core.constant$keyword$70,cljs.core.constant$keyword$72], null));var fw_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$69,cljs.core.constant$keyword$95], null)),(0));var fw_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$69,cljs.core.constant$keyword$95], null)),(1));var delay = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$69,cljs.core.constant$keyword$99], null));var think = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$69,cljs.core.constant$keyword$97], null));var time = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$88,cljs.core.constant$keyword$90], null));if(cljs.core.truth_((function (){var and__3548__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(comets.input.click_down) : cljs.core.deref.call(null,comets.input.click_down));if(cljs.core.truth_(and__3548__auto__))
{return (think <= (0));
} else
{return and__3548__auto__;
}
})()))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(comets.core.bullet_spawn(state,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(comets.core.motion,cljs.core.constant$keyword$71,(px + ((11) * fw_x)),cljs.core.array_seq([cljs.core.constant$keyword$72,(py + ((11) * fw_y)),cljs.core.constant$keyword$92,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fw_x,fw_y], null),cljs.core.constant$keyword$93,(400)], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$69,cljs.core.constant$keyword$97], null),((function (px,py,fw_x,fw_y,delay,think,time){
return (function (){return delay;
});})(px,py,fw_x,fw_y,delay,think,time))
);
} else
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$69,cljs.core.constant$keyword$97], null),((function (px,py,fw_x,fw_y,delay,think,time){
return (function (){return (think - time);
});})(px,py,fw_x,fw_y,delay,think,time))
);
}
});
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(comets.core.game_state,comets.core.comet_spawn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(comets.core.game_state) : cljs.core.deref.call(null,comets.core.game_state)),false)) : cljs.core.reset_BANG_.call(null,comets.core.game_state,comets.core.comet_spawn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(comets.core.game_state) : cljs.core.deref.call(null,comets.core.game_state)),false)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(comets.core.game_state,comets.core.comet_spawn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(comets.core.game_state) : cljs.core.deref.call(null,comets.core.game_state)),false)) : cljs.core.reset_BANG_.call(null,comets.core.game_state,comets.core.comet_spawn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(comets.core.game_state) : cljs.core.deref.call(null,comets.core.game_state)),false)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(comets.core.game_state,comets.core.comet_spawn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(comets.core.game_state) : cljs.core.deref.call(null,comets.core.game_state)),false)) : cljs.core.reset_BANG_.call(null,comets.core.game_state,comets.core.comet_spawn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(comets.core.game_state) : cljs.core.deref.call(null,comets.core.game_state)),false)));
comets.core.update_frame = (function update_frame(){(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(comets.core.game_state,comets.core.update_time_start(comets.draw.draw_frame(comets.core.player_comet_collision(comets.core.update_explosions(comets.core.update_comets(comets.core.update_bullets(comets.core.update_player_attack(comets.core.update_player_position(comets.core.update_player_direction(comets.core.update_player_rotation_angle(comets.core.update_player_spawn_timer(comets.core.update_time_delta((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(comets.core.game_state) : cljs.core.deref.call(null,comets.core.game_state))))))))))))))) : cljs.core.reset_BANG_.call(null,comets.core.game_state,comets.core.update_time_start(comets.draw.draw_frame(comets.core.player_comet_collision(comets.core.update_explosions(comets.core.update_comets(comets.core.update_bullets(comets.core.update_player_attack(comets.core.update_player_position(comets.core.update_player_direction(comets.core.update_player_rotation_angle(comets.core.update_player_spawn_timer(comets.core.update_time_delta((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(comets.core.game_state) : cljs.core.deref.call(null,comets.core.game_state))))))))))))))));
return window.requestAnimationFrame(update_frame);
});
window.requestAnimationFrame(comets.core.update_frame);
