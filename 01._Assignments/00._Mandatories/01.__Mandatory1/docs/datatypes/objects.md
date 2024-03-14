# Objects

Objects in JavaScript and Node.js are fundamental data structures that allow you to store collections of key-value pairs. 
They are versatile and can represent various entities, from simple data structures to complex entities with behaviors and methods.

Here are some key concepts about objects in JavaScript and Node.js:

Key-Value Pairs: Objects consist of key-value pairs, where each key is a unique string (or symbol in ES6+) and each value can be of any data type, including other objects, functions, arrays, and primitives like strings, numbers, and booleans.

```javascript
// Create an object in js
const person = {
    name: "John",
    age: 30,
    isStudent: false,
    greet: function() {
        console.log("Hello!");
    }
};
```

```javascript
console.log(person.name); // Output: "John"
console.log(person["age"]); // Output: 30
```

Adding and Modifying Properties: You can add new properties to an object or modify existing ones dynamically.

```javascript
person.country = "USA"; // Add new property
person.age = 31; // Modify existing property
```