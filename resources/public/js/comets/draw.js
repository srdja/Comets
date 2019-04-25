// Compiled by ClojureScript 0.0-2322
goog.provide('comets.draw');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string');
goog.require('goog.string.format');
comets.draw.surface = document.getElementById("surface");
comets.draw.context = comets.draw.surface.getContext("2d");
comets.draw.viewport = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),(900),new cljs.core.Keyword(null,"h","h",1109658740),(600)], null);
comets.draw.draw_player_ship = (function draw_player_ship(state,context){var player = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400)], null));var px = new cljs.core.Keyword(null,"motion","motion",36831425).cljs$core$IFn$_invoke$arity$1(player).call(null,new cljs.core.Keyword(null,"pos-x","pos-x",398349422));var py = new cljs.core.Keyword(null,"motion","motion",36831425).cljs$core$IFn$_invoke$arity$1(player).call(null,new cljs.core.Keyword(null,"pos-y","pos-y",992315996));var angle = new cljs.core.Keyword(null,"rotation-angle","rotation-angle",-1155216918).cljs$core$IFn$_invoke$arity$1(player);if(cljs.core.not.call(null,new cljs.core.Keyword(null,"is-spawned","is-spawned",1505493980).cljs$core$IFn$_invoke$arity$1(player)))
{context.save();
context.translate(px,py);
context.rotate(angle);
context.translate((-10),(-5));
context.beginPath();
context.moveTo((0),(0));
context.lineTo((5),(5));
context.lineTo((0),(10));
context.lineTo((20),(5));
context.lineTo((0),(0));
context.stroke();
return context.restore();
} else
{var timenow = Date.now();var color = (cljs.core.mod.call(null,(timenow - new cljs.core.Keyword(null,"spawn-timestamp","spawn-timestamp",325781373).cljs$core$IFn$_invoke$arity$1(player)),(255)) * (1));var colorstr = ("rgb("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)+")");context.save();
(context["strokeStyle"] = colorstr);
context.translate(px,py);
context.rotate(angle);
context.translate((-10),(-5));
context.beginPath();
context.moveTo((0),(0));
context.lineTo((5),(5));
context.lineTo((0),(10));
context.lineTo((20),(5));
context.lineTo((0),(0));
context.stroke();
return context.restore();
}
});
comets.draw.draw_particles = (function draw_particles(particles,context,color){var seq__4983 = cljs.core.seq.call(null,particles);var chunk__4984 = null;var count__4985 = (0);var i__4986 = (0);while(true){
if((i__4986 < count__4985))
{var p = cljs.core._nth.call(null,chunk__4984,i__4986);var px_4987 = cljs.core.get_in.call(null,p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"motion","motion",36831425),new cljs.core.Keyword(null,"pos-x","pos-x",398349422)], null));var py_4988 = cljs.core.get_in.call(null,p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"motion","motion",36831425),new cljs.core.Keyword(null,"pos-y","pos-y",992315996)], null));var r_4989 = new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(p);context.save();
context.beginPath();
(context["fillStyle"] = color);
context.arc((px_4987 + r_4989),(py_4988 + r_4989),r_4989,(0),((2) * 3.1415),false);
context.fill();
context.closePath();
context.restore();
{
var G__4990 = seq__4983;
var G__4991 = chunk__4984;
var G__4992 = count__4985;
var G__4993 = (i__4986 + (1));
seq__4983 = G__4990;
chunk__4984 = G__4991;
count__4985 = G__4992;
i__4986 = G__4993;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__4983);if(temp__4126__auto__)
{var seq__4983__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4983__$1))
{var c__4316__auto__ = cljs.core.chunk_first.call(null,seq__4983__$1);{
var G__4994 = cljs.core.chunk_rest.call(null,seq__4983__$1);
var G__4995 = c__4316__auto__;
var G__4996 = cljs.core.count.call(null,c__4316__auto__);
var G__4997 = (0);
seq__4983 = G__4994;
chunk__4984 = G__4995;
count__4985 = G__4996;
i__4986 = G__4997;
continue;
}
} else
{var p = cljs.core.first.call(null,seq__4983__$1);var px_4998 = cljs.core.get_in.call(null,p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"motion","motion",36831425),new cljs.core.Keyword(null,"pos-x","pos-x",398349422)], null));var py_4999 = cljs.core.get_in.call(null,p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"motion","motion",36831425),new cljs.core.Keyword(null,"pos-y","pos-y",992315996)], null));var r_5000 = new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(p);context.save();
context.beginPath();
(context["fillStyle"] = color);
context.arc((px_4998 + r_5000),(py_4999 + r_5000),r_5000,(0),((2) * 3.1415),false);
context.fill();
context.closePath();
context.restore();
{
var G__5001 = cljs.core.next.call(null,seq__4983__$1);
var G__5002 = null;
var G__5003 = (0);
var G__5004 = (0);
seq__4983 = G__5001;
chunk__4984 = G__5002;
count__4985 = G__5003;
i__4986 = G__5004;
continue;
}
}
} else
{return null;
}
}
break;
}
});
comets.draw.draw_bullets = (function draw_bullets(state,context){return comets.draw.draw_particles.call(null,new cljs.core.Keyword(null,"bullets","bullets",1734809024).cljs$core$IFn$_invoke$arity$1(state),context,"#81F7D8");
});
comets.draw.draw_explosions = (function draw_explosions(state,context){var seq__5009 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"explosions","explosions",-1941460974).cljs$core$IFn$_invoke$arity$1(state));var chunk__5010 = null;var count__5011 = (0);var i__5012 = (0);while(true){
if((i__5012 < count__5011))
{var e = cljs.core._nth.call(null,chunk__5010,i__5012);comets.draw.draw_particles.call(null,e,context,"white");
{
var G__5013 = seq__5009;
var G__5014 = chunk__5010;
var G__5015 = count__5011;
var G__5016 = (i__5012 + (1));
seq__5009 = G__5013;
chunk__5010 = G__5014;
count__5011 = G__5015;
i__5012 = G__5016;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__5009);if(temp__4126__auto__)
{var seq__5009__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5009__$1))
{var c__4316__auto__ = cljs.core.chunk_first.call(null,seq__5009__$1);{
var G__5017 = cljs.core.chunk_rest.call(null,seq__5009__$1);
var G__5018 = c__4316__auto__;
var G__5019 = cljs.core.count.call(null,c__4316__auto__);
var G__5020 = (0);
seq__5009 = G__5017;
chunk__5010 = G__5018;
count__5011 = G__5019;
i__5012 = G__5020;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__5009__$1);comets.draw.draw_particles.call(null,e,context,"white");
{
var G__5021 = cljs.core.next.call(null,seq__5009__$1);
var G__5022 = null;
var G__5023 = (0);
var G__5024 = (0);
seq__5009 = G__5021;
chunk__5010 = G__5022;
count__5011 = G__5023;
i__5012 = G__5024;
continue;
}
}
} else
{return null;
}
}
break;
}
});
comets.draw.draw_comets = (function draw_comets(state,comets__$1){var seq__5029 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"comets","comets",-423299531).cljs$core$IFn$_invoke$arity$1(state));var chunk__5030 = null;var count__5031 = (0);var i__5032 = (0);while(true){
if((i__5032 < count__5031))
{var c = cljs.core._nth.call(null,chunk__5030,i__5032);var cx_5033 = cljs.core.get_in.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"motion","motion",36831425),new cljs.core.Keyword(null,"pos-x","pos-x",398349422)], null));var cy_5034 = cljs.core.get_in.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"motion","motion",36831425),new cljs.core.Keyword(null,"pos-y","pos-y",992315996)], null));var r_5035 = new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(c);if(cljs.core.truth_(new cljs.core.Keyword(null,"is-fragment","is-fragment",-1792321457).cljs$core$IFn$_invoke$arity$1(c)))
{comets.draw.context.save();
comets.draw.context.beginPath();
comets.draw.context.arc((cx_5033 + r_5035),(cy_5034 + r_5035),r_5035,(0),((2) * 3.1415),false);
comets.draw.context.stroke();
comets.draw.context.closePath();
comets.draw.context.restore();
} else
{comets.draw.context.save();
comets.draw.context.beginPath();
comets.draw.context.moveTo(cx_5033,(cy_5034 - r_5035));
comets.draw.context.lineTo((cx_5033 + (r_5035 * 0.2)),(cy_5034 - (r_5035 * 0.4)));
comets.draw.context.lineTo((cx_5033 + (r_5035 * 0.8)),(cy_5034 - (r_5035 * 0.8)));
comets.draw.context.lineTo((cx_5033 + r_5035),cy_5034);
comets.draw.context.lineTo((cx_5033 + (r_5035 * 0.6)),(cy_5034 + (r_5035 * 0.1)));
comets.draw.context.lineTo((cx_5033 + (r_5035 * 0.8)),(cy_5034 + (r_5035 * 0.9)));
comets.draw.context.lineTo((cx_5033 + (r_5035 * 0.2)),(cy_5034 + (r_5035 * 0.8)));
comets.draw.context.lineTo(cx_5033,(cy_5034 + r_5035));
comets.draw.context.lineTo((cx_5033 - (r_5035 * 0.7)),(cy_5034 + (r_5035 * 0.5)));
comets.draw.context.lineTo((cx_5033 - (r_5035 * 0.6)),(cy_5034 + (r_5035 * 0.2)));
comets.draw.context.lineTo((cx_5033 - r_5035),cy_5034);
comets.draw.context.lineTo(cx_5033,(cy_5034 - r_5035));
comets.draw.context.stroke();
comets.draw.context.restore();
}
{
var G__5036 = seq__5029;
var G__5037 = chunk__5030;
var G__5038 = count__5031;
var G__5039 = (i__5032 + (1));
seq__5029 = G__5036;
chunk__5030 = G__5037;
count__5031 = G__5038;
i__5032 = G__5039;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__5029);if(temp__4126__auto__)
{var seq__5029__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5029__$1))
{var c__4316__auto__ = cljs.core.chunk_first.call(null,seq__5029__$1);{
var G__5040 = cljs.core.chunk_rest.call(null,seq__5029__$1);
var G__5041 = c__4316__auto__;
var G__5042 = cljs.core.count.call(null,c__4316__auto__);
var G__5043 = (0);
seq__5029 = G__5040;
chunk__5030 = G__5041;
count__5031 = G__5042;
i__5032 = G__5043;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__5029__$1);var cx_5044 = cljs.core.get_in.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"motion","motion",36831425),new cljs.core.Keyword(null,"pos-x","pos-x",398349422)], null));var cy_5045 = cljs.core.get_in.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"motion","motion",36831425),new cljs.core.Keyword(null,"pos-y","pos-y",992315996)], null));var r_5046 = new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(c);if(cljs.core.truth_(new cljs.core.Keyword(null,"is-fragment","is-fragment",-1792321457).cljs$core$IFn$_invoke$arity$1(c)))
{comets.draw.context.save();
comets.draw.context.beginPath();
comets.draw.context.arc((cx_5044 + r_5046),(cy_5045 + r_5046),r_5046,(0),((2) * 3.1415),false);
comets.draw.context.stroke();
comets.draw.context.closePath();
comets.draw.context.restore();
} else
{comets.draw.context.save();
comets.draw.context.beginPath();
comets.draw.context.moveTo(cx_5044,(cy_5045 - r_5046));
comets.draw.context.lineTo((cx_5044 + (r_5046 * 0.2)),(cy_5045 - (r_5046 * 0.4)));
comets.draw.context.lineTo((cx_5044 + (r_5046 * 0.8)),(cy_5045 - (r_5046 * 0.8)));
comets.draw.context.lineTo((cx_5044 + r_5046),cy_5045);
comets.draw.context.lineTo((cx_5044 + (r_5046 * 0.6)),(cy_5045 + (r_5046 * 0.1)));
comets.draw.context.lineTo((cx_5044 + (r_5046 * 0.8)),(cy_5045 + (r_5046 * 0.9)));
comets.draw.context.lineTo((cx_5044 + (r_5046 * 0.2)),(cy_5045 + (r_5046 * 0.8)));
comets.draw.context.lineTo(cx_5044,(cy_5045 + r_5046));
comets.draw.context.lineTo((cx_5044 - (r_5046 * 0.7)),(cy_5045 + (r_5046 * 0.5)));
comets.draw.context.lineTo((cx_5044 - (r_5046 * 0.6)),(cy_5045 + (r_5046 * 0.2)));
comets.draw.context.lineTo((cx_5044 - r_5046),cy_5045);
comets.draw.context.lineTo(cx_5044,(cy_5045 - r_5046));
comets.draw.context.stroke();
comets.draw.context.restore();
}
{
var G__5047 = cljs.core.next.call(null,seq__5029__$1);
var G__5048 = null;
var G__5049 = (0);
var G__5050 = (0);
seq__5029 = G__5047;
chunk__5030 = G__5048;
count__5031 = G__5049;
i__5032 = G__5050;
continue;
}
}
} else
{return null;
}
}
break;
}
});
comets.draw.draw_hud = (function draw_hud(state,context){var score = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"score","score",-1963588780)], null));var lives = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"lives","lives",845902073)], null));context.beginPath();
context.rect((0),(0),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(comets.draw.viewport),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(comets.draw.viewport));
(context["lineWidth"] = (1));
(context["strokeStyle"] = "white");
context.stroke();
(context["font"] = "20px Share Tech Mono");
(context["fillStyle"] = "white");
context.fillText(goog.string.format("score: %s",score),(15),(30));
context.fillText(goog.string.format("lives: %s",lives),(15),(55));
(context["font"] = "8px Sans");
(context["fillStyle"] = "white");
return context.fillText(goog.string.format("Moving around (W,A,S,D) / Aiming (Mouse pointer) / Shooting (Left click)"),(15),(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(comets.draw.viewport) - (10)));
});
comets.draw.draw_alien_ship = (function draw_alien_ship(state){return cljs.core.List.EMPTY;
});
comets.draw.draw_frame = (function draw_frame(state){comets.draw.context.clearRect((0),(0),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(comets.draw.viewport),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(comets.draw.viewport));
comets.draw.draw_player_ship.call(null,state,comets.draw.context);
comets.draw.draw_bullets.call(null,state,comets.draw.context);
comets.draw.draw_explosions.call(null,state,comets.draw.context);
comets.draw.draw_comets.call(null,state,comets.draw.context);
comets.draw.draw_hud.call(null,state,comets.draw.context);
return state;
});

//# sourceMappingURL=draw.js.map