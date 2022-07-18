var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("gradient");
var printGradientValue = document.querySelector("h3");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    printText();
};

function printText() {
    printGradientValue.textContent = body.style.background;
};

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);