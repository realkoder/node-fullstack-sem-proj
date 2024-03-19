# Libraries And Tools

## NPM
`Node Package Manager` is a package manager for `JavaScript` and `Node.js` to handle dependencies, installing packages and sharing reusable code.
The `package.json` file is where the dependencies are defined for the given project as either direct dependencies or developer dependencies.
`npm` provides commands for installing packages locally or globally. Local installation installs packages within the project directory, while global installation makes packages available system-wide for command-line tools and utilities.
Developers do also have the ability to publish packages with `npm` so others can use them for their projects.
This package manager does also handle version control to ensure compatibility and maintain stability. Developers can specify exact versions, version ranges, or use wildcards to manage package versions which have to be defined in `package.json`.
`npm` provides a scripting feature that allows developers to define custom scripts in the `package.json` file. These scripts can be used to automate common tasks such as building, testing, and deploying projects. `"scripts": {"build:css": "postcss public/assets/css/tailwind.css -o public/assets/css/styles.css", "dev": "concurrently \"nodemon app.js\" \"npm run build:css\"", "start": "node app.js" },` this is used to execute the postcss and also nodemon cli command when `npm run dev` is executed.

<br>

---

<br>

## Express
Express is a minimal and flexible web application framework for `node.js` making it easier to establish a robust and scalable application or API.
The Express framework makes it intuitive and simple to define routes handling HTTP requests. Routes are defined using HTTP methods: `GET, POST, PUT, PATCH, DELETE` and URL patterns, they can be used to perfom various tasks, such as rendering HTML pages, processing form data, or serving static files.
To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express: `app.use(express.static("public"));`

Express is making heay use on middleware functions, which allow developers to write modular and reusable code, that can be executed sequentially in Middleware functions. Those functions will have access to use request and response objects from a given route and can perform tasks such as logging, authentication, error handling, and more.

Overall, Express is a powerful and flexible framework for building web applications and APIs `with Node.js`. Its simplicity, versatility, and extensive features make it an ideal choice for developers looking to develop web applications quickly and efficiently.

<br>

---

<br>

## Faker
Faker is a `JavaScipt` library that makes it very easy to get faked generated data for various purposes, such as testing, prototyping and working with a database. The generated data is realistic-looking and covers various elements such as names and bios for persons, address etc.
Installing `Faker` is easy through the use of `npm` where it's just running cli command `npm i faker`.

<br>

---

<br>

## Nodemon
Nodemon is a developer tool which makes it more convenient for developers to write their code and test it. Nodemon monitors changes in `Node.js` application files and restarts the server when changes have been detected. It eliminates the need to manually stop and restart the server every time you make changes to your code.
Nodemon provides various options and configurations that allow you to customize its behavior according to your project's requirements. You can specify which files to monitor, ignore certain files or directories, and define additional settings such as delay before restarting, verbose logging, and more - all that have to be defined in `nodemon.json` file.

```bash
# ========================== NPM ==========================
# Create an npm project
# Creates node_modules folder containing packages and dependencies for given project
# Creates the package.json file
npm init

# Installing a package
npm install <package>

# To uninstall package
npm uninstall <package>

# To update a package
npm update <package>

# To run a script defined in package.json
npm run <script>
```


```javascript
// ========================== EXPRESS ==========================
// Importing express
import express from "express";

// Instantiating express
const app = express();

// Allowing the server to serve static files
app.use(express.static("public"));

// PORT defining
const PORT = 3000

// Defining the root route
app.get('/', (req, res) => {
  res.send('Hello World!')
});

// Defining a route with the use of request parameter: userId
app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId;
  res.send(`User ID: ${userId}`);
});

// GET /search route with the use of query string parameters
app.get('/search', (req, res) => {
  // Extract query string parameters
  const searchTerm = req.query.q;
  const category = req.query.category;

  // Respond with search results
  res.send(`Search Results - Term: ${searchTerm}, Category: ${category}`);
});

// Start the express server and listen for incoming port request
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
```

```javascript
// ========================== FAKER ==========================
// Importing faker
import { fakerEN_IN } from "@faker-js/faker"

// Creating person object which uses imported faker 
// to set person fullName, bio and city mocked data
const person = {
    fullName: fakerEN_IN.person.fullName(),
    bio: fakerEN_IN.person.bio(),        
    city: fakerEN_IN.location.city()
}
```

```bash
# ========================== NODEMON ==========================
# Start nodemon and the file provided will be executed for every restart
nodemon app.js
```