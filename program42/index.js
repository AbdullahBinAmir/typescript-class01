var make_great = function (names) {
    for (var i = 0; i < names.length; i++) {
        names[i] = "Great ".concat(names[i]);
    }
    ;
};
var show_magician = function (names) {
    names.forEach(function (name) {
        console.log(name);
    });
};
var names = ['Ali', 'Ahmed', 'Abdullah', 'Saqib', 'Hamza'];
make_great(names);
show_magician(names);
