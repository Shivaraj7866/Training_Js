var User4 = /** @class */ (function () {
    function User4(name, email) {
        this.courseCount = 2;
        this.name = name;
        this.email = email;
    }
    Object.defineProperty(User4.prototype, "getAppleEmail", {
        get: function () {
            return "apple".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    return User4;
}());
var hitesh = new User4("smith", "smith@.dev");
console.log(hitesh);
