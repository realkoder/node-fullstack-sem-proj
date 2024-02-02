// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const result = parseFloat(numberOne) + parseFloat(numberTwo);
const anotherResult =  `${parseFloat(numberOne) + parseFloat(numberTwo)}`;
console.log(result);
console.log(anotherResult);
// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const exercise4Result = (parseFloat(numberOne) + parseFloat(numberTwo)).toFixed(2);
console.log(exercise4Result);

// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals


const totalSum = parseInt(one) + parseInt(two) + parseInt(three);
const average = totalSum / 3;
console.log(average);


// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

const charC = letters[2];
console.log(charC);

// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const factModified = (() => {
    const firstPart = fact.slice(0, 17);
    const capitalizedJ = fact.substring(17, 18).toUpperCase();
    return firstPart + capitalizedJ + fact.substring(18);
})();

console.log(factModified);

// Thought this would work but nah...
const anotherFactModified = fact;
anotherFactModified[17] = "J";
console.log(anotherFactModified);

// --------------------------------------