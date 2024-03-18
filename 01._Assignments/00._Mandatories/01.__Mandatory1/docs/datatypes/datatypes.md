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


<br>

---

<br>

### Bigint

<br>

---

<br>

### Boolean

<br>

---

<br>

### Undefined

<br>

---

<br>

### Null

<br>

---

<br>

### Symbol

<br>

---

<br>

### Object


```javascript
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