## Express js

- It is a NodeJs API/backend framework, used to build API(Application Programming Interface).
  -It simplifies the HTTP modules of NodeJs.
  -Minialist, unopinionated framework.
  -REST API development.
- Fast and lightweight.

- Features:
  -Routing  
  -Middleware
  -Template engines
  -Error handling
  -Static files serving

-mern -mean -mevn

## API

- API stands for Application Programming Interface.
- It is a set of rules that allows different software entities to communicate with each other.

- In web development, APIs are used to enable communication between a client (like a web browser or mobile app) and a server.
- APIs define the methods and data formats that applications can use to request and exchange information.
- REST API is an architectural style for designing networked applications. It relies on a stateless
  -API foramat: JSON (JavaScript Object Notation), XML (eXtensible Markup Language)

- REST(Representational State Transfer) uses standard HTTP methods like GET, POST, PUT, DELETE to perform operations on resources.

- RESTful APIs are designed to be simple, scalable, and easy to maintain.

- Example:
  -GET /users - Retrieve a list of users
  -POST /users - Create a new user
  -GET /users/:id - Retrieve a specific user by ID
  -PUT /users/:id - Update a specific user by ID
  -DELETE /users/:id - Delete a specific user by ID

-

## JSON

- JSON stands for JavaScript Object Notation.
- It is a lightweight data interchange format that is easy for humans to read and write, and
  easy for machines to parse and generate.
- JSON is often used to transmit data between a server and a web application as an alternative to XML.
- JSON syntax is derived from JavaScript object notation, but it is language-independent, meaning it can be used with many programming languages.
- Example of JSON:

```json
{
  "name": "John Doe",
  "age": 30,
  "isStudent": false,
  "courses": ["Math", "Science", "History"],
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "state": "CA"
  }
}
```

- In this example, we have a JSON object that represents a person with properties like name, age, isStudent, courses (an array), and address (a nested object).
- JSON supports the following data types:
  -String
  -Number
  -Boolean
  -Array
  -Object
  -null
- JSON is widely used in web development for data exchange between clients and servers, as well as for configuration files and data storage.
  -JSON => javascript object:JSON.parse()
  -javascript object => JSON: JSON.stringify()
- Example:

```javascript
const jsonString = '{"name": "John", "age": 30}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name); // Output: John
const newJsonString = JSON.stringify(jsonObject);
console.log(newJsonString); // Output: '
// {"name":"John","age":30}'
```

## Environment Variables

- Environment variables are dynamic values that can affect the way running processes behave on a computer.
- They are often used to store configuration settings and sensitive information, such as API keys, database connection strings, and application settings.
- In web development, environment variables are commonly used to manage different configurations for development, testing, and production environments.
- In Node.js applications, environment variables can be accessed using `process.env` object.
- Example of setting and accessing environment variables:

```bash
# Setting environment variables in a Unix-based system
export PORT=3000
export DB_HOST=localhost
```

```javascript
// Accessing environment variables in a Node.js application
const port = process.env.PORT || 8000;
const dbHost = process.env.DB_HOST || "defaultHost";
console.log(`Server running on port: ${port}`);
console.log(`Database host: ${dbHost}`);
```

- To manage environment variables in a more organized way, developers often use packages like `dotenv` to load variables from a `.env` file into `process.env`.
- Example of using `dotenv` package:

```bash
# Install dotenv package
npm install dotenv
```

```javascript
// Load environment variables from .env file
require("dotenv").config();
const port = process.env.PORT || 8000;
console.log(`Server running on port: ${port}`);
```

- Using environment variables helps keep sensitive information secure and allows for easy configuration changes without modifying the application code directly.
- Remember to add `.env` file to `.gitignore` to prevent it from being committed to version control.
- Example of .env file:

```

```

## Layered Architecture

- Layered architecture is a software design pattern that organizes the components of an application into distinct layers
- Each layer has a specific responsibility and communicates with the layers directly above and below it.
- Common layers in a layered architecture include:
  -Presentation Layer (UI Layer)
  -Business Logic Layer (Service Layer)
  -Data Access Layer (Repository Layer)
  -Database Layer
- Benefits of layered architecture:
  -Separation of concerns
  -Maintainability
  -Scalability
  -Testability
- Example of layered architecture in a web application:
  -Presentation Layer: Handles user interface and user interactions (e.g., HTML, CSS, JavaScript)
  -Business Logic Layer: Contains the core functionality and business rules (e.g., services, controllers)
  -Data Access Layer: Manages data retrieval and storage (e.g., database queries, ORM)
  -Database Layer: The actual database where data is stored (e.g., MySQL, MongoDB)
- Each layer communicates only with the layer directly above or below it, promoting a clear separation of responsibilities and making the application easier to maintain and extend.env PORT=3000
  env DB_HOST=localhost

```

```

1. api layer
   a.routes
   -handle the routes and endpoints
   b.controllers
   -handle the request and response
   c.middleware
   -handle the request processing,
   -authentication, logging, error handling
2. Business layer
   a.services
   -handle the business logic and rules

3.

## req.params

-this is for specific resource identification,see a single user by id

- `req.params` is an object in Express.js that contains route parameters.
- Route parameters are named URL segments that are used to capture values specified at their position in the
  URL.
- They are defined in the route path using a colon (:) followed by the parameter name.
- Example:

````javascript
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});
``
- In this example, when a GET request is made to `/users/123`, the value `123` will be captured as the `id` parameter and can be accessed using `req.params.id`.
``
- You can define multiple route parameters in a single route:

```javascript
app.get('/users/:userId/posts/:postId', (req, res) => {
  const userId = req.params.userId;
  const postId = req.params.postId;
  res.send(`User ID: ${userId}, Post ID: ${postId}`);
});
````

- In this example, when a GET request is made to `/users/123/posts/456`, the values `123` and `456` will be captured as the `userId` and `postId` parameters, respectively.
- `req.params` is commonly used in RESTful APIs to identify specific resources based on their unique identifiers.

### req.query

-this is for filtering, sorting, pagination

- `req.query` is an object in Express.js that contains the query string parameters from the URL.
- Query string parameters are key-value pairs that are appended to the end of a URL after a question mark (?).
- Example:

```javascript
app.get("/search", (req, res) => {
  const searchTerm = req.query.q;
  res.send(`Search Term: ${searchTerm}`);
});
```

- In this example, when a GET request is made to `/search?q=express`, the value `express` will be captured as the `q` query parameter and can be accessed using `req.query.q`.
- You can have multiple query parameters in a single URL:

```javascript
app.get("/products", (req, res) => {
  const category = req.query.category;
  const priceRange = req.query.price;
  res.send(`Category: ${category}, Price Range: ${priceRange}`);
});
```

- In this example, when a GET request is made to `/products?category=electronics&price=100-500`, the values `electronics` and `100-500` will be captured as the `category` and `price` query parameters, respectively.
- `req.query` is commonly used to filter, sort, or paginate results in RESTful APIs based on user-defined criteria.

## req.body

-- IT IS USED TO SEND DATA TO THE SERVER

- `req.body` is an object in Express.js that contains the data sent by the client in the body of an HTTP request.
- It is commonly used in POST, PUT, and PATCH requests to send data to the server
- To access `req.body`, you need to use middleware that parses the incoming request body, such as `express.json()` for JSON data or `express.urlencoded()` for URL-encoded data.
- Example of using `req.body` with JSON data:

```javascript
const express = require("express");
const app = express();
app.use(express.json()); // Middleware to parse JSON body
app.post("/users", (req, res) => {
  const userData = req.body;
  res.send(`User Data: ${JSON.stringify(userData)}`);
});
```

- In this example, when a POST request is made to `/users` with a JSON body like `{"name": "John", "age": 30}`, the `userData` variable will contain the parsed object `{ name: 'John', age: 30 }`.
- Example of using `req.body` with URL-encoded data:

```javascript
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded body
app.post("/login", (req, res) => {
  const loginData = req.body;
  res.send(`Login Data: ${JSON.stringify(loginData)}`);
});
```

- In this example, when a POST request is made to `/login` with URL-encoded data like `username=johndoe&password=secret`, the `loginData` variable will contain the parsed object `{ username: 'johndoe', password: 'secret' }`.
- `req.body` is essential for handling form submissions, API requests, and any other scenario where data needs to be sent from the client to the server.
- `req.body` is commonly used in RESTful APIs to create or update resources based on the data provided by the client.
- Example of a complete Express.js application using `req.params`, `req.query`, and `req.body`:

```javascript
const express = require("express");
const app = express();
app.use(express.json()); // Middleware to parse JSON body
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded body
// Route with req.params
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});
// Route with req.query
app.get("/search", (req, res) => {
  const searchTerm = req.query.q;
  res.send(`Search Term: ${searchTerm}`);
});
// Route with req.body
app.post("/users", (req, res) => {
  const userData = req.body;
  res.send(`User Data: ${JSON.stringify(userData)}`);
});
// Start the server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

## body-parser

- Body-parser is a middleware in Express.js that is used to parse the incoming request body before handling it in your routes.
- It allows you to access the data sent by the client in `req.body`.
- Body-parser can handle different types of request bodies, such as JSON, URL-encoded data, and raw data.
- To use body-parser, you need to install it via npm:

```bash
npm install body-parser
```

- Example of using body-parser in an Express.js application:

```javascript(module)
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// Middleware to parse JSON body
app.use(bodyParser.json());
// Middleware to parse URL-encoded body

app.use(bodyParser.urlencoded({ extended: true }));
// Route to handle POST request

app.post("/users", (req, res) => {
  const userData = req.body;
  res.send(`User Data: ${JSON.stringify(userData)}`);
});
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```
