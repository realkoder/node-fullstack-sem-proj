# Objects

Objects in `JavaScript` and `Node.js` are fundamental data structures that allow you to store collections of key-value pairs. 
They are versatile and can represent various entities, from simple data structures to complex entities with behaviors and methods.

Here are some key concepts about objects in `JavaScript` and Node.js:

Key-Value Pairs: Objects consist of key-value pairs, where each key is a unique string (or symbol in ES6+) and each value can be of any data type, including other objects, functions, arrays, and primitives like strings, numbers, and booleans.

### Destructuring objects
When an object is destructured some of the keys are taken and put into a newly created object.

### Spread operator
`{...obj, company: "McDonalds"}` this takes all the key values from `obj` and also create a new key/value which is company.

<br>

---

<br>

## Built-in Objects
Built-in objects in `JavaScript` are predefined objects that are part of the `JavaScript` language itself. These objects provide essential functionalities and utilities for working with data, manipulating the DOM - `Document Object Model`, handling asynchronous operations, and more. Built-in objects are available globally and can be used directly in your `JavaScript` code without needing to import or include external libraries.

### Date
The built-in object `Date` provides methods for creating, manipulating and formatting dates and times. Dates can either be instantiated using `UTC`, `Unix Epoch` or `Local time` format. `Go to right side code example`.
It makes it easier to work with dates in various formats, including `UTC` (Coordinated Universal Time), `Unix Epoch` (milliseconds since January 1, 1970), and `local time` (based on the user's system settings).

### Array
An array is also a `built-in object` for `JavaScript`, arrays is used as an container to store multiple values in a single variable. This allows for more convenient organization and manipulation of data. In `JavaScript` arrays are dynamic, meaning they can grow or shrink in size as needed, and they can hold values of any data type, including numbers, strings, objects, and even other arrays.
Arrays do have the following methods: `push(), pop(), shift(), unshift(), slice(), splice(), forEach(), map(), filter(), reduce()`.
These methods makes it more effecient to add, remove, insert and iterate over the elements in the given array.
When working with arrays and the need for iterating the elements it's important to be cautious so `side-effects` will be avoided.
Some array methods, such as `forEach(), map(), and filter()`, takes a callback function as an argument and execute that function for each element in the array. Be cautious when using these methods with functions that have side effects (i.e., functions that modify variables outside their scope), as it can lead to unexpected behavior and bugs. Always use the map() function for operations if the array will be modified so the original array won't be modified and avoid side effects when possible.


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

```javascript
// Adding and modifying properties dynamically
person.country = "USA"; // Add new property
person.age = 31; // Modify existing property
```

```javascript
// ========================== DATE ==========================
// Different ways of instantiating Date through different constructors

const currentDate = new Date(); // Current date and time -> UTC

const specificDate = new Date('2022-03-15'); // Specific date and time

const unixEpochCurrentDate = Date.now()); // Unix Epoch Time (Seconds since 1970 Jan. 1st -> that was the year unix was invented)

const millisecondsSinceEpoch = new Date(1630486800000); // Milliseconds since epoch

const yearMonthDay = new Date(2022, 2, 15); // Year, month (0-11), day

const localeCurrentDate = Date() // Local time (in my case CEST GMT+0100)
```

```javascript
// ========================== ARRAYS ==========================
// Creating arrays
const numbers = [1, 2, 3, 4, 5]; // Array literal
const fruits = new Array('apple', 'banana', 'orange'); // Array constructor

```