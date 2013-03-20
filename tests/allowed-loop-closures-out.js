"use strict";
var arr = [];

// can be transformed (common WAT)
for (var x = 0; x < 10; x++) {
    arr.push(function() { return x; });
}

// can be transformed
for (var x$1 in [0,1,2]) {
    arr.push((function(x) { return function() { return x; } })(x$1));
}

arr.forEach(function(f) {
    console.log(f());
});
