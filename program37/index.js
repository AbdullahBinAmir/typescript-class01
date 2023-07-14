var make_shirts = function (size, message) {
    if (size === void 0) { size = 'large'; }
    if (size == 'large' || size == 'medium')
        return "Size of shirt is ".concat(size, " and message is I love TypeScript");
    else
        return "Size of shirt is ".concat(size, " and message is ").concat(message);
};
console.log(make_shirts('large', 'hello'));
