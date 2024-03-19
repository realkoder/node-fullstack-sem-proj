# Functions
`JavaScript` is a `JIT - JustInTime` compiled langauge where it reads all declarations and then execute statements. JavaScript program is run in a browser or a Node.js environment, the JavaScript engine first parses the code and then compiles it into executable machine code just before execution. This allows for dynamic optimizations and performance improvements based on runtime information.
`Hoisting` is an important process for `JavaScript` where variable and function declarations are moved to the top of their containing scope during the compilation phase, regardless of where they are declared in the code. This makes variables and functions usable in code before they have been declared.

## Function in JavaScript
Functions for `JavaScript` is fundamental building blocks allowing the developer to encapsulate and reuse pieces of code and execute it as needed.
Functions ca be declared using keyword `function` where the body will be enclosed in `{}`. Functions can also be created using function expressions, where a function is assigned to a variable. Function expressions can be anonymous or named. Arrow functions are a concise syntax introduced in `ES6` for defining functions. They provide a shorter syntax compared to traditional function expressions and automatically bind the this keyword.
There is also the `IIFE - Immediately Invoked Function Expression` which is used to create and execute a function immediately after it is defined.
The primary purpose of an IIFE is to encapsulate variables within a local scope, preventing them from polluting the global scope.

Functions can accept none or more parameters when called which will be values parsed to the function which called. These parameters can be used inside the function as needed. A function does also have the ability to return values which will happen as soon as the keyword `return` is encountered.
To invoke a function use function name and brackets `greet()`.
<br>

---

<br>

## Scopes
Scope is the context which variables is declared and accessed - in `JavaScript` there are following scopes: `global, module, function, block`.
If a variable or expression is not in the current scope, it will not be possible to use that value. Default scope for all code running is `global`.
Each function creates its own scope, and variables declared within that function are scoped to it.
With `block scope` all the variables declared inside a scope of curly brackets will be callable inside the brackets and not from the outside.

<br>

---

<br>

## Loops



<br>

---

<br>


```javascript
// ========================== HOISTING ==========================
console.log(x); // x is undefined not null
var x = 10;

sayHello(); // this will console.log "Hello, world"

function sayHello() {
    console.log("Hello, world!");
}
```

````javascript
// ========================== DIFFERENT FUNCTION EXAMPLES ==========================
// Classic function
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

// Anonymous function
const what = function (min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};

// Oneliner function returning randomInt
const getRanomdIntArrowFunction = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

// Function which takes a function/callback as argument
function genericActionPerformer(name, genericAction) {
    return genericAction(name);
}

// Oneliner arrowhead function returning interpolated string using param ${name}
const running = (name) => `${name} is running`;

// Calling function which takes name and a callback
const runningResult = genericActionPerformer("alex", running); // parsing prev defined oneliner callback
console.log(runningResult); 

// Calling function which takes name and a callback
const eatingResult = genericActionPerformer("Louis", (name) => `${name} is eating.`); // Defining the callback directly inside function call
console.log(eatingResult);

// USING AN IIFE - IFFYYYYY
(function() {
    var message = "Hello, world!";
    console.log(message);
})(); // Here the functions is invoked immediately
```