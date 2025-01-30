"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User4 = void 0;
var nums = [1, 2, 3, 4];
var names = ["smith", "faulkner", "tony", "steve"];
console.log(nums);
function identity(val) {
    return val;
}
function identity2(val) {
    return val;
}
//generics gives uniqness for the functions
function identity3(val) {
    return val;
}
function identity4(val) {
    return val;
}
console.log(identity3("generics are awsome"));
var User4 = /** @class */ (function () {
    function User4(name, email) {
        this.courseCount = 4; //we can access only in main class and as well in sub classes but can't modify
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
    Object.defineProperty(User4.prototype, "getCourseCount", {
        get: function () {
            return this.courseCount;
        },
        //"set" returns nothing include void
        set: function (courseNum) {
            if (courseNum <= 2)
                throw new Error("course count should be more than two");
            this.courseCount = courseNum;
        },
        enumerable: false,
        configurable: true
    });
    User4.prototype.getTokens = function () {
        console.log("tokens deleted");
    };
    return User4;
}());
exports.User4 = User4;
