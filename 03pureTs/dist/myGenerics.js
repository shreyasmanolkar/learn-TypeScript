"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
;
function identityTwo(val) {
    return val;
}
;
function identityThree(val) {
    return val;
}
;
// shortcut to define generics
function identityFour(val) {
    return val;
}
;
;
function identityFive(val) {
    return val;
}
;
function getSearchProducts(products) {
    // do some database opearations
    const myIndex = 3;
    return products[3];
}
const getMoreSearchProducts = (products) => {
    // do some database operations
    const myIndex = 4;
    return products[myIndex];
};
