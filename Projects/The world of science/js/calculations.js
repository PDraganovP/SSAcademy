function calculateF() {
    let m = document.getElementById("m").value;
    let a = document.getElementById("a").value;
    let f = m * a;
    document.getElementById("result-f").innerHTML = "F = " + f + " N";
}

let calculateFButton = document.getElementById("calculate-f");
calculateFButton.addEventListener("click", calculateF);


function resetF() {
    document.getElementById("m").value = "";
    document.getElementById("a").value = "";
    document.getElementById("result-f").innerHTML = "";
}

let resetFButton = document.getElementById("reset-f");
resetFButton.addEventListener("click", resetF);

function calculateI() {
    let u = document.getElementById("U").value;
    let r = document.getElementById("R").value;
    let i = u / r;
    document.getElementById("result-i").innerHTML = "I = " + i + " A";
}
let calculateIButton = document.getElementById("calculate-i");
calculateIButton.addEventListener("click", calculateI);

function resetI() {
    document.getElementById("U").value = "";
    document.getElementById("R").value = "";
    document.getElementById("result-i").innerHTML = "";
}
let resetIButton = document.getElementById("reset-i");
resetIButton.addEventListener("click", resetI);

function calculateP() {
    let a = document.getElementById("A").value;
    let t = document.getElementById("t").value;
    let p = a / t;
    document.getElementById("result-p").innerHTML = "P = " + p + " W";
}
let calculatePButton = document.getElementById("calculate-p");
calculatePButton.addEventListener("click", calculateP);

function resetP() {
    document.getElementById("A").value = "";
    document.getElementById("t").value = "";
    document.getElementById("result-p").innerHTML = "";
}
let resetPButton = document.getElementById("reset-p");
resetPButton.addEventListener("click", resetP);

let defaultElements = document.getElementsByClassName("default");
for (let i = 0; i < defaultElements.length; i++) {
    defaultElements[i].style.display = "block";
}

function toggle(event) {
    let element = event.target;
    let elementText = element.textContent;
    let userInput = document.getElementsByName(elementText);
    let formulaDescription = element.nextElementSibling;
    if (formulaDescription.style.display === "block") {
        formulaDescription.style.display = "none";
        userInput[0].style.display = "none";
    } else {
        formulaDescription.style.display = "block";
        userInput[0].style.display = "block";
    }
}

let formulaElements = document.getElementsByClassName("formula");
for (let i = 0; i < formulaElements.length; i++) {
    formulaElements[i].addEventListener("click", toggle)
}