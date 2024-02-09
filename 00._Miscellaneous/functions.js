//hoisting - JIT (just in time compilation) reads all declarations and then execute statements.

getRandomInt();

// Classic function
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

// Anonymous function
const what = function (min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};

const getRanomdIntArrowFunction = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

function genericActionPerformer(name, genericAction) {
    return genericAction(name);
}

const running = (name) => `${name} is running`;

const runningResult = genericActionPerformer("alex", running);
console.log(runningResult); 

const eatingResult = genericActionPerformer("Louis", (name) => `${name} is eating.`);
console.log(eatingResult);