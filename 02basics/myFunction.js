"use strict";
exports.__esModule = true;
function addTwo(num) {
    // return 'hello';
    return num + 2;
}
addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("shreyas");
function signUpUser(name, email, isPaid) { }
signUpUser("shreyas", "shreyasmanolkar123@gmail.com", false);
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser('s', 's@s');
// function getValue(myVal: number): boolean{
//     if(myVal > 5){
//         return true
//     }
//     return "200 Ok"
// }
var getHello = function (s) {
    return "";
};
var heros = ["indra", "varun", "agni", "surya", "chandra", "vayu"];
heros.map(function (hero) {
    return "hero is ".concat(hero, " ");
    // return 2;
});
function consoleError(errmsg) {
    console.log(errmsg);
}
// error handeling
function handleError(errmsg) {
    throw new Error(errmsg);
}
