let numberArray = [1, 2, -8, 54, 1, 5, 6, 5, -98, 105, 54];

let sortFunction = function (a, b) { return a - b };
numberArray.sort(sortFunction);

function getTheBiggestNumber(numberArray) {
    let arrayLength = numberArray.length;
    let biggestNumber = numberArray[arrayLength - 1];

    return biggestNumber;
}

function getTheSmallestNumber(numberArray) {
    let smallestNumber = numberArray[0];

    return smallestNumber;
}

function getSumOfThePositiveNumbers(numberArray) {
    let arrayLength = numberArray.length;
    let result = 0;
    for (let i = 0; i < arrayLength; i++) {
        if (numberArray[i] > 0) {
            result += numberArray[i];
        }
    }
    return result;
}

function getProductOfTheNegativeNumbers(numberArray) {
    let arrayLength = numberArray.length;
    let result = 1;
    for (let i = 0; i < arrayLength; i++) {
        if (numberArray[i] < 0) {
            result *= numberArray[i];
        }
    }
    return result;
}

function getAmountOfThePositiveNumbers(numberArray) {
    let arrayLength = numberArray.length;
    let counter = 0;
    for (let i = 0; i < arrayLength; i++) {
        if (numberArray[i] > 0) {
            counter++;
        }
    }
    return counter;
}

function getAmountOfTheNegativeNumbers(numberArray) {
    let arrayLength = numberArray.length;
    let counter = 0;
    for (let i = 0; i < arrayLength; i++) {
        if (numberArray[i] < 0) {
            counter++;
        }
    }
    return counter;
}

console.log("The biggest number: ", getTheBiggestNumber(numberArray));
console.log("The smallest number:", getTheSmallestNumber(numberArray));
console.log("The sum of the positive numbers", getSumOfThePositiveNumbers(numberArray));
console.log("The product of the negative numbers:", getProductOfTheNegativeNumbers(numberArray));
console.log("Amount of the positive numbers:", getAmountOfThePositiveNumbers(numberArray));
console.log("Amount of the negative numbers:", getAmountOfTheNegativeNumbers(numberArray));
