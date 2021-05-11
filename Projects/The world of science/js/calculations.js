function calculate() {
    let m = document.getElementById("m").value;
    let a = document.getElementById("a").value;
    let f = m * a;
    document.getElementById("result").innerHTML = "F = " + f + " N";
}

let calculateButton = document.getElementById("calculate");
calculateButton.addEventListener("click", calculate)


function reset() {
    document.getElementById("m").value = "";
    document.getElementById("a").value = "";
    document.getElementById("result").innerHTML = "";
}

let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", reset)