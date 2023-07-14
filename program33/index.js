var ordinal_list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, ordinal_list_1 = ordinal_list; _i < ordinal_list_1.length; _i++) {
    var num = ordinal_list_1[_i];
    if (num === 1)
        console.log('1st');
    else if (num == 2)
        console.log('2nd');
    else if (num == 3)
        console.log('3rd');
    else
        console.log("".concat(num, "th"));
}
