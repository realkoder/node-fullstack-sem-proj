# Asynchronous code

#### Examples for code running async:
Browser event handlers, network calls, buffers / streams, working with files / directories, setTimeout / setInterval, databases

Javascript has one thread - the main thread

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