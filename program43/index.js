var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var make_great1 = function (names) {
    for (var i = 0; i < names.length; i++) {
        names[i] = "Great ".concat(names[i]);
    }
    ;
};
var show_magician1 = function (names) {
    names.forEach(function (name) {
        console.log(name);
    });
};
var names1 = ['Ali', 'Ahmed', 'Abdullah', 'Saqib', 'Hamza'];
var newNames = __spreadArray([], names1, true);
make_great1(newNames);
show_magician1(names1);
show_magician1(newNames);
