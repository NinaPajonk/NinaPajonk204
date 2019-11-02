/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

console.log("hoi nina");

var hamburger = document.querySelector(".container");
var ul = document.querySelector("nav ul");

hamburger.addEventListener("click", function () {
    ul.classList.toggle("active");
})