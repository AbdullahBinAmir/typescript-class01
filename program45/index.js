function saveCarInfo(car) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return car;
}
console.log(saveCarInfo({ manufacturer: 'toyota', model: 'corrola' }, { color: 'white' }, { make: '2020' }));
