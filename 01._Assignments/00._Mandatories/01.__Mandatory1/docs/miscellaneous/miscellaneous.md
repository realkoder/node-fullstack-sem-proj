# Miscellaneous - General and Mixed Stuff From Elective

## What is node.js
Traditionally `JavaScript` was used for client-side scripting running inside the clients web-browser.
`Node.js` is a powerfull runtime environment that allows `JavaScript` code to run outside the browser. Since `JavaScript` is allowed to run outside the browser through `node.js` `JavaScript` have gain the capabilities to be used for server-side development, making it possible to build robust and scalable backend applications.
`Node.js` makes it possibæe to build full-stack applications that run both on client and server sides, which makes the development environment more efficient and cohesed. 
`Node.js` has also become a popular choice because of it's efficient event-driven architecture and versatile ecosystem of modules and libraries.


<br>

Running node will launch nodes runtime environment - then `JavaScript` code can be executed.
REPL - `Read Evaluate Print Loop`. A REPL is an interactive programming environment that allows users to enter and execute individual lines or blocks of code, providing immediate feedback.

<br>

---

<br>

## Modules
`JavaScript`relies heavily on the use of modules which provides a way to organize and structure code into reusable components, it tries to improve better code maintainability and reusability.
The use of modules encapsulates related functionality into units, so different aspects of code will be isolated and code organization is improved.
There are two different approaches to work with modules in `JavaScript` when a module should be exported or imported:
- `ECMAScript modules (ES modules or ES6 modules)`
- `CommonJS`

### ES Modules
It was introduced as part of the `ECMAScript 2015 (ES6)` specification to provide a native module system for `JavaScript`.
A module is file-based and can export variables, functions, classes and also other modules.
Importing can be done for other modules exported functionality which could be `named exports`, `default exports` or a combination of both.
The use of modules promotes encapsulation and prevents pollution of the global namespace.
`ES modules` are loaded asynchronously, meaning that they are fetched and executed only when needed. This improves performance by reducing unnecessary blocking during script loading.

### CommonJS
This is a module system just like `ES modules` it's primarily used for server-side environments like `Node.js`. 
With CommonJS it´s also file based, and modules are defined by wrapping code in special objects provided by the `CommonJS module system`.
Exporting functionality through `CommonJS` would be to assign values to `module.exports` or `exports objects`. All assigned to `module.exports` will be exposed as the public API of the module.
Importing functionality with `CommonJS` would be to use the `require()`, which takes a module path as an argument and returns the exported values from the specified module.
`CommonJS modules` are loaded synchronously opposite to `ES modules`, meaning that dependencies are resolved and executed immediately when encountered in code.

<br>

---

<br>

## Templating engine



```bash
# Execute nodejs REPL
node
```

```javascript
// Showcasing how to import express, instantiation and bootup the server listening for HTTPrequest
const express = require('express');
const app = express();

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
```

```javascript
// ========================== MODULES ==========================
// ========================== ES MODULES ==========================
// ES modules exporting
export function greeting(name) {
  return `Hello ${name}, how are you today?`
}

// ES modules importing function
import greeting from "./utilMethods.js"

// More examples of exporting with ES modules
// module A: math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// Module B: main.js
import { add, subtract } from './math.js';

console.log(add(5, 3));      // Output: 8
console.log(subtract(5, 3)); // Output: 2


// ========================== COMMONJS MODULES ==========================
// CommonJS import / export
const express = require("express");

// Example of exporting with CommonJS modules
// Module A: math.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

module.exports = { add, subtract };

// Module B: main.js
const { add, subtract } = require('./math'); // importing with CommonJS modules

console.log(add(5, 3));      // Output: 8
console.log(subtract(5, 3)); // Output: 2
```