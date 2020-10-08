var _ = require('lodash');

let array = [1, 2, 3, 4, 5];
console.log("answer:" + _.without(array, 2));
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("background");


color1.addEventListener("input", gradientChange);
color2.addEventListener("input", gradientChange);

function gradientChange(params) {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " +
        color2.value + ")";
    css.textContent = body.style.background + ";";
    console.log(body.style.color);
}