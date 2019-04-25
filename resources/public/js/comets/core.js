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
return (function (){return (ct - cljs.core.get_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"start","start",-355208981)], null)));
});})(ct))
;var new_delta_t = cljs.core.update_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"delta","delta",108939957)], null),upd_delta_t);return cljs.core.update_in.call(null,new_delta_t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"current","current",-1088038603)], null),((function (ct,upd_delta_t,new_delta_t){
return (function (){return ct;
});})(ct,upd_delta_t,new_delta_t))
);
});
/**
* Called at the end of the current frame to prepare the
* timer for the next frame.
*/
comets.core.update_time_start = (function update_time_start(s){return cljs.core.update_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"start","start",-355208981)], null),(function (){return cljs.core.get_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"current","current",-1088038603)], null));
}));
});
comets.core.motion = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pos-x","pos-x",398349422),(0),new cljs.core.Keyword(null,"pos-y","pos-y",992315996),(0),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"speed","speed",1257663751),(0)], null);
comets.core.time = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),Date.now(),new cljs.core.Keyword(null,"delta","delta",108939957),(0),new cljs.core.Keyword(null,"current","current",-1088038603),(0)], null);
comets.core.player = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"collision-circle-radius","collision-circle-radius",255209504),new cljs.core.Keyword(null,"motion","motion",36831425),new cljs.core.Keyword(null,"forward-vector","forward-vector",1329493186),new cljs.core.Keyword(null,"rotation-angle","rotation-angle",-1155216918),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"spawn-state-duration","spawn-state-duration",1883734606),new cljs.core.Keyword(null,"time-before-attack","time-before-attack",1344769937),new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"health","health",-295520649),new cljs.core.Keyword(null,"attack-delay","attack-delay",-975870217),new cljs.core.Keyword(null,"lives","lives",845902073),new cljs.core.Keyword(null,"is-spawned","is-spawned",1505493980),new cljs.core.Keyword(null,"spawn-timestamp","spawn-timestamp",325781373)],[(5),cljs.core.assoc.call(null,comets.core.motion,new cljs.core.Keyword(null,"pos-x","pos-x",398349422),(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(comets.draw.viewport) / (2)),new cljs.core.Keyword(null,"pos-y","pos-y",992315996),(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(comets.draw.viewport) / (2)),new cljs.core.Keyword(null,"speed","speed",1257663751),(120)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(0),(11),(2500),(0),(0),(100),(130),(3),true,Date.now()]);
comets.core.bullet = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"motion","motion",36831425),comets.core.motion,new cljs.core.Keyword(null,"damage","damage",970520018),(10),new cljs.core.Keyword(null,"radius","radius",-2073122258),(2),new cljs.core.Keyword(null,"ttl","ttl",-1115275118),(3000),new cljs.core.Keyword(null,"collision-circle-radius","collision-circle-radius",255209504),(2)], null);
comets.core.comet = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"motion","motion",36831425),comets.core.motion,new cljs.core.Keyword(null,"radius","radius",-2073122258),(40),new cljs.core.Keyword(null,"health","health",-295520649),(100),new cljs.core.Keyword(null,"spawn-delay","spawn-delay",1873034116),(2500),new cljs.core.Keyword(null,"time-before-spawn","time-before-spawn",-514580745),(0),new cljs.core.Keyword(null,"collision-circle-radius","collision-circle-radius",255209504),(36)], null);
comets.core.particle = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"motion","motion",36831425),comets.core.motion,new cljs.core.Keyword(null,"ttl","ttl",-1115275118),(0),new cljs.core.Keyword(null,"radius","radius",-2073122258),(1)], null);
comets.core.game_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"timer","timer",-1266967739),comets.core.time,new cljs.core.Keyword(null,"player","player",-97687400),comets.core.player,new cljs.core.Keyword(null,"bullets","bullets",1734809024),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"comets","comets",-423299531),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"explosions","explosions",-1941460974),cljs.core.PersistentVector.EMPTY], null));
/**
* Updates the motion for time and wraps the position
* if it leaves the viewport.
*/
comets.core.move = (function move(motion,time,radius){var x = new cljs.core.Keyword(null,"pos-x","pos-x",398349422).cljs$core$IFn$_invoke$arity$1(motion);var y = new cljs.core.Keyword(null,"pos-y","pos-y",992315996).cljs$core$IFn$_invoke$arity$1(motion);var s = (new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(motion) * (time / (1000)));var dir = new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(motion);if(((x <= ((0) - radius))) && ((cljs.core.nth.call(null,dir,(0)) <= (0))))
{return cljs.core.assoc.call(null,motion,new cljs.core.Keyword(null,"pos-x","pos-x",398349422),(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(comets.draw.viewport) + radius));
} else
{if(((x >= (new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(comets.draw.viewport) + radius))) && ((cljs.core.nth.call(null,dir,(0)) >= (0))))
{return cljs.core.assoc.call(null,motion,new cljs.core.Keyword(null,"pos-x","pos-x",398349422),((0) - radius));
} else
{if(((y <= ((0) - radius))) && ((cljs.core.nth.call(null,dir,(1)) <= (0))))
{return cljs.core.assoc.call(null,motion,new cljs.core.Keyword(null,"pos-y","pos-y",992315996),(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(comets.draw.viewport) + radius));
} else
{if(((y >= (new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(comets.draw.viewport) + radius))) && ((cljs.core.nth.call(null,dir,(1)) >= (0))))
{return cljs.core.assoc.call(null,motion,new cljs.core.Keyword(null,"pos-y","pos-y",992315996),((0) - radius));
} else
{var moved_x = (s * cljs.core.nth.call(null,dir,(0)));var moved_y = (s * cljs.core.nth.call(null,dir,(1)));var new_x = (x + moved_x);var new_y = (y + moved_y);return cljs.core.assoc.call(null,motion,new cljs.core.Keyword(null,"pos-x","pos-x",398349422),new_x,new cljs.core.Keyword(null,"pos-y","pos-y",992315996),new_y);

}
}
}
}
});
comets.core.update_motion = (function update_motion(mover,time_delta){var motion = cljs.core.get_in.call(null,mover,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"motion","motion",36831425)], null));var radius = cljs.core.get_in.call(null,mover,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radius","radius",-2073122258)], null));return cljs.core.assoc.call(null,mover,new cljs.core.Keyword(null,"motion","motion",36831425),comets.core.move.call(null,motion,time_delta,radius));
});
comets.core.update_ttl = (function update_ttl(expierable,time){var t = (new cljs.core.Keyword(null,"ttl","ttl",-1115275118).cljs$core$IFn$_invoke$arity$1(expierable) - time);return cljs.core.assoc.call(null,expierable,new cljs.core.Keyword(null,"ttl","ttl",-1115275118),t);
});
comets.core.circle_collided_QMARK_ = (function circle_collided_QMARK_(m1,m2,r1,r2){var x1 = cljs.core.get_in.call(null,m1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos-x","pos-x",398349422)], null));var x2 = cljs.core.get_in.call(null,m2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos-x","pos-x",398349422)], null));var y1 = cljs.core.get_in.call(null,m1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos-y","pos-y",992315996)], null));var y2 = cljs.core.get_in.call(null,m2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos-y","pos-y",992315996)], null));var a = ((function (){var x__3867__auto__ = x1;var y__3868__auto__ = x2;return ((x__3867__auto__ > y__3868__auto__) ? x__3867__auto__ : y__3868__auto__);
})() - (function (){var x__3874__auto__ = x1;var y__3875__auto__ = x2;return ((x__3874__auto__ < y__3875__auto__) ? x__3874__auto__ : y__3875__auto__);
})());var b = ((function (){var x__3867__auto__ = y1;var y__3868__auto__ = y2;return ((x__3867__auto__ > y__3868__auto__) ? x__3867__auto__ : y__3868__auto__);
})() - (function (){var x__3874__auto__ = y1;var y__3875__auto__ = y2;return ((x__3874__auto__ < y__3875__auto__) ? x__3874__auto__ : y__3875__auto__);
})());var h = Math.sqrt(((a * a) + (b * b)));if((h < (r1 + r2)))
{return true;
} else
{return false;
}
});
comets.core.respawn_player = (function respawn_player(state){return cljs.core.assoc.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400)], null)),new cljs.core.Keyword(null,"motion","motion",36831425),cljs.core.get_in.call(null,comets.core.player,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"motion","motion",36831425)], null)),new cljs.core.Keyword(null,"lives","lives",845902073),(cljs.core.get_in.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lives","lives",845902073)], null)) - (1)),new cljs.core.Keyword(null,"is-spawned","is-spawned",1505493980),true,new cljs.core.Keyword(null,"spawn-timestamp","spawn-timestamp",325781373),Date.now());
});
comets.core.player_comet_collision = (function player_comet_collision(state){var p_motion = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"motion","motion",36831425)], null));var p_radius = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"collision-circle-radius","collision-circle-radius",255209504)], null));var comets__$1 = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comets","comets",-423299531)], null));if(cljs.core.truth_(cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"is-spawned","is-spawned",1505493980)], null))))
{return state;
} else
{if(cljs.core.truth_(cljs.core.some.call(null,((function (p_motion,p_radius,comets__$1){
return (function (p1__8044_SHARP_){var comet_motion = new cljs.core.Keyword(null,"motion","motion",36831425).cljs$core$IFn$_invoke$arity$1(p1__8044_SHARP_);var comet_radius = new cljs.core.Keyword(null,"collision-circle-radius","collision-circle-radius",255209504).cljs$core$IFn$_invoke$arity$1(p1__8044_SHARP_);return comets.core.circle_collided_QMARK_.call(null,p_motion,comet_motion,p_radius,comet_radius);
});})(p_motion,p_radius,comets__$1))
,comets__$1)))
{var lives = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"lives","lives",845902073)], null));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"player","player",-97687400),comets.core.respawn_player.call(null,state));
} else
{return state;
}
}
});
comets.core.particle_spawn = (function particle_spawn(x,y){var m = cljs.core.assoc.call(null,comets.core.motion,new cljs.core.Keyword(null,"pos-x","pos-x",398349422),x,new cljs.core.Keyword(null,"pos-y","pos-y",992315996),y,new cljs.core.Keyword(null,"speed","speed",1257663751),comets.math.rng_int.call(null,(600)),new cljs.core.Keyword(null,"dir","dir",1734754661),comets.math.vector_normalize.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comets.math.rng_float.call(null),comets.math.rng_float.call(null)], null)));var ttl = comets.math.rng_int.call(null,(1000));return cljs.core.assoc.call(null,comets.core.particle,new cljs.core.Keyword(null,"motion","motion",36831425),m,new cljs.core.Keyword(null,"ttl","ttl",-1115275118),ttl);
});
comets.core.explosion_spawn = (function explosion_spawn(state,x,y,n){return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"explosions","explosions",-1941460974),cljs.core.conj.call(null,new cljs.core.Keyword(null,"explosions","explosions",-1941460974).cljs$core$IFn$_invoke$arity$1(state),cljs.core.PersistentVector.fromArray([comets.core.particle_spawn.call(null,x,y),comets.core.particle_spawn.call(null,x,y),comets.core.particle_spawn.call(null,x,y),comets.core.particle_spawn.call(null,x,y),comets.core.particle_spawn.call(null,x,y),comets.core.particle_spawn.call(null,x,y),comets.core.particle_spawn.call(null,x,y),comets.core.particle_spawn.call(null,x,y),comets.core.particle_spawn.call(null,x,y),comets.core.particle_spawn.call(null,x,y),comets.core.particle_spawn.call(null,x,y),comets.core.particle_spawn.call(null,x,y),comets.core.particle_spawn.call(null,x,y),comets.core.particle_spawn.call(null,x,y),comets.core.particle_spawn.call(null,x,y),comets.core.particle_spawn.call(null,x,y),comets.core.particle_spawn.call(null,x,y),comets.core.particle_spawn.call(null,x,y),comets.core.particle_spawn.call(null,x,y),comets.core.particle_spawn.call(null,x,y),comets.core.particle_spawn.call(null,x,y),comets.core.particle_spawn.call(null,x,y),comets.core.particle_spawn.call(null,x,y),comets.core.particle_spawn.call(null,x,y),comets.core.particle_spawn.call(null,x,y),comets.core.particle_spawn.call(null,x,y),comets.core.particle_spawn.call(null,x,y),comets.core.particle_spawn.call(null,x,y),comets.core.particle_spawn.call(null,x,y),comets.core.particle_spawn.call(null,x,y),comets.core.particle_spawn.call(null,x,y),comets.core.particle_spawn.call(null,x,y),comets.core.particle_spawn.call(null,x,y),comets.core.particle_spawn.call(null,x,y),comets.core.particle_spawn.call(null,x,y),comets.core.particle_spawn.call(null,x,y),comets.core.particle_spawn.call(null,x,y),comets.core.particle_spawn.call(null,x,y),comets.core.particle_spawn.call(null,x,y)], true)));
});
comets.core.update_particles = (function update_particles(particles,time){var remaining_particles = cljs.core.doall.call(null,cljs.core.remove.call(null,(function (p){return (new cljs.core.Keyword(null,"ttl","ttl",-1115275118).cljs$core$IFn$_invoke$arity$1(p) <= (0));
}),particles));return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (remaining_particles){
return (function (p){return comets.core.update_motion.call(null,comets.core.update_ttl.call(null,p,time),time);
});})(remaining_particles))
,remaining_particles));
});
comets.core.update_explosions = (function update_explosions(state){var time = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"delta","delta",108939957)], null));var exps = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"explosions","explosions",-1941460974)], null));var u_exp = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (time,exps){
return (function (e){return comets.core.update_particles.call(null,e,time);
});})(time,exps))
,exps));var r_exp = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,((function (time,exps,u_exp){
return (function (e){return cljs.core.empty_QMARK_.call(null,e);
});})(time,exps,u_exp))
,u_exp));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"explosions","explosions",-1941460974),r_exp);
});
comets.core.comet_spawn = (function comet_spawn(state,is_fragment){var rad = (cljs.core.truth_(is_fragment)?(new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(comets.core.comet) / (2)):new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(comets.core.comet));var axi = comets.math.rng_int.call(null,(2));var pos = ((cljs.core._EQ_.call(null,axi,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),comets.math.rng_int.call(null,new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(comets.draw.viewport)),new cljs.core.Keyword(null,"y","y",-1757859776),(rad - (1))], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(rad - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),comets.math.rng_int.call(null,new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(comets.draw.viewport))], null));var dir = comets.math.vector_normalize.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comets.math.rng_float.call(null),comets.math.rng_float.call(null)], null));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"comets","comets",-423299531),cljs.core.conj.call(null,new cljs.core.Keyword(null,"comets","comets",-423299531).cljs$core$IFn$_invoke$arity$1(state),cljs.core.assoc.call(null,comets.core.comet,new cljs.core.Keyword(null,"motion","motion",36831425),cljs.core.assoc.call(null,comets.core.motion,new cljs.core.Keyword(null,"pos-x","pos-x",398349422),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"pos-y","pos-y",992315996),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"speed","speed",1257663751),(100),new cljs.core.Keyword(null,"dir","dir",1734754661),dir),new cljs.core.Keyword(null,"radius","radius",-2073122258),rad)));
});
comets.core.update_comets = (function update_comets(state){var time = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"delta","delta",108939957)], null));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"comets","comets",-423299531),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (time){
return (function (c){return comets.core.update_motion.call(null,c,time);
});})(time))
,new cljs.core.Keyword(null,"comets","comets",-423299531).cljs$core$IFn$_invoke$arity$1(state))));
});
comets.core.bullet_spawn = (function bullet_spawn(state,motion){var bullet = cljs.core.assoc.call(null,comets.core.bullet,new cljs.core.Keyword(null,"motion","motion",36831425),motion);var bullets = cljs.core.conj.call(null,new cljs.core.Keyword(null,"bullets","bullets",1734809024).cljs$core$IFn$_invoke$arity$1(state),bullet);var exp = comets.core.explosion_spawn.call(null,state,(400),(300),(20));return cljs.core.assoc.call(null,exp,new cljs.core.Keyword(null,"bullets","bullets",1734809024),bullets);
});
comets.core.update_bullets = (function update_bullets(state){var time = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"delta","delta",108939957)], null));var bullets = new cljs.core.Keyword(null,"bullets","bullets",1734809024).cljs$core$IFn$_invoke$arity$1(state);var remaining_bullets = cljs.core.remove.call(null,((function (time,bullets){
return (function (b){return (new cljs.core.Keyword(null,"ttl","ttl",-1115275118).cljs$core$IFn$_invoke$arity$1(b) <= (0));
});})(time,bullets))
,bullets);return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"bullets","bullets",1734809024),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (time,bullets,remaining_bullets){
return (function (b){return comets.core.update_motion.call(null,comets.core.update_ttl.call(null,b,time),time);
});})(time,bullets,remaining_bullets))
,remaining_bullets)));
});
comets.core.update_player_spawn_timer = (function update_player_spawn_timer(state){if(cljs.core.not.call(null,new cljs.core.Keyword(null,"is-spawned","is-spawned",1505493980).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400)], null)))))
{return state;
} else
{var player = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400)], null));var duration = new cljs.core.Keyword(null,"spawn-state-duration","spawn-state-duration",1883734606).cljs$core$IFn$_invoke$arity$1(player);var timestamp = new cljs.core.Keyword(null,"spawn-timestamp","spawn-timestamp",325781373).cljs$core$IFn$_invoke$arity$1(player);var timenow = Date.now();if(((timenow - timestamp) >= duration))
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"player","player",-97687400),cljs.core.assoc.call(null,player,new cljs.core.Keyword(null,"is-spawned","is-spawned",1505493980),false));
} else
{return state;
}
}
});
comets.core.update_player_position = (function update_player_position(state){var player = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400)], null));var time = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"delta","delta",108939957)], null));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"player","player",-97687400),comets.core.update_motion.call(null,player,time));
});
comets.core.update_player_direction = (function update_player_direction(state){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"motion","motion",36831425),new cljs.core.Keyword(null,"dir","dir",1734754661)], null),(function (){return comets.math.vector_normalize.call(null,cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,comets.input.keys_down)),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,comets.input.keys_down)),new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,comets.input.keys_down)),new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,comets.input.keys_down))));
}));
});
/**
* updates the rotation-angle of the ship and the forward-vector.
* 
* direction is based on the position of the mouse sursor. the player ship
* should always facing the cursor
*/
comets.core.update_player_rotation_angle = (function update_player_rotation_angle(state){var mx = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,comets.input.mouse_pos));var my = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,comets.input.mouse_pos));var px = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"motion","motion",36831425),new cljs.core.Keyword(null,"pos-x","pos-x",398349422)], null));var py = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"motion","motion",36831425),new cljs.core.Keyword(null,"pos-y","pos-y",992315996)], null));var a = (px - mx);var b = (py - my);var ang = Math.atan2(a,b);var adj = ((-1) * (ang + (3.1415 / (2))));return cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"rotation-angle","rotation-angle",-1155216918)], null),((function (mx,my,px,py,a,b,ang,adj){
return (function (){return adj;
});})(mx,my,px,py,a,b,ang,adj))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"forward-vector","forward-vector",1329493186)], null),((function (mx,my,px,py,a,b,ang,adj){
return (function (){return comets.math.vector_normalize.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(a * (-1)),((-1) * b)], null));
});})(mx,my,px,py,a,b,ang,adj))
);
});
comets.core.update_player_attack = (function update_player_attack(state){var px = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"motion","motion",36831425),new cljs.core.Keyword(null,"pos-x","pos-x",398349422)], null));var py = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"motion","motion",36831425),new cljs.core.Keyword(null,"pos-y","pos-y",992315996)], null));var fw_x = cljs.core.nth.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"forward-vector","forward-vector",1329493186)], null)),(0));var fw_y = cljs.core.nth.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"forward-vector","forward-vector",1329493186)], null)),(1));var delay = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"attack-delay","attack-delay",-975870217)], null));var think = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"time-before-attack","time-before-attack",1344769937)], null));var time = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"delta","delta",108939957)], null));if(cljs.core.truth_((function (){var and__3548__auto__ = cljs.core.deref.call(null,comets.input.click_down);if(cljs.core.truth_(and__3548__auto__))
{return (think <= (0));
} else
{return and__3548__auto__;
}
})()))
{return cljs.core.update_in.call(null,comets.core.bullet_spawn.call(null,state,cljs.core.assoc.call(null,comets.core.motion,new cljs.core.Keyword(null,"pos-x","pos-x",398349422),(px + ((11) * fw_x)),new cljs.core.Keyword(null,"pos-y","pos-y",992315996),(py + ((11) * fw_y)),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fw_x,fw_y], null),new cljs.core.Keyword(null,"speed","speed",1257663751),(400))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"time-before-attack","time-before-attack",1344769937)], null),((function (px,py,fw_x,fw_y,delay,think,time){
return (function (){return delay;
});})(px,py,fw_x,fw_y,delay,think,time))
);
} else
{return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"time-before-attack","time-before-attack",1344769937)], null),((function (px,py,fw_x,fw_y,delay,think,time){
return (function (){return (think - time);
});})(px,py,fw_x,fw_y,delay,think,time))
);
}
});
cljs.core.reset_BANG_.call(null,comets.core.game_state,comets.core.comet_spawn.call(null,cljs.core.deref.call(null,comets.core.game_state),false));
cljs.core.reset_BANG_.call(null,comets.core.game_state,comets.core.comet_spawn.call(null,cljs.core.deref.call(null,comets.core.game_state),false));
cljs.core.reset_BANG_.call(null,comets.core.game_state,comets.core.comet_spawn.call(null,cljs.core.deref.call(null,comets.core.game_state),false));
comets.core.update_frame = (function update_frame(){cljs.core.reset_BANG_.call(null,comets.core.game_state,comets.core.update_time_start.call(null,comets.draw.draw_frame.call(null,comets.core.player_comet_collision.call(null,comets.core.update_explosions.call(null,comets.core.update_comets.call(null,comets.core.update_bullets.call(null,comets.core.update_player_attack.call(null,comets.core.update_player_position.call(null,comets.core.update_player_direction.call(null,comets.core.update_player_rotation_angle.call(null,comets.core.update_player_spawn_timer.call(null,comets.core.update_time_delta.call(null,cljs.core.deref.call(null,comets.core.game_state))))))))))))));
return window.requestAnimationFrame(update_frame);
});
window.requestAnimationFrame(comets.core.update_frame);

//# sourceMappingURL=core.js.map