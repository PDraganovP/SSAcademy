function isLeap(year) {
    if (year % 400 == 0) {
        return true
    } else if (year % 100 == 0) {
        return false
    } else if (year % 4 == 0) {
        return true
    } else {
        return false
    }

}

let year = 1964;
let result = isLeap(year) ? "leap" : "not leap"
console.log("Year is " + result);