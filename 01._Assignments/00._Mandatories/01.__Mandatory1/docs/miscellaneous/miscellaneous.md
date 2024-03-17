# Miscellaneous

## What is node.js
`Node` is making it possible to run javascript on local machines without a browser - which means javascript can be used for setting up backend.
<br>
Running node will launch nodes runtime environment - then javascript code can be executed.
REPL - `Read Evaluate Print Loop`. A REPL is an interactive programming environment that allows users to enter and execute individual lines or blocks of code, providing immediate feedback. 
```bash
# Execute nodejs REPL
node
```


## Express
Express is a web application framework for node.js making it easier to establish a robust and scalable application or API.


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

## Modules
Ecmascript
Commonjs