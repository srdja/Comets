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
comets.core.viewport = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),(900),new cljs.core.Keyword(null,"h","h",1109658740),(600)], null);
comets.core.mouse_pos = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null));
comets.core.keys_down = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null));
comets.core.click_down = cljs.core.atom.call(null,false);
/**
* Find out whether current mouse coordinates are inside the canvas
*/
comets.core.is_canvas_coord = (function is_canvas_coord(canvas_rect,event){var view_x = (event["clientX"]);var view_y = (event["clientY"]);var rect_l = (canvas_rect["left"]);var rect_t = (canvas_rect["top"]);var rect_b = (canvas_rect["bottom"]);var rect_r = (canvas_rect["right"]);if(((view_x < rect_l)) || ((view_x > rect_r)) || ((view_y < rect_t)) || ((view_y > rect_b)))
{return false;
} else
{return true;
}
});
comets.core.update_mouse_down = (function update_mouse_down(event){return cljs.core.reset_BANG_.call(null,comets.core.click_down,true);
});
comets.core.update_mouse_up = (function update_mouse_up(event){return cljs.core.reset_BANG_.call(null,comets.core.click_down,false);
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
comets.core.update_key_down = (function update_key_down(event){var keys = cljs.core.deref.call(null,comets.core.keys_down);var G__5136 = (event["keyCode"]);switch (G__5136) {
case (87):
return cljs.core.reset_BANG_.call(null,comets.core.keys_down,cljs.core.update_in.call(null,keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001)], null),((function (G__5136,keys){
return (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null);
});})(G__5136,keys))
));

break;
case (65):
return cljs.core.reset_BANG_.call(null,comets.core.keys_down,cljs.core.update_in.call(null,keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586)], null),((function (G__5136,keys){
return (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);
});})(G__5136,keys))
));

break;
case (83):
return cljs.core.reset_BANG_.call(null,comets.core.keys_down,cljs.core.update_in.call(null,keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918)], null),((function (G__5136,keys){
return (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);
});})(G__5136,keys))
));

break;
case (68):
return cljs.core.reset_BANG_.call(null,comets.core.keys_down,cljs.core.update_in.call(null,keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"d","d",1972142424)], null),((function (G__5136,keys){
return (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);
});})(G__5136,keys))
));

break;
default:
return event;

}
});
comets.core.update_key_up = (function update_key_up(event){var keys = cljs.core.deref.call(null,comets.core.keys_down);var G__5139 = (event["keyCode"]);switch (G__5139) {
case (87):
return cljs.core.reset_BANG_.call(null,comets.core.keys_down,cljs.core.update_in.call(null,keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001)], null),((function (G__5139,keys){
return (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
});})(G__5139,keys))
));

break;
case (65):
return cljs.core.reset_BANG_.call(null,comets.core.keys_down,cljs.core.update_in.call(null,keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586)], null),((function (G__5139,keys){
return (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
});})(G__5139,keys))
));

break;
case (83):
return cljs.core.reset_BANG_.call(null,comets.core.keys_down,cljs.core.update_in.call(null,keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918)], null),((function (G__5139,keys){
return (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
});})(G__5139,keys))
));

break;
case (68):
return cljs.core.reset_BANG_.call(null,comets.core.keys_down,cljs.core.update_in.call(null,keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"d","d",1972142424)], null),((function (G__5139,keys){
return (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
});})(G__5139,keys))
));

break;
default:
return event;

}
});
(window["onmousemove"] = comets.core.update_mouse_pos);
(window["onkeydown"] = comets.core.update_key_down);
(window["onkeyup"] = comets.core.update_key_up);
(window["onmouseup"] = comets.core.update_mouse_up);
(window["onmousedown"] = comets.core.update_mouse_down);
comets.core.draw_player_ship = (function draw_player_ship(state,context){var px = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"motion","motion",36831425),new cljs.core.Keyword(null,"pos-x","pos-x",398349422)], null));var py = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"motion","motion",36831425),new cljs.core.Keyword(null,"pos-y","pos-y",992315996)], null));var angle = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"rotation-angle","rotation-angle",-1155216918)], null));context.save();
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
comets.core.draw_particles = (function draw_particles(particles,context,color){var seq__5145 = cljs.core.seq.call(null,particles);var chunk__5146 = null;var count__5147 = (0);var i__5148 = (0);while(true){
if((i__5148 < count__5147))
{var p = cljs.core._nth.call(null,chunk__5146,i__5148);var px_5149 = cljs.core.get_in.call(null,p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"motion","motion",36831425),new cljs.core.Keyword(null,"pos-x","pos-x",398349422)], null));var py_5150 = cljs.core.get_in.call(null,p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"motion","motion",36831425),new cljs.core.Keyword(null,"pos-y","pos-y",992315996)], null));var r_5151 = new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(p);context.save();
context.beginPath();
(context["fillStyle"] = color);
context.arc((px_5149 + r_5151),(py_5150 + r_5151),r_5151,(0),((2) * 3.1415),false);
context.fill();
context.closePath();
context.restore();
{
var G__5152 = seq__5145;
var G__5153 = chunk__5146;
var G__5154 = count__5147;
var G__5155 = (i__5148 + (1));
seq__5145 = G__5152;
chunk__5146 = G__5153;
count__5147 = G__5154;
i__5148 = G__5155;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__5145);if(temp__4126__auto__)
{var seq__5145__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5145__$1))
{var c__4316__auto__ = cljs.core.chunk_first.call(null,seq__5145__$1);{
var G__5156 = cljs.core.chunk_rest.call(null,seq__5145__$1);
var G__5157 = c__4316__auto__;
var G__5158 = cljs.core.count.call(null,c__4316__auto__);
var G__5159 = (0);
seq__5145 = G__5156;
chunk__5146 = G__5157;
count__5147 = G__5158;
i__5148 = G__5159;
continue;
}
} else
{var p = cljs.core.first.call(null,seq__5145__$1);var px_5160 = cljs.core.get_in.call(null,p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"motion","motion",36831425),new cljs.core.Keyword(null,"pos-x","pos-x",398349422)], null));var py_5161 = cljs.core.get_in.call(null,p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"motion","motion",36831425),new cljs.core.Keyword(null,"pos-y","pos-y",992315996)], null));var r_5162 = new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(p);context.save();
context.beginPath();
(context["fillStyle"] = color);
context.arc((px_5160 + r_5162),(py_5161 + r_5162),r_5162,(0),((2) * 3.1415),false);
context.fill();
context.closePath();
context.restore();
{
var G__5163 = cljs.core.next.call(null,seq__5145__$1);
var G__5164 = null;
var G__5165 = (0);
var G__5166 = (0);
seq__5145 = G__5163;
chunk__5146 = G__5164;
count__5147 = G__5165;
i__5148 = G__5166;
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
comets.core.draw_bullets = (function draw_bullets(state,context){return comets.core.draw_particles.call(null,new cljs.core.Keyword(null,"bullets","bullets",1734809024).cljs$core$IFn$_invoke$arity$1(state),context,"#81F7D8");
});
comets.core.draw_explosions = (function draw_explosions(state,context){var seq__5171 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"explosions","explosions",-1941460974).cljs$core$IFn$_invoke$arity$1(state));var chunk__5172 = null;var count__5173 = (0);var i__5174 = (0);while(true){
if((i__5174 < count__5173))
{var e = cljs.core._nth.call(null,chunk__5172,i__5174);comets.core.draw_particles.call(null,e,context,"white");
{
var G__5175 = seq__5171;
var G__5176 = chunk__5172;
var G__5177 = count__5173;
var G__5178 = (i__5174 + (1));
seq__5171 = G__5175;
chunk__5172 = G__5176;
count__5173 = G__5177;
i__5174 = G__5178;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__5171);if(temp__4126__auto__)
{var seq__5171__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5171__$1))
{var c__4316__auto__ = cljs.core.chunk_first.call(null,seq__5171__$1);{
var G__5179 = cljs.core.chunk_rest.call(null,seq__5171__$1);
var G__5180 = c__4316__auto__;
var G__5181 = cljs.core.count.call(null,c__4316__auto__);
var G__5182 = (0);
seq__5171 = G__5179;
chunk__5172 = G__5180;
count__5173 = G__5181;
i__5174 = G__5182;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__5171__$1);comets.core.draw_particles.call(null,e,context,"white");
{
var G__5183 = cljs.core.next.call(null,seq__5171__$1);
var G__5184 = null;
var G__5185 = (0);
var G__5186 = (0);
seq__5171 = G__5183;
chunk__5172 = G__5184;
count__5173 = G__5185;
i__5174 = G__5186;
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
comets.core.draw_comets = (function draw_comets(state,comets__$1){var seq__5191 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"comets","comets",-423299531).cljs$core$IFn$_invoke$arity$1(state));var chunk__5192 = null;var count__5193 = (0);var i__5194 = (0);while(true){
if((i__5194 < count__5193))
{var c = cljs.core._nth.call(null,chunk__5192,i__5194);var cx_5195 = cljs.core.get_in.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"motion","motion",36831425),new cljs.core.Keyword(null,"pos-x","pos-x",398349422)], null));var cy_5196 = cljs.core.get_in.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"motion","motion",36831425),new cljs.core.Keyword(null,"pos-y","pos-y",992315996)], null));var r_5197 = new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(c);if(cljs.core.truth_(new cljs.core.Keyword(null,"is-fragment","is-fragment",-1792321457).cljs$core$IFn$_invoke$arity$1(c)))
{comets.core.context.save();
comets.core.context.beginPath();
comets.core.context.arc((cx_5195 + r_5197),(cy_5196 + r_5197),r_5197,(0),((2) * 3.1415),false);
comets.core.context.stroke();
comets.core.context.closePath();
comets.core.context.restore();
} else
{comets.core.context.save();
comets.core.context.beginPath();
comets.core.context.moveTo(cx_5195,(cy_5196 - r_5197));
comets.core.context.lineTo((cx_5195 + (r_5197 * 0.2)),(cy_5196 - (r_5197 * 0.4)));
comets.core.context.lineTo((cx_5195 + (r_5197 * 0.8)),(cy_5196 - (r_5197 * 0.8)));
comets.core.context.lineTo((cx_5195 + r_5197),cy_5196);
comets.core.context.lineTo((cx_5195 + (r_5197 * 0.6)),(cy_5196 + (r_5197 * 0.1)));
comets.core.context.lineTo((cx_5195 + (r_5197 * 0.8)),(cy_5196 + (r_5197 * 0.9)));
comets.core.context.lineTo((cx_5195 + (r_5197 * 0.2)),(cy_5196 + (r_5197 * 0.8)));
comets.core.context.lineTo(cx_5195,(cy_5196 + r_5197));
comets.core.context.lineTo((cx_5195 - (r_5197 * 0.7)),(cy_5196 + (r_5197 * 0.5)));
comets.core.context.lineTo((cx_5195 - (r_5197 * 0.6)),(cy_5196 + (r_5197 * 0.2)));
comets.core.context.lineTo((cx_5195 - r_5197),cy_5196);
comets.core.context.lineTo(cx_5195,(cy_5196 - r_5197));
comets.core.context.stroke();
comets.core.context.restore();
}
{
var G__5198 = seq__5191;
var G__5199 = chunk__5192;
var G__5200 = count__5193;
var G__5201 = (i__5194 + (1));
seq__5191 = G__5198;
chunk__5192 = G__5199;
count__5193 = G__5200;
i__5194 = G__5201;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__5191);if(temp__4126__auto__)
{var seq__5191__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5191__$1))
{var c__4316__auto__ = cljs.core.chunk_first.call(null,seq__5191__$1);{
var G__5202 = cljs.core.chunk_rest.call(null,seq__5191__$1);
var G__5203 = c__4316__auto__;
var G__5204 = cljs.core.count.call(null,c__4316__auto__);
var G__5205 = (0);
seq__5191 = G__5202;
chunk__5192 = G__5203;
count__5193 = G__5204;
i__5194 = G__5205;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__5191__$1);var cx_5206 = cljs.core.get_in.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"motion","motion",36831425),new cljs.core.Keyword(null,"pos-x","pos-x",398349422)], null));var cy_5207 = cljs.core.get_in.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"motion","motion",36831425),new cljs.core.Keyword(null,"pos-y","pos-y",992315996)], null));var r_5208 = new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(c);if(cljs.core.truth_(new cljs.core.Keyword(null,"is-fragment","is-fragment",-1792321457).cljs$core$IFn$_invoke$arity$1(c)))
{comets.core.context.save();
comets.core.context.beginPath();
comets.core.context.arc((cx_5206 + r_5208),(cy_5207 + r_5208),r_5208,(0),((2) * 3.1415),false);
comets.core.context.stroke();
comets.core.context.closePath();
comets.core.context.restore();
} else
{comets.core.context.save();
comets.core.context.beginPath();
comets.core.context.moveTo(cx_5206,(cy_5207 - r_5208));
comets.core.context.lineTo((cx_5206 + (r_5208 * 0.2)),(cy_5207 - (r_5208 * 0.4)));
comets.core.context.lineTo((cx_5206 + (r_5208 * 0.8)),(cy_5207 - (r_5208 * 0.8)));
comets.core.context.lineTo((cx_5206 + r_5208),cy_5207);
comets.core.context.lineTo((cx_5206 + (r_5208 * 0.6)),(cy_5207 + (r_5208 * 0.1)));
comets.core.context.lineTo((cx_5206 + (r_5208 * 0.8)),(cy_5207 + (r_5208 * 0.9)));
comets.core.context.lineTo((cx_5206 + (r_5208 * 0.2)),(cy_5207 + (r_5208 * 0.8)));
comets.core.context.lineTo(cx_5206,(cy_5207 + r_5208));
comets.core.context.lineTo((cx_5206 - (r_5208 * 0.7)),(cy_5207 + (r_5208 * 0.5)));
comets.core.context.lineTo((cx_5206 - (r_5208 * 0.6)),(cy_5207 + (r_5208 * 0.2)));
comets.core.context.lineTo((cx_5206 - r_5208),cy_5207);
comets.core.context.lineTo(cx_5206,(cy_5207 - r_5208));
comets.core.context.stroke();
comets.core.context.restore();
}
{
var G__5209 = cljs.core.next.call(null,seq__5191__$1);
var G__5210 = null;
var G__5211 = (0);
var G__5212 = (0);
seq__5191 = G__5209;
chunk__5192 = G__5210;
count__5193 = G__5211;
i__5194 = G__5212;
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
comets.core.draw_hud = (function draw_hud(state,context){var score = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"score","score",-1963588780)], null));var lives = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"lives","lives",845902073)], null));context.beginPath();
context.rect((0),(0),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(comets.core.viewport),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(comets.core.viewport));
(context["lineWidth"] = (1));
(context["strokeStyle"] = "white");
context.stroke();
(context["font"] = "20px Share Tech Mono");
(context["fillStyle"] = "white");
context.fillText(goog.string.format("score: %s",score),(15),(30));
context.fillText(goog.string.format("lives: %s",lives),(15),(55));
(context["font"] = "8px Sans");
(context["fillStyle"] = "white");
return context.fillText(goog.string.format("Moving around (W,A,S,D) / Aiming (Mouse pointer) / Shooting (Left click)"),(15),(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(comets.core.viewport) - (10)));
});
comets.core.draw_alien_ship = (function draw_alien_ship(state){return cljs.core.List.EMPTY;
});
comets.core.draw_frame = (function draw_frame(state){comets.core.context.clearRect((0),(0),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(comets.core.viewport),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(comets.core.viewport));
comets.core.draw_player_ship.call(null,state,comets.core.context);
comets.core.draw_bullets.call(null,state,comets.core.context);
comets.core.draw_explosions.call(null,state,comets.core.context);
comets.core.draw_comets.call(null,state,comets.core.context);
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
comets.core.motion = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pos-x","pos-x",398349422),(0),new cljs.core.Keyword(null,"pos-y","pos-y",992315996),(0),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"speed","speed",1257663751),(0)], null);
comets.core.time = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),Date.now(),new cljs.core.Keyword(null,"delta","delta",108939957),(0),new cljs.core.Keyword(null,"current","current",-1088038603),(0)], null);
comets.core.player = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"collision-circle-radius","collision-circle-radius",255209504),new cljs.core.Keyword(null,"motion","motion",36831425),new cljs.core.Keyword(null,"forward-vector","forward-vector",1329493186),new cljs.core.Keyword(null,"rotation-angle","rotation-angle",-1155216918),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"time-before-attack","time-before-attack",1344769937),new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"health","health",-295520649),new cljs.core.Keyword(null,"attack-delay","attack-delay",-975870217),new cljs.core.Keyword(null,"lives","lives",845902073)],[(5),cljs.core.assoc.call(null,comets.core.motion,new cljs.core.Keyword(null,"pos-x","pos-x",398349422),(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(comets.core.viewport) / (2)),new cljs.core.Keyword(null,"pos-y","pos-y",992315996),(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(comets.core.viewport) / (2)),new cljs.core.Keyword(null,"speed","speed",1257663751),(120)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(0),(11),(0),(0),(100),(130),(3)]);
comets.core.bullet = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"motion","motion",36831425),comets.core.motion,new cljs.core.Keyword(null,"damage","damage",970520018),(10),new cljs.core.Keyword(null,"radius","radius",-2073122258),(2),new cljs.core.Keyword(null,"ttl","ttl",-1115275118),(3000),new cljs.core.Keyword(null,"collision-circle-radius","collision-circle-radius",255209504),(2)], null);
comets.core.comet = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"motion","motion",36831425),comets.core.motion,new cljs.core.Keyword(null,"radius","radius",-2073122258),(40),new cljs.core.Keyword(null,"health","health",-295520649),(100),new cljs.core.Keyword(null,"spawn-delay","spawn-delay",1873034116),(2500),new cljs.core.Keyword(null,"time-before-spawn","time-before-spawn",-514580745),(0),new cljs.core.Keyword(null,"collision-circle-radius","collision-circle-radius",255209504),(40)], null);
comets.core.particle = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"motion","motion",36831425),comets.core.motion,new cljs.core.Keyword(null,"ttl","ttl",-1115275118),(0),new cljs.core.Keyword(null,"radius","radius",-2073122258),(1)], null);
comets.core.game_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"timer","timer",-1266967739),comets.core.time,new cljs.core.Keyword(null,"player","player",-97687400),comets.core.player,new cljs.core.Keyword(null,"bullets","bullets",1734809024),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"comets","comets",-423299531),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"explosions","explosions",-1941460974),cljs.core.PersistentVector.EMPTY], null));
/**
* Updates the motion for time and wraps the position
* if it leaves the viewport.
*/
comets.core.move = (function move(motion,time,radius){var x = new cljs.core.Keyword(null,"pos-x","pos-x",398349422).cljs$core$IFn$_invoke$arity$1(motion);var y = new cljs.core.Keyword(null,"pos-y","pos-y",992315996).cljs$core$IFn$_invoke$arity$1(motion);var s = (new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(motion) * (time / (1000)));var dir = new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(motion);if(((x <= ((0) - radius))) && ((cljs.core.nth.call(null,dir,(0)) <= (0))))
{return cljs.core.assoc.call(null,motion,new cljs.core.Keyword(null,"pos-x","pos-x",398349422),(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(comets.core.viewport) + radius));
} else
{if(((x >= (new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(comets.core.viewport) + radius))) && ((cljs.core.nth.call(null,dir,(0)) >= (0))))
{return cljs.core.assoc.call(null,motion,new cljs.core.Keyword(null,"pos-x","pos-x",398349422),((0) - radius));
} else
{if(((y <= ((0) - radius))) && ((cljs.core.nth.call(null,dir,(1)) <= (0))))
{return cljs.core.assoc.call(null,motion,new cljs.core.Keyword(null,"pos-y","pos-y",992315996),(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(comets.core.viewport) + radius));
} else
{if(((y >= (new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(comets.core.viewport) + radius))) && ((cljs.core.nth.call(null,dir,(1)) >= (0))))
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
comets.core.quadrant = cljs.core.PersistentArrayMap.EMPTY;
comets.core.quad_tree = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"depth","depth",1768663640),(0)], null);
comets.core.qtree_generate = (function qtree_generate(state,depth){return cljs.core.List.EMPTY;
});
comets.core.qtree_query = (function qtree_query(tree,x,y){return cljs.core.List.EMPTY;
});
comets.core.circle_collided_QMARK_ = (function circle_collided_QMARK_(m1,m2,r1,r2){var x1 = cljs.core.get_in.call(null,m1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos-x","pos-x",398349422)], null));var x2 = cljs.core.get_in.call(null,m2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos-x","pos-x",398349422)], null));var y1 = cljs.core.get_in.call(null,m1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos-y","pos-y",992315996)], null));var y2 = cljs.core.get_in.call(null,m2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos-y","pos-y",992315996)], null));var a = (x1 - x2);var b = (y2 - y2);var h = Math.sqrt(((a * a) + (b * b)));if((h < (r1 + r2)))
{return true;
} else
{return false;
}
});
comets.core.update_collisions = (function update_collisions(state){var qtree = comets.core.qtree_generate.call(null,state,(3));return null;
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
comets.core.comet_spawn = (function comet_spawn(state,is_fragment){var rad = (cljs.core.truth_(is_fragment)?(new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(comets.core.comet) / (2)):new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(comets.core.comet));var axi = comets.math.rng_int.call(null,(2));var pos = ((cljs.core._EQ_.call(null,axi,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),comets.math.rng_int.call(null,new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(comets.core.viewport)),new cljs.core.Keyword(null,"y","y",-1757859776),(rad - (1))], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(rad - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),comets.math.rng_int.call(null,new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(comets.core.viewport))], null));var dir = comets.math.vector_normalize.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comets.math.rng_float.call(null),comets.math.rng_float.call(null)], null));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"comets","comets",-423299531),cljs.core.conj.call(null,new cljs.core.Keyword(null,"comets","comets",-423299531).cljs$core$IFn$_invoke$arity$1(state),cljs.core.assoc.call(null,comets.core.comet,new cljs.core.Keyword(null,"motion","motion",36831425),cljs.core.assoc.call(null,comets.core.motion,new cljs.core.Keyword(null,"pos-x","pos-x",398349422),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"pos-y","pos-y",992315996),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"speed","speed",1257663751),(100),new cljs.core.Keyword(null,"dir","dir",1734754661),dir),new cljs.core.Keyword(null,"radius","radius",-2073122258),rad)));
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
comets.core.update_player_position = (function update_player_position(state){var player = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400)], null));var time = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"delta","delta",108939957)], null));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"player","player",-97687400),comets.core.update_motion.call(null,player,time));
});
comets.core.update_player_direction = (function update_player_direction(state){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"motion","motion",36831425),new cljs.core.Keyword(null,"dir","dir",1734754661)], null),(function (){return comets.math.vector_normalize.call(null,cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,comets.core.keys_down)),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,comets.core.keys_down)),new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,comets.core.keys_down)),new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,comets.core.keys_down))));
}));
});
/**
* updates the rotation-angle of the ship and the forward-vector.
* 
* direction is based on the position of the mouse sursor. the player ship
* should always facing the cursor
*/
comets.core.update_player_rotation_angle = (function update_player_rotation_angle(state){var mx = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,comets.core.mouse_pos));var my = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,comets.core.mouse_pos));var px = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"motion","motion",36831425),new cljs.core.Keyword(null,"pos-x","pos-x",398349422)], null));var py = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"motion","motion",36831425),new cljs.core.Keyword(null,"pos-y","pos-y",992315996)], null));var a = (px - mx);var b = (py - my);var ang = Math.atan2(a,b);var adj = ((-1) * (ang + (3.1415 / (2))));return cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"rotation-angle","rotation-angle",-1155216918)], null),((function (mx,my,px,py,a,b,ang,adj){
return (function (){return adj;
});})(mx,my,px,py,a,b,ang,adj))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"forward-vector","forward-vector",1329493186)], null),((function (mx,my,px,py,a,b,ang,adj){
return (function (){return comets.math.vector_normalize.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(a * (-1)),((-1) * b)], null));
});})(mx,my,px,py,a,b,ang,adj))
);
});
comets.core.update_player_attack = (function update_player_attack(state){var px = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"motion","motion",36831425),new cljs.core.Keyword(null,"pos-x","pos-x",398349422)], null));var py = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"motion","motion",36831425),new cljs.core.Keyword(null,"pos-y","pos-y",992315996)], null));var fw_x = cljs.core.nth.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"forward-vector","forward-vector",1329493186)], null)),(0));var fw_y = cljs.core.nth.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"forward-vector","forward-vector",1329493186)], null)),(1));var delay = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"attack-delay","attack-delay",-975870217)], null));var think = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"time-before-attack","time-before-attack",1344769937)], null));var time = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"delta","delta",108939957)], null));if(cljs.core.truth_((function (){var and__3548__auto__ = cljs.core.deref.call(null,comets.core.click_down);if(cljs.core.truth_(and__3548__auto__))
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
comets.core.update_frame = (function update_frame(){cljs.core.reset_BANG_.call(null,comets.core.game_state,comets.core.update_time_start.call(null,comets.core.draw_frame.call(null,comets.core.update_explosions.call(null,comets.core.update_comets.call(null,comets.core.update_bullets.call(null,comets.core.update_player_attack.call(null,comets.core.update_player_position.call(null,comets.core.update_player_direction.call(null,comets.core.update_player_rotation_angle.call(null,comets.core.update_time_delta.call(null,cljs.core.deref.call(null,comets.core.game_state))))))))))));
return window.requestAnimationFrame(update_frame);
});
comets.core.frame = (function frame(state){return null;
});
window.requestAnimationFrame(comets.core.update_frame);

//# sourceMappingURL=core.js.map