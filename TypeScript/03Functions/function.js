"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//number
function getString(ironMan) {
    return ironMan + 5;
}
var hi = getString("the avenger");
console.log(hi);
//string
function getNum(number) {
    return number + 25;
}
var num = getNum(25);
console.log(num);
//boolean and default parameter
function bool(name, email, isLoggedIn) {
    if (isLoggedIn === void 0) { isLoggedIn = true; }
    return [
        "name", name,
        "email", email,
        "isLoggedIn", isLoggedIn
    ];
}
var multiBool = bool("shivaraj", "s@s.com", false);
console.log(multiBool);
