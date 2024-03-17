# Miscellaneous

## What is node.js


## REPL


## Express
Express is a web application framework for node.js

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