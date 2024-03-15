// asynchronous code:

// Browser event handlers, network calls, buffers / streams, 
// working with files / directories, setTimeout / setInterval
// databases

// Javascript has one thread - the main thread

// Solution 1. Callbacks
// Problem: Callback hell or Pyramid of Doom -> 
// arises when a program uses many levels of nested indentation to control access to a function. 
// It is commonly seen when checking for null pointers or handling callbacks.

// Solution 2. Promises
// states:
// 1. pending
// 2. fulfilled
//      - resolved
//      - rejected

// Solution 3. Async/Await
// Syntactic sugar

// new Promise((resolve, reject) => {
//     resolve("Everything is OK.");
// })
//     .then(successMessage => console.log(successMessage))
//     .catch(errorMessage => console.log(errorMessage));


// Small Assignment
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
}

/*
myPromise()
    .then(result => console.log(result))
    .catch(error => console.log(error));
*/

/* 
Try to simulate the fetch function. 
Call it myFetch. 
It should return the promise json() 
so that you can call response.json() on as much as possible try to imagine how fetch works and simlate the underlying code
*/

function myFetch(URL, options = {}) {
    return new Promise((resolve, reject) => {
        resolve({
            json: () => {
                return new Promise((resolve, reject) => {
                    resolve({ data: "YIR" });
                });
            }
        });
    })
}

myFetch("http://blah.io/blah")
    .then(response => response.json())
    .then(result => console.log(result));


(async function main() {
    const myPromiseResult = await myPromise();
    console.log(myPromiseResult)
    console.log("HEj")
})();

//main();