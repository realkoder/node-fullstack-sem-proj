# Asynchronous Coding
Aynchronous code is code that doesn't execute in the order it appears in the source code.
Examples for code running asynchronous: `Browser event handlers, network calls, buffers / streams, working with files / directories, setTimeout / setInterval, databases`.
`JavaScript` has one thread - the main thread. Even though it's single-threaded it's event-driven and do support asynchronous programming, where code is executing, it can also listen for and respond to events such as user interactions (clicks, mouse movements), timer events, or asynchronous operations like network requests. Asynchronous operations allow JavaScript to perform tasks in the background without blocking the main thread.
The `event loop` is an important concept for `JavaScript` which allows to handle asynchronous operations efficiently. 
The event loop continuously checks the call stack and the event queue. When the call stack is empty, the event loop checks if there are any pending events in the event queue. If there are, it dequeues them and pushes their corresponding callback functions onto the call stack for execution. This mechanism ensures that asynchronous tasks are processed in the order they were received, while still allowing the main thread to remain responsive.

Solution 1. Callbacks
Problem: Callback hell or Pyramid of Doom -> 
arises when a program uses many levels of nested indentation to control access to a function. 
It is commonly seen when checking for null pointers or handling callbacks.

Solution 2. Promises
states:
1. pending
2. fulfilled
    - resolved
    - rejected

Solution 3. Async/Await
Syntactic sugar

<br>

---

<br>

## Promise
Promises in JavaScript are a powerful mechanism for handling asynchronous operations. They represent a placeholder for the eventual completion or failure of an asynchronous task and allows to write cleaner and more maintainable asynchronous code. Promises were introduced in `ES6 (ES2015)` and have since become a fundamental part of modern JavaScript development.
See the code examples to the right for working with Promise.

<br>

---

<br>

## Async / Await
`await` & `async` are keywords in `JavaSript` to pause the execution of asynchronous code until a promise is settled (either resolved or rejected), and to resume the execution of the code after the awaited promise is settled. It was introduced in `ES8 (ES2017)` and should be a more concise way to work with promises in `JavaScript`.

<br>

---

<br>

```javascript
// ========================== PROMISE ==========================
// Create a promisified function that is, a function that returns a promise. It should either resolve or reject after 3 seconds
function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve("Something good");
            } catch (error) {
                reject("Something bad");
            }
        }, 3000);
    });

// Promise makes it possible to in clean and concise way to nest try / catch
myPromise()
    .then(result => console.log(result))
    .catch(error => console.log(error));

// ==========> FETHCING WITH THE USE OF PROMISE
const fetchData = new Promise((resolve, reject) => {
    // Perform asynchronous operation
    setTimeout(() => {
        const data = /* some asynchronous data */;
        if (/* operation successful */) {
            resolve(data); // Resolve with data
        } else {
            reject("An error occurred"); // Reject with an error message
        }
    }, 1000);
});

fetchData.then((data) => {
    console.log(data); // Process the resolved data
}).catch((error) => {
    console.error(error); // Handle any errors that occur
});
}

fetchData.then((data) => {
    console.log(data); // Process the resolved data
}).catch((error) => {
    console.error(error); // Handle any errors that occur
});
```

```javascript
// ========================== ASYNC / AWAIT ==========================
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json(); // Await JSON parsing
        console.log(data); // Process fetched data
    } catch (error) {
        console.error(error); // Handle errors
    }
}

fetchData();
```