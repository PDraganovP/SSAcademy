function checkIfTheNumberIsEvenOrOdd(number) {
    let evenNumber = "The number is even";
    let oddNumber = "The number is odd";
    if (number % 2 == 0) {
        return evenNumber;
    } else {
        return oddNumber;
    }
}

function findTheSumOfTheFirstTenNaturalNumbers() {
    let result = 0;
    for (let i = 1; i <= 10; i++) {
        result += i;
    }
    return result;
}

function findTheProductOfTheFirstTenNaturalNumbers() {
    let result = 1;
    for (let i = 1; i <= 10; i++) {
        result *= i;
    }
    return result;
}

function findTheSumOfTheOnesSeries(numberOfTerms) {
    let serie = "";
    let result = 0;
    for (let i = 1; i <= numberOfTerms; i++) {
        serie += 1;
        result += +serie;
    }
    return result;
}

console.log(checkIfTheNumberIsEvenOrOdd(5010));
console.log("The sum of the first ten natural numbers is", findTheSumOfTheFirstTenNaturalNumbers());
console.log("The product of the first ten natural numbers is", findTheProductOfTheFirstTenNaturalNumbers());
console.log("The sum of ones series is", findTheSumOfTheOnesSeries(15));