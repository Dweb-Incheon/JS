"use strict";
function generics1(arg) {
    return arg;
}
function generics2(arg) {
    return arg;
}
function generics3(arg) {
    return arg;
}
function generics4(arg) {
    console.log(arg.length); // array .length property
    return arg;
}
const inu = generics4(["a", "b", "c"]);
