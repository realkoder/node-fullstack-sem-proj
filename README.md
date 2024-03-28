# node-fullstack-sem-proj
Node fullstack semester project containing notes, thoughts and mandatory hand-ins.

<br>

---

<br>

## What is node?
Node is making it possible to run javascript on local machines without a browser - which means javascript can be used for setting up backend.
<br>
Running node will launch nodes runtime environment - then javascript code can be executed.
REPL - `Read Evaluate Print Loop`. A REPL is an interactive programming environment that allows users to enter and execute individual lines or blocks of code, providing immediate feedback. 
```bash
node
```

<br>

---

<br>

## HTML rendering
Html view is rendered procedural an example that can give some errors where the html tag is null - the js file will run before the html tag is created.
```html
<script src="/assets/js/footer.js"></script>
<footer>
    <p id="copyright-year"></p>
 </footer>    
```

<br>

---

<br>

## The use of var
Don't use `var` it wont stick to its scope - it will polute outside its scope.
```javascript
{
    {
        var someValue = false;
    }
    console.log(somevalue);
}
```
This will console log false because var polutes the scopes.

```javascript
for (var i = 0; i <= 5; i++) {
    setTimeout(() => {
        console.log(i);
    })
}
```

```bash
6
        var someValue = true;
6
6
6
6
6
```
The print is because `var` polutes the scope that's why it prints 6 - if let is used the scope for i will stick for the console log inside the arrowhead function.

<br>

---

<br>

## Bonus notes
`Const` is constant NOT in the value but in the assignment, meaning that is cannot be reassigned and thus also HAS to be assigned.
<br>
* Javascripts functions is `first-class citizens` this mean:
* Functions can be assigned to a variable, allowing you to reference and call that function using the variable name.
* Functions can be passed as arguments to other functions.
* Functions can be returned from other functions.
* Functions can be stored in arrays, objects, or other data structures.

<br>

Javascript is hoisted (`hoisting`) - JIT (just in time compilation) reads all declarations and then execute statements.
Because of that the below code will work:
```javascript
getRandomInt();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}
```


## CLI COMMANDS
Get PID for port 8080
```bash
lsof -i :8080
```

The npx standard command is used to run the standard package, which is a JavaScript style linter.
Checking Code Style: The standard package is a JavaScript linter that enforces consistent coding style and catches stylistic errors in your code.
```bash
npx standard
```

<br>

---

<br>

## Date With Javascript
DATES:
```javascript
// UTC
console.log(new Date());

// Unix Epoch Time (Seconds since 1970 Jan. 1st -> the date is because that year unix was invented)
console.log(Date.now());

// Local time (in my case right now and here CEST GMT+0100)
console.log(Date());
```

<br>

---

<br>

## Nullish coalesce operator

```javascript
// Nullish coalesce operator ?? ||
const value = undefined;

console.log(value ?? "some other value");
console.log(value || "some other value"); // type coerces ... takes falsy values and coerce
```

<br>

---

<br>

## Environment Variables for Nodejs
The `process` is only available within in `Nodejs` it's not a `JavaScript`thing.
It's important that the environment var is parsed before nodemon app.js is executed otherwise the environment var isn't valid.
```bash
# Execute app with nodemon and set the env PORT
PORT=9090 nodemon app.js
```

```javascript
// Get env var called PORT
process.env.PORT
```

TO fix the problem where env var is instantiated differently for mac and windows - use cross-env to fix this issue https://www.npmjs.com/package/cross-env

<br>

---

<br>

### LINKS
`ESLINT: tool for making code more consistent and avoiding bugs - CLEAN CODE` -> https://eslint.org/docs/latest/use/getting-started

`CROSS-ENV: Fix issue with setting env var in script for mac / windows cross-env` -> https://www.npmjs.com/package/cross-env


`MAIL: Sending mails with NODEMAILER` -> https://www.nodemailer.com


`PM2: Production process manager PM2 - if application crash it will reinstatiate with PM2` -> https://www.npmjs.com/package/pm2


---

<br>

### Shortcuts
WHen inside markdown file press `ctrl + shift + v ` then the file will be displayed with formatting. Pretty nice and convenient.

<br>

---

<br>


## MISCH / IMAGES

![Menu Icons](/images/menu_icons.png)