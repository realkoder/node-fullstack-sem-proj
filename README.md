# node-fullstack-sem-proj
Node fullstack semester project containing notes, thoughts and mandatory hand-ins.


## What is node?
Node is making it possible to run javascript on local machines without a browser - which means javascript can be used for setting up backend.
<br>
Running node will launch nodes runtime environment - then javascript code can be executed.
REPL - `Read Evaluate Print Loop`. A REPL is an interactive programming environment that allows users to enter and execute individual lines or blocks of code, providing immediate feedback. 
```bash
node
```

## The use of var
Don't use `var` it wont stick to its scope - it will polute outside its scope.
```javascript
{
    var someValue = true;
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
6
6
6
6
6
```
The print is because `var` polutes the scope that's why it prints 6 - if let is used the scope for i will stick for the console log inside the arrowhead function.


## Bonus notes
`Const` is constant NOT in the value but in the assignment, meaning that is cannot be reassigned and thus also HAS to be assigned.
<br>
Javascripts functions is `first-class citizens` this mean:
Functions can be assigned to a variable, allowing you to reference and call that function using the variable name.
Functions can be passed as arguments to other functions.
Functions can be returned from other functions.
Functions can be stored in arrays, objects, or other data structures.
<br>
Javascript is hoisted (`hoisting`) - JIT (just in time compilation) reads all declarations and then execute statements.
Because of that the below code will work:
```javascript
getRandomInt();

// Classic function
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}
```

### Shortcuts
WHen inside markdown file press `ctrl + shift + v ` then the file will be displayed with formatting. Pretty nice and convenient.