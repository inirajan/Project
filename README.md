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
