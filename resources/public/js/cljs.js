goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.object', 'goog.string.StringBuffer', 'goog.array']);
goog.addDependency("../comets/math.js", ['comets.math'], ['cljs.core']);
goog.addDependency("../comets/draw.js", ['comets.draw'], ['goog.string', 'cljs.core', 'goog.string.format']);
goog.addDependency("../comets/input.js", ['comets.input'], ['cljs.core', 'comets.draw']);
goog.addDependency("../comets/core.js", ['comets.core'], ['goog.string', 'cljs.core', 'comets.draw', 'comets.input', 'goog.string.format', 'comets.math']);