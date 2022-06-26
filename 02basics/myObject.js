"use strict";
exports.__esModule = true;
var User = {
    name: "Shreyas",
    email: "shreyasmanolkar123@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
// createUser({name: "shreyas", isPaid: true});
// createUser({name: "shreyas", isPaid: true, email: "shreyasmanolkar123@gmail.com"});
var newUser = { name: "shreyas", isPaid: true, email: "shreyasmanolkar123@gmail.com" };
createUser(newUser);
function createCourse() {
    return { name: "reactjs", price: 399 };
}
function createUserTwo(user) {
    return { name: "", email: "", isActive: true };
}
;
createUserTwo({ name: "shreyas", email: "shreyasmanolkar123@gmail.com", isActive: true });
