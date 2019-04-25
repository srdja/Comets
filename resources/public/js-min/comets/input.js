// Compiled by ClojureScript 0.0-2322
goog.provide('comets.input');
goog.require('cljs.core');
goog.require('comets.draw');
goog.require('comets.draw');
comets.input.mouse_pos = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$83,(1),cljs.core.constant$keyword$84,(1)], null)) : cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$83,(1),cljs.core.constant$keyword$84,(1)], null)));
comets.input.keys_down = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$67,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.constant$keyword$85,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.constant$keyword$86,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.constant$keyword$87,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)) : cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$67,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.constant$keyword$85,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.constant$keyword$86,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.constant$keyword$87,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)));
comets.input.click_down = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false));
/**
* Find out whether current mouse coordinates are inside the canvas
*/
comets.input.is_canvas_coord = (function is_canvas_coord(canvas_rect,event){var view_x = (event["clientX"]);var view_y = (event["clientY"]);var rect_l = (canvas_rect["left"]);var rect_t = (canvas_rect["top"]);var rect_b = (canvas_rect["bottom"]);var rect_r = (canvas_rect["right"]);if(((view_x < rect_l)) || ((view_x > rect_r)) || ((view_y < rect_t)) || ((view_y > rect_b)))
{return false;
} else
{return true;
}
});
comets.input.update_mouse_down = (function update_mouse_down(event){return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(comets.input.click_down,true) : cljs.core.reset_BANG_.call(null,comets.input.click_down,true));
});
comets.input.update_mouse_up = (function update_mouse_up(event){return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(comets.input.click_down,false) : cljs.core.reset_BANG_.call(null,comets.input.click_down,false));
});
/**
* Update relative canvas mouse coordinates.
*/
comets.input.update_mouse_pos = (function update_mouse_pos(event){return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(comets.input.mouse_pos,(function (){var rect = comets.draw.surface.getBoundingClientRect();var new_x = ((event["clientX"]) - (rect["left"]));var new_y = ((event["clientY"]) - (rect["top"]));if(comets.input.is_canvas_coord(rect,event))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$83,new_x,cljs.core.constant$keyword$84,new_y], null);
} else
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$83,cljs.core.constant$keyword$83.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(comets.input.mouse_pos) : cljs.core.deref.call(null,comets.input.mouse_pos))),cljs.core.constant$keyword$84,cljs.core.constant$keyword$84.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(comets.input.mouse_pos) : cljs.core.deref.call(null,comets.input.mouse_pos)))], null);
}
})()) : cljs.core.reset_BANG_.call(null,comets.input.mouse_pos,(function (){var rect = comets.draw.surface.getBoundingClientRect();var new_x = ((event["clientX"]) - (rect["left"]));var new_y = ((event["clientY"]) - (rect["top"]));if(comets.input.is_canvas_coord(rect,event))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$83,new_x,cljs.core.constant$keyword$84,new_y], null);
} else
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$83,cljs.core.constant$keyword$83.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(comets.input.mouse_pos) : cljs.core.deref.call(null,comets.input.mouse_pos))),cljs.core.constant$keyword$84,cljs.core.constant$keyword$84.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(comets.input.mouse_pos) : cljs.core.deref.call(null,comets.input.mouse_pos)))], null);
}
})()));
});
comets.input.update_key_down = (function update_key_down(event){var keys = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(comets.input.keys_down) : cljs.core.deref.call(null,comets.input.keys_down));var G__6810 = (event["keyCode"]);switch (G__6810) {
case (87):
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(comets.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$67], null),((function (G__6810,keys){
return (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null);
});})(G__6810,keys))
)) : cljs.core.reset_BANG_.call(null,comets.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$67], null),((function (G__6810,keys){
return (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null);
});})(G__6810,keys))
)));

break;
case (65):
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(comets.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$85], null),((function (G__6810,keys){
return (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);
});})(G__6810,keys))
)) : cljs.core.reset_BANG_.call(null,comets.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$85], null),((function (G__6810,keys){
return (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);
});})(G__6810,keys))
)));

break;
case (83):
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(comets.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$86], null),((function (G__6810,keys){
return (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);
});})(G__6810,keys))
)) : cljs.core.reset_BANG_.call(null,comets.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$86], null),((function (G__6810,keys){
return (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);
});})(G__6810,keys))
)));

break;
case (68):
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(comets.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$87], null),((function (G__6810,keys){
return (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);
});})(G__6810,keys))
)) : cljs.core.reset_BANG_.call(null,comets.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$87], null),((function (G__6810,keys){
return (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);
});})(G__6810,keys))
)));

break;
default:
return event;

}
});
comets.input.update_key_up = (function update_key_up(event){var keys = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(comets.input.keys_down) : cljs.core.deref.call(null,comets.input.keys_down));var G__6813 = (event["keyCode"]);switch (G__6813) {
case (87):
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(comets.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$67], null),((function (G__6813,keys){
return (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
});})(G__6813,keys))
)) : cljs.core.reset_BANG_.call(null,comets.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$67], null),((function (G__6813,keys){
return (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
});})(G__6813,keys))
)));

break;
case (65):
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(comets.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$85], null),((function (G__6813,keys){
return (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
});})(G__6813,keys))
)) : cljs.core.reset_BANG_.call(null,comets.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$85], null),((function (G__6813,keys){
return (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
});})(G__6813,keys))
)));

break;
case (83):
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(comets.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$86], null),((function (G__6813,keys){
return (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
});})(G__6813,keys))
)) : cljs.core.reset_BANG_.call(null,comets.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$86], null),((function (G__6813,keys){
return (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
});})(G__6813,keys))
)));

break;
case (68):
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(comets.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$87], null),((function (G__6813,keys){
return (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
});})(G__6813,keys))
)) : cljs.core.reset_BANG_.call(null,comets.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$87], null),((function (G__6813,keys){
return (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
});})(G__6813,keys))
)));

break;
default:
return event;

}
});
(window["onmousemove"] = comets.input.update_mouse_pos);
(window["onkeydown"] = comets.input.update_key_down);
(window["onkeyup"] = comets.input.update_key_up);
(window["onmouseup"] = comets.input.update_mouse_up);
(window["onmousedown"] = comets.input.update_mouse_down);
