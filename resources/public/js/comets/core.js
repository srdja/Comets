// Compiled by ClojureScript 0.0-2322
goog.provide('comets.core');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string');
goog.require('comets.math');
goog.require('comets.math');
goog.require('goog.string.format');
comets.core.surface = document.getElementById("surface");
comets.core.context = comets.core.surface.getContext("2d");
comets.core.mouse_pos = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null));
comets.core.keys_down = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"w","w",354169001),false,new cljs.core.Keyword(null,"a","a",-2123407586),false,new cljs.core.Keyword(null,"s","s",1705939918),false,new cljs.core.Keyword(null,"d","d",1972142424),false,new cljs.core.Keyword(null,"any","any",1705907423),false], null));
comets.core.click_down = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),false,new cljs.core.Keyword(null,"right","right",-452581833),false], null));
/**
* Find out whether current mouse coordinates are inside the canvas
*/
comets.core.is_canvas_coord = (function is_canvas_coord(canvas_rect,event){var view_x = (event["clientX"]);var view_y = (event["clientY"]);var rect_l = (canvas_rect["left"]);var rect_t = (canvas_rect["top"]);var rect_b = (canvas_rect["bottom"]);var rect_r = (canvas_rect["right"]);if(((view_x < rect_l)) || ((view_x > rect_r)) || ((view_y < rect_t)) || ((view_y > rect_b)))
{return false;
} else
{return true;
}
});
/**
* Update relative canvas mouse coordinates.
*/
comets.core.update_mouse_pos = (function update_mouse_pos(event){return cljs.core.reset_BANG_.call(null,comets.core.mouse_pos,(function (){var rect = comets.core.surface.getBoundingClientRect();var new_x = ((event["clientX"]) - (rect["left"]));var new_y = ((event["clientY"]) - (rect["top"]));if(comets.core.is_canvas_coord.call(null,rect,event))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new_x,new cljs.core.Keyword(null,"y","y",-1757859776),new_y], null);
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,comets.core.mouse_pos)),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,comets.core.mouse_pos))], null);
}
})());
});
comets.core.update_key_state = (function update_key_state(event,update){var keys = cljs.core.deref.call(null,comets.core.keys_down);var G__5232 = (event["keyCode"]);switch (G__5232) {
case (87):
return cljs.core.update_in.call(null,keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001)], null),update);

break;
case (65):
return cljs.core.update_in.call(null,keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586)], null),update);

break;
case (83):
return cljs.core.update_in.call(null,keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918)], null),update);

break;
case (86):
return cljs.core.update_in.call(null,keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"d","d",1972142424)], null),update);

break;
default:
return cljs.core.update_in.call(null,keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"any","any",1705907423)], null),update);

}
});
comets.core.update_key_down = (function update_key_down(event){return comets.core.update_key_state.call(null,event,(function (n){return true;
}));
});
comets.core.update_key_up = (function update_key_up(event){return comets.core.update_key_state.call(null,event,(function (n){return false;
}));
});
(window["onmousemove"] = comets.core.update_mouse_pos);
(window["onkeydown"] = comets.core.update_key_down);
(window["onkeyup"] = comets.core.update_key_up);
comets.core.draw_player_ship = (function draw_player_ship(state,context){var px = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"x","x",2099068185)], null));var py = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"y","y",-1757859776)], null));var angle = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"rotation-angle","rotation-angle",-1155216918)], null));context.save();
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
});
comets.core.draw_comet = (function draw_comet(c,comet){return cljs.core.List.EMPTY;
});
comets.core.draw_rocket = (function draw_rocket(c,rocket){return cljs.core.List.EMPTY;
});
comets.core.draw_explosion = (function draw_explosion(c,exp){return cljs.core.List.EMPTY;
});
comets.core.draw_hud = (function draw_hud(state,context){var score = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"score","score",-1963588780)], null));var lives = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"lives","lives",845902073)], null));context.beginPath();
context.rect((0),(0),(900),(700));
(context["lineWidth"] = (2));
(context["strokeStyle"] = "white");
context.stroke();
(context["font"] = "20px Sans");
(context["fillStyle"] = "white");
context.fillText(goog.string.format("score: %s",score),(30),(30));
return context.fillText(goog.string.format("lives: %s",lives),(30),(55));
});
comets.core.draw_alien_ship = (function draw_alien_ship(state){return cljs.core.List.EMPTY;
});
comets.core.draw_frame = (function draw_frame(state){comets.core.context.clearRect((0),(0),(900),(700));
comets.core.draw_player_ship.call(null,state,comets.core.context);
comets.core.draw_hud.call(null,state,comets.core.context);
return state;
});
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
comets.core.time = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),Date.now(),new cljs.core.Keyword(null,"delta","delta",108939957),(0),new cljs.core.Keyword(null,"current","current",-1088038603),(0)], null);
comets.core.animation = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"duration","duration",1444101068),(0)], null);
comets.core.player = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"collision-circle-radius","collision-circle-radius",255209504),new cljs.core.Keyword(null,"speed-mod","speed-mod",228207942),new cljs.core.Keyword(null,"rotation-angle","rotation-angle",-1155216918),new cljs.core.Keyword(null,"is-alive","is-alive",1659418699),new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"health","health",-295520649),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"lives","lives",845902073),new cljs.core.Keyword(null,"direction-vector","direction-vector",527371002)],[(5),(2),(0),true,(0),(100),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((900) / (2)),new cljs.core.Keyword(null,"y","y",-1757859776),((700) / (2))], null),(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)]);
comets.core.update_player_position = (function update_player_position(s){return cljs.core.List.EMPTY;
});
comets.core.update_player_direction = (function update_player_direction(s){return cljs.core.List.EMPTY;
});
/**
* Direction is based on the position of the mouse sursor. The player ship
* should always facing the cursor
*/
comets.core.update_player_rotation_angle = (function update_player_rotation_angle(s){var mx = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,comets.core.mouse_pos));var my = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,comets.core.mouse_pos));var px = cljs.core.get_in.call(null,s,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"x","x",2099068185)], null));var py = cljs.core.get_in.call(null,s,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"y","y",-1757859776)], null));var a = (px - mx);var b = (py - my);var ang = Math.atan2(a,b);var adj = ((-1) * (ang + (3.1415 / (2))));return cljs.core.update_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"rotation-angle","rotation-angle",-1155216918)], null),((function (mx,my,px,py,a,b,ang,adj){
return (function (){return adj;
});})(mx,my,px,py,a,b,ang,adj))
);
});
comets.core.game_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timer","timer",-1266967739),comets.core.time,new cljs.core.Keyword(null,"player","player",-97687400),comets.core.player], null));
comets.core.new_game = (function new_game(s){return s;
});
comets.core.debug = (function debug(s){console.log(goog.string.format("%s",cljs.core.get_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"rotation-angle","rotation-angle",-1155216918)], null))));
return s;
});
comets.core.update_frame = (function update_frame(){cljs.core.reset_BANG_.call(null,comets.core.game_state,comets.core.update_time_start.call(null,comets.core.draw_frame.call(null,comets.core.update_player_rotation_angle.call(null,comets.core.update_time_delta.call(null,cljs.core.deref.call(null,comets.core.game_state))))));
return window.requestAnimationFrame(update_frame);
});
window.requestAnimationFrame(comets.core.update_frame);

//# sourceMappingURL=core.js.map