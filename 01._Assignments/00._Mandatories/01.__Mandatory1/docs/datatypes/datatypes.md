## Types in JavaScript
`JavaScript` is a dynamic language using dynamic valuetypes - values can be assigned and reassigned and a are not directly linked to a specific value type unlike statically typed languages such as `Java`. This means `JavaScript` is a weakly typed language.

<br>

`(Have a look at first code example in right side of the view)`.

#### Types
* String    
* Number
* Bigint
* Boolean
* Undefined
* Null
* Symbol
* Object

<br>

---

<br>

### String
In `JavaScript`, a string is a sequence of characters enclosed within single quotes ' ' or double quotes " " or backtic \` \`.
Strings are one of the primitive data types in `JavaScript`, and they represent textual data.
`JavaScript` doesn't support a character datatype so instead characters are treated as strings with the lenght of 1.
Strings in `JavaScript` can be concatenated by the + operator or by template liters / string interpolation with the use of \´.
A string is immutable meaning that once it's created it can't change. Instantiated strings can used to create new strings witht the use of string manipulation methods and operations such as `substring(), slice(), replace(), toUpperCase(), toLowerCase(), etc.`.

`(See the code to the right for different string examples)`.

<br>

---

<br>

### Number
The number data type represents numeric values, including integers and floating-point numbers. If a value can't be converted to a nuber it will return `NaN` (not a number). 
It is used for most numeric computations and operations in JavaScript. Numbers can be written with or without decimals. All numbers in JavaScript, including integers, are represented as floating-point numbers according to the IEEE 754 standard. IEEE 754 standard: `Many hardware floating-point units use the IEEE 754 standard. The standard defines: arithmetic formats: sets of binary and decimal floating-point data, which consist of finite numbers (including signed zeros and subnormal numbers), infinities, and special "not a number" values (NaNs)`.

<br>

#### Coercing an argument to a number
`numbers` will be returned as-is. `Undefined` will turn into `nan`. `null` will be 0. `true` will be 1 and `false` 0.
Converting a string by parsing it as if it contains a number literal. Parsing failure results in NaN.

<br>

---

<br>

### Bigint
The bigint data type was introduced in ECMAScript 2020 (ES11) and allows for the representation of arbitrarily large integers. It is denoted by appending an n to the end of an integer literal or by calling the BigInt() constructor function.

<br>

---

<br>

### Boolean
The `boolean` primitive datatype for `JavaScript` is used to store logical values as either `true` or `false`, they are often
Usecase of boolean values are usually for conditionally operations, including ternary operators `isOdd ? "Number is odd" : "Number is even"`, if...else statements and while loops etc.

<br>

---

<br>

### Undefined
TEXT ABOUT UNDEFINED

<br>

---

<br>

### Null
TEXT ABOUT NULL
<br>

---

<br>

### Symbol

<br>

---

<br>

### Object


```javascript
// DYNAMICALLY TYPED LANGUAGE EXAMPLE
let foo = 42; // foo is now a number
foo = "bar"; // foo is now a string
foo = true; // foo is now a boolean
```

```javascript
// STRINGS
// Different ways to instantiate strings in js:
const stringWithDoubleQuote = "One approach ''''''' '''  to defining strings";
const singleQuoteString = 'This is another """"  way  """ of defining a string';
const name = "Brendan Eich";
const backtickString = `And this is another way """" '''' ${name} to define a
multi line string
and also a new line here xD
`;
```

```javascript
// NUMBER
let integerNumber = 10; // Integer
let floatingPointNumber = 3.14; // Floating-point number

// Using the scientific (exponent) notation for extra small og large number
let x = 123e5;    // 12300000
let y = 123e-5;   // 0.00123

// Coercing numbers
let num = 12; // set num = 12
num = undefined; // set num = NaN
num = null; // set num = 0
num = true; // set num = 1
num = false; // set num = 0
num = "12"; // set num = 12
num = "hello world"; // set num = NaN
```

```javascript
// BIGINT
let bigIntNumber = 1234567890123456789012345678901234567890n;
let bigIntFromInteger = BigInt(1234567890);
```

```javascript
// BOOLEAN
let isCoding = true;

// Toogle a boolean
isCoding = !isCoding;

// Showcasing logical operations such as AND (&&), OR (||), and NOT (!)
// These operations evaluate expressions and return boolean values based on the truthiness of the operands.
let a = true;
let b = false;

console.log(a && b); // Output: false (AND)
console.log(a || b); // Output: true (OR)
console.log(!a);     // Output: false (NOT)

// Thruthy and falsy values
console.log(Boolean(0));        // Output: false
console.log(Boolean(''));       // Output: false
console.log(Boolean(null));     // Output: false
console.log(Boolean(undefined));// Output: false
console.log(Boolean(NaN));      // Output: false
console.log(Boolean(1));        // Output: true
console.log(Boolean('hello'));  // Output: true

```

```javascript
// UNDEFINED

```

```javascript
// NULL

```

```javascript
// BIGINT

```

```javascript
// SYMBOL

```


```javascript
// OBJECT

```