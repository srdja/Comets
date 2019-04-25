// Compiled by ClojureScript 0.0-2322
goog.provide('comets.draw');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string');
goog.require('goog.string.format');
comets.draw.surface = document.getElementById("surface");
comets.draw.context = comets.draw.surface.getContext("2d");
comets.draw.viewport = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$67,(900),cljs.core.constant$keyword$68,(600)], null);
comets.draw.draw_player_ship = (function draw_player_ship(state,context){var player = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$69], null));var px = cljs.core.constant$keyword$70.cljs$core$IFn$_invoke$arity$1(player).call(null,cljs.core.constant$keyword$71);var py = cljs.core.constant$keyword$70.cljs$core$IFn$_invoke$arity$1(player).call(null,cljs.core.constant$keyword$72);var angle = cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(player);if(cljs.core.not(cljs.core.constant$keyword$74.cljs$core$IFn$_invoke$arity$1(player)))
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
{var timenow = Date.now();var color = (cljs.core.mod((timenow - cljs.core.constant$keyword$75.cljs$core$IFn$_invoke$arity$1(player)),(255)) * (1));var colorstr = ("rgb("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)+")");context.save();
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
comets.draw.draw_particles = (function draw_particles(particles,context,color){var seq__6741 = cljs.core.seq(particles);var chunk__6742 = null;var count__6743 = (0);var i__6744 = (0);while(true){
if((i__6744 < count__6743))
{var p = chunk__6742.cljs$core$IIndexed$_nth$arity$2(null,i__6744);var px_6745 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$70,cljs.core.constant$keyword$71], null));var py_6746 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$70,cljs.core.constant$keyword$72], null));var r_6747 = cljs.core.constant$keyword$76.cljs$core$IFn$_invoke$arity$1(p);context.save();
context.beginPath();
(context["fillStyle"] = color);
context.arc((px_6745 + r_6747),(py_6746 + r_6747),r_6747,(0),((2) * 3.1415),false);
context.fill();
context.closePath();
context.restore();
{
var G__6748 = seq__6741;
var G__6749 = chunk__6742;
var G__6750 = count__6743;
var G__6751 = (i__6744 + (1));
seq__6741 = G__6748;
chunk__6742 = G__6749;
count__6743 = G__6750;
i__6744 = G__6751;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__6741);if(temp__4126__auto__)
{var seq__6741__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__6741__$1))
{var c__4316__auto__ = cljs.core.chunk_first(seq__6741__$1);{
var G__6752 = cljs.core.chunk_rest(seq__6741__$1);
var G__6753 = c__4316__auto__;
var G__6754 = cljs.core.count(c__4316__auto__);
var G__6755 = (0);
seq__6741 = G__6752;
chunk__6742 = G__6753;
count__6743 = G__6754;
i__6744 = G__6755;
continue;
}
} else
{var p = cljs.core.first(seq__6741__$1);var px_6756 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$70,cljs.core.constant$keyword$71], null));var py_6757 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$70,cljs.core.constant$keyword$72], null));var r_6758 = cljs.core.constant$keyword$76.cljs$core$IFn$_invoke$arity$1(p);context.save();
context.beginPath();
(context["fillStyle"] = color);
context.arc((px_6756 + r_6758),(py_6757 + r_6758),r_6758,(0),((2) * 3.1415),false);
context.fill();
context.closePath();
context.restore();
{
var G__6759 = cljs.core.next(seq__6741__$1);
var G__6760 = null;
var G__6761 = (0);
var G__6762 = (0);
seq__6741 = G__6759;
chunk__6742 = G__6760;
count__6743 = G__6761;
i__6744 = G__6762;
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
comets.draw.draw_bullets = (function draw_bullets(state,context){return comets.draw.draw_particles(cljs.core.constant$keyword$77.cljs$core$IFn$_invoke$arity$1(state),context,"#81F7D8");
});
comets.draw.draw_explosions = (function draw_explosions(state,context){var seq__6767 = cljs.core.seq(cljs.core.constant$keyword$78.cljs$core$IFn$_invoke$arity$1(state));var chunk__6768 = null;var count__6769 = (0);var i__6770 = (0);while(true){
if((i__6770 < count__6769))
{var e = chunk__6768.cljs$core$IIndexed$_nth$arity$2(null,i__6770);comets.draw.draw_particles(e,context,"white");
{
var G__6771 = seq__6767;
var G__6772 = chunk__6768;
var G__6773 = count__6769;
var G__6774 = (i__6770 + (1));
seq__6767 = G__6771;
chunk__6768 = G__6772;
count__6769 = G__6773;
i__6770 = G__6774;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__6767);if(temp__4126__auto__)
{var seq__6767__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__6767__$1))
{var c__4316__auto__ = cljs.core.chunk_first(seq__6767__$1);{
var G__6775 = cljs.core.chunk_rest(seq__6767__$1);
var G__6776 = c__4316__auto__;
var G__6777 = cljs.core.count(c__4316__auto__);
var G__6778 = (0);
seq__6767 = G__6775;
chunk__6768 = G__6776;
count__6769 = G__6777;
i__6770 = G__6778;
continue;
}
} else
{var e = cljs.core.first(seq__6767__$1);comets.draw.draw_particles(e,context,"white");
{
var G__6779 = cljs.core.next(seq__6767__$1);
var G__6780 = null;
var G__6781 = (0);
var G__6782 = (0);
seq__6767 = G__6779;
chunk__6768 = G__6780;
count__6769 = G__6781;
i__6770 = G__6782;
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
comets.draw.draw_comets = (function draw_comets(state,comets__$1){var seq__6787 = cljs.core.seq(cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(state));var chunk__6788 = null;var count__6789 = (0);var i__6790 = (0);while(true){
if((i__6790 < count__6789))
{var c = chunk__6788.cljs$core$IIndexed$_nth$arity$2(null,i__6790);var cx_6791 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$70,cljs.core.constant$keyword$71], null));var cy_6792 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$70,cljs.core.constant$keyword$72], null));var r_6793 = cljs.core.constant$keyword$76.cljs$core$IFn$_invoke$arity$1(c);if(cljs.core.truth_(cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(c)))
{comets.draw.context.save();
comets.draw.context.beginPath();
comets.draw.context.arc((cx_6791 + r_6793),(cy_6792 + r_6793),r_6793,(0),((2) * 3.1415),false);
comets.draw.context.stroke();
comets.draw.context.closePath();
comets.draw.context.restore();
} else
{comets.draw.context.save();
comets.draw.context.beginPath();
comets.draw.context.moveTo(cx_6791,(cy_6792 - r_6793));
comets.draw.context.lineTo((cx_6791 + (r_6793 * 0.2)),(cy_6792 - (r_6793 * 0.4)));
comets.draw.context.lineTo((cx_6791 + (r_6793 * 0.8)),(cy_6792 - (r_6793 * 0.8)));
comets.draw.context.lineTo((cx_6791 + r_6793),cy_6792);
comets.draw.context.lineTo((cx_6791 + (r_6793 * 0.6)),(cy_6792 + (r_6793 * 0.1)));
comets.draw.context.lineTo((cx_6791 + (r_6793 * 0.8)),(cy_6792 + (r_6793 * 0.9)));
comets.draw.context.lineTo((cx_6791 + (r_6793 * 0.2)),(cy_6792 + (r_6793 * 0.8)));
comets.draw.context.lineTo(cx_6791,(cy_6792 + r_6793));
comets.draw.context.lineTo((cx_6791 - (r_6793 * 0.7)),(cy_6792 + (r_6793 * 0.5)));
comets.draw.context.lineTo((cx_6791 - (r_6793 * 0.6)),(cy_6792 + (r_6793 * 0.2)));
comets.draw.context.lineTo((cx_6791 - r_6793),cy_6792);
comets.draw.context.lineTo(cx_6791,(cy_6792 - r_6793));
comets.draw.context.stroke();
comets.draw.context.restore();
}
{
var G__6794 = seq__6787;
var G__6795 = chunk__6788;
var G__6796 = count__6789;
var G__6797 = (i__6790 + (1));
seq__6787 = G__6794;
chunk__6788 = G__6795;
count__6789 = G__6796;
i__6790 = G__6797;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__6787);if(temp__4126__auto__)
{var seq__6787__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__6787__$1))
{var c__4316__auto__ = cljs.core.chunk_first(seq__6787__$1);{
var G__6798 = cljs.core.chunk_rest(seq__6787__$1);
var G__6799 = c__4316__auto__;
var G__6800 = cljs.core.count(c__4316__auto__);
var G__6801 = (0);
seq__6787 = G__6798;
chunk__6788 = G__6799;
count__6789 = G__6800;
i__6790 = G__6801;
continue;
}
} else
{var c = cljs.core.first(seq__6787__$1);var cx_6802 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$70,cljs.core.constant$keyword$71], null));var cy_6803 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$70,cljs.core.constant$keyword$72], null));var r_6804 = cljs.core.constant$keyword$76.cljs$core$IFn$_invoke$arity$1(c);if(cljs.core.truth_(cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(c)))
{comets.draw.context.save();
comets.draw.context.beginPath();
comets.draw.context.arc((cx_6802 + r_6804),(cy_6803 + r_6804),r_6804,(0),((2) * 3.1415),false);
comets.draw.context.stroke();
comets.draw.context.closePath();
comets.draw.context.restore();
} else
{comets.draw.context.save();
comets.draw.context.beginPath();
comets.draw.context.moveTo(cx_6802,(cy_6803 - r_6804));
comets.draw.context.lineTo((cx_6802 + (r_6804 * 0.2)),(cy_6803 - (r_6804 * 0.4)));
comets.draw.context.lineTo((cx_6802 + (r_6804 * 0.8)),(cy_6803 - (r_6804 * 0.8)));
comets.draw.context.lineTo((cx_6802 + r_6804),cy_6803);
comets.draw.context.lineTo((cx_6802 + (r_6804 * 0.6)),(cy_6803 + (r_6804 * 0.1)));
comets.draw.context.lineTo((cx_6802 + (r_6804 * 0.8)),(cy_6803 + (r_6804 * 0.9)));
comets.draw.context.lineTo((cx_6802 + (r_6804 * 0.2)),(cy_6803 + (r_6804 * 0.8)));
comets.draw.context.lineTo(cx_6802,(cy_6803 + r_6804));
comets.draw.context.lineTo((cx_6802 - (r_6804 * 0.7)),(cy_6803 + (r_6804 * 0.5)));
comets.draw.context.lineTo((cx_6802 - (r_6804 * 0.6)),(cy_6803 + (r_6804 * 0.2)));
comets.draw.context.lineTo((cx_6802 - r_6804),cy_6803);
comets.draw.context.lineTo(cx_6802,(cy_6803 - r_6804));
comets.draw.context.stroke();
comets.draw.context.restore();
}
{
var G__6805 = cljs.core.next(seq__6787__$1);
var G__6806 = null;
var G__6807 = (0);
var G__6808 = (0);
seq__6787 = G__6805;
chunk__6788 = G__6806;
count__6789 = G__6807;
i__6790 = G__6808;
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
comets.draw.draw_hud = (function draw_hud(state,context){var score = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$69,cljs.core.constant$keyword$81], null));var lives = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$69,cljs.core.constant$keyword$82], null));context.beginPath();
context.rect((0),(0),cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(comets.draw.viewport),cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(comets.draw.viewport));
(context["lineWidth"] = (1));
(context["strokeStyle"] = "white");
context.stroke();
(context["font"] = "20px Share Tech Mono");
(context["fillStyle"] = "white");
context.fillText(goog.string.format("score: %s",score),(15),(30));
context.fillText(goog.string.format("lives: %s",lives),(15),(55));
(context["font"] = "8px Sans");
(context["fillStyle"] = "white");
return context.fillText(goog.string.format("Moving around (W,A,S,D) / Aiming (Mouse pointer) / Shooting (Left click)"),(15),(cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(comets.draw.viewport) - (10)));
});
comets.draw.draw_alien_ship = (function draw_alien_ship(state){return cljs.core.List.EMPTY;
});
comets.draw.draw_frame = (function draw_frame(state){comets.draw.context.clearRect((0),(0),cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(comets.draw.viewport),cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(comets.draw.viewport));
comets.draw.draw_player_ship(state,comets.draw.context);
comets.draw.draw_bullets(state,comets.draw.context);
comets.draw.draw_explosions(state,comets.draw.context);
comets.draw.draw_comets(state,comets.draw.context);
comets.draw.draw_hud(state,comets.draw.context);
return state;
});
