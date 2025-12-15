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

- JSON to javascript object =JSON.parse()

- javascript object to JSON =JSON.stringify()

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
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 8000;
const dbHost = process.env.DB_HOST || "defaultHost";
console.log(`Server running on port: ${port}`);
console.log(`Database host: ${dbHost}`);
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

1. API layer
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
3. Data logic layer
   a.models
   -define the data structures and schemas
4. Database layer
   a.database
   -handle the database connection and operations

## req.params

- this is for specific resource identification,see a single user by id

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

## req.query

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
import express from "express";
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
import express from "express";
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
import express from "express";
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
```

// Route with req.body
app.post("/users", (req, res) => {
const userData = req.body;
res.send(`User Data: ${JSON.stringify(userData)}`);
});

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

## MongoDB

- Non-relational database, document-oriented database, stores data in JSON-like format called BSON (Binary JSON)
- Flexible schema, scalability, high performance, rich query language
  -Data are stored in collections (equivalent to tables in relational databases)

## Basic concepts(terminology):

- Database: A main container, where all collections are stored.
- Collection: A group of MongoDB documents, similar to a table in relational databases.
- Document: A single record in a collection, similar to a row in relational databases. It is represented in BSON format.
- Field: A key-value pair in a document, similar to a column in relational databases.
-
- CRUD operations:
- Create, Read, Update, Delete
- MongoDB provides a rich set of methods to perform

## common operations:

- Create: insertOne(), insertMany()
- Read: find(), findOne()
- Update: updateOne(), updateMany(), findOneAndUpdate()
- Delete: deleteOne(), deleteMany(), findOneAndDelete()

## More advanced operations:

- Aggregation: aggregate()
- Indexing: createIndex(), dropIndex()
- Data modeling: schema design, relationships between documents

## Tool used in MongoDB:

- Locally: MongoDB Compass (shell included)

- Cloud: MongoDB Atlas

## mongoose

- ODM (Object Data Modeling) library for MongoDB and Node.js
- Provides a higher-level abstraction for interacting with MongoDB
- Create Schema and validation
- Model creation and querying
- Middleware support
- Built-in data type casting and validation
- Relationship management between documents
- Example of defining a schema and creating a model using Mongoose:
- install mongoose:
  npm install mongoose

## Schema design:

- Collections and documents
- Embedding vs. referencing
- Indexing for performance optimization
- Data validation and constraints

## Example using Mongoose (ODM for MongoDB and Node.js):

```javascript(module)

import mongoose from "mongoose";

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// Create a model
const User = mongoose.model("User", userSchema);

// Create a new user

const newUser = new User({
  name: "John Doe",
  email: ""
  age: 30,
});

newUser.save().then(() => console.log("User saved"));

// Find users
User.find().then((users) => console.log("Users:", users));

// Update a user
User.findByIdAndUpdate(
  "userId",
  { age: 31 },
  { new: true }
).then((updatedUser) => console.log("Updated User:", updatedUser));

// Delete a user

User.findByIdAndDelete("userId").then(() =>
  console.log("User deleted")
);

```

Schema defines the structure of the documents in a collection, and the model provides an interface for interacting with the database.

Example of performing CRUD operations using Mongoose:

```javascript(module)
import mongoose from "mongoose";

 const ProductSchema = new mongoose.Schema({
   name: String,
   price: Number,
   description: String,
   inStock: Boolean,

 });

  const Product = mongoose.model("Product", ProductSchema);

// Create a new product
  const newProduct = new Product({
    name: "Sample Product",
    price: 19.99,
    description: "This is a sample product.",
    inStock: true,
  });
  newProduct.save().then(() => console.log("Product created"));

// Read products
  Product.find().then((products) => console.log("Products:", products));

// Update a product
  Product.findByIdAndUpdate(
    "productId",
    { price: 24.99 },
    { new: true }
  ).then((updatedProduct) => console.log("Updated Product:", updatedProduct));

// Delete a product
  Product.findByIdAndDelete("productId").then(() =>
    console.log("Product deleted")
  );


```

## MongoDB Query

- Basic queries:

  - show dabtases: show dbs
  - Use database: use databasename (to create new database, just use it)
  - Show collections: show collections

## Create/ ADD :

1.  insertOne()

- db.collectionName.insertOne({ field1: value1, field2: value2 })
- eg. db.users.insertOne({name:"John", age:30})

2. insertMany()

- db.collectionName.insertMany([{ field1: value1 }, { field2: value2 }])
- eg. db.users.insertMany([{name:"Alice", age:25}, {name:"Bob", age:28}])

## Read/ GET :

1. find()

- db.collectionName.find()
- eg. db.users.find()
- eg. db.users.find({age:30}) //filtering

2. findOne()

- db.collectionName.findOne({ field: value })
- eg. db.users.findOne({name:"John"})

  3.countDocuments(): to count number of documents in a collection

- db.collectionName.countDocuments()
- eg. db.users.countDocuments()

## Update:

1. updateOne()

- db.collectionName.updateOne({ filter }, { $set: { field: newValue } })
- eg. db.users.updateOne({name:"John"}, {$set:{age:31}})

2. updateMany()

- db.collectionName.updateMany({ filter }, { $set: { field: newValue } })
- eg. db.users.updateMany({age:25}, {$set:{inStock:true}})

3. findOneAndUpdate()

- db.collectionName.findOneAndUpdate({ filter }, { $set: { field: newValue } }, { returnNewDocument: true })
- eg. db.users.findOneAndUpdate({name:"Alice"}, {$set:{age:26}}, {returnNewDocument:true})

## Delete:

1. deleteOne()

- db.collectionName.deleteOne({ filter })
- eg. db.users.deleteOne({name:"Bob"})

2. deleteMany()

- db.collectionName.deleteMany({ filter })
- eg. db.users.deleteMany({age:30})
- eg. db.users.deleteMany({inStock:false})

3. findOneAndDelete()

- db.collectionName.findOneAndDelete
- db.collectionName.findOneAndDelete
  ({ filter })
- eg. db.users.findOneAndDelete({name:"Alice"})

## Aggregation:

- db.collectionName.aggregate([ { $stage1: { ... } }, { $stage2: { ... } } ])
- eg. db.orders.aggregate([ { $match: { status: "completed" } }, { $group: { _id: "$customerId", totalAmount: { $sum: "$amount" } } } ])

- Aggregation is a powerful way to perform data analysis and transformation in MongoDB.
- It allows you to process data records and return computed results.
- Common aggregation stages include:
  - $match: Filters documents based on specified criteria.
  - $group: Groups documents by a specified field and performs aggregate calculations.
  - $sort: Sorts documents based on specified fields.
  - $project: Reshapes documents by including, excluding, or adding new fields.
- Example of using aggregation to calculate total sales per product:

```javascript
db.sales.aggregate([
  { $group: { _id: "$productId", totalSales: { $sum: "$amount" } } },
  { $sort: { totalSales: -1 } },
]);
```

- In this example, we group sales records by `productId`, calculate the total sales amount for each product, and sort the results in descending order of total sales.

## comparison operators:

1. $eq:

- Equal to
  -db.collectionName.find({ field: { $eq: value } })

2. $ne:

- Not equal to
  -db.collectionName.find({ field: { $ne: value } })

3. $gt/$gte:

- Greater than/Greater than or equal to
  -db.collectionName.find({ field: { $gt: value } })
  -db.collectionName.find({ field: { $gte: value } })

4. $lt/$lte:

- Less than/Less than or equal to
  -db.collectionName.find({ field: { $lt: value } })
  -db.collectionName.find({ field: { $lte: value } })

## logical operators:

5. $and:

- Logical AND
  -db.collectionName.find({ $and: [ { field1: condition1 }, { field2: condition2 } ] })

6. $or:

- logical OR
  -db.collectionName.find({ $or: [ { field1: condition1 }, { field2: condition2 } ] })

7. $not:

- Logical NOT
  -db.collectionName.find({ field: { $not: { condition } } })

## element operators:

8. $in:

- In array
  -db.collectionName.find({ field: { $in: [value1, value2, ...] } })

9. $nin:

- Not in array
  -db.collectionName.find({ field: { $nin: [value1, value2, ...] } })

## Pagination and Sorting:

- pagination means dividing content into discrete pages, making it easier to navigate large datasets.
- It improves user experience by reducing load times and enhancing readability.

10. sorting:

- db.collectionName.find().sort({ field: 1 }) // Ascending
- db.collectionName.find().sort({ field: -1 }) // Descending

  11.limiting results:

- db.collectionName.find().limit(number)

12. skipping results:

- db.collectionName.find().skip(number)

13. combining filtering, sorting, limiting, and skipping:

- db.collectionName.find({ filter }).sort({ field: 1 }).limit(number).skip(number)
- Example:

```javascript
db.users
  .find({ age: { $gte: 18 } })
  .sort({ name: 1 })
  .limit(10)
  .skip(5);
```

- In this example, we retrieve users who are 18 years or older, sort them by name in ascending order, limit the results to 10 users, and skip the first 5 users.

## Note:

-Model name should be singular and first letter capitalized
-Collection name should be plural and all letters in lowercase
-Mongoose will automatically create collection with plural name of model
-eg. model: User => collection: users
-eg. model: Product => collection: products
-eg. model: Category => collection: categories
-If you want to specify custom collection name, you can pass it as third argument in mongoose.model() method
-eg. const User = mongoose.model("User", userSchema, "myUsersCollection")
Eg:

import mongoose,{Schema,model} from "mongoose";
const userSchema=new Schema({
name:String,
email:String,
age:Number
});
const User=model("User",userSchema); //collection name will be 'users'
export default User;

another eg:
import mongoose from "mongoose";
const productSchema=new mongoose.Schema({
name:String,
price:Number,
description:String
});
const Product=mongoose.model("Product",productSchema,"myProductsCollection"); //custom collection name
export default Product;

## Encryption:

- converting readable data to cipher text(unreadable format) to protect sensitive information.
- for example: mypassword123 => 234abc

- Decryption: converting cipher text back to readable format.

### Types of encryption:

1. Symmetric encryption:

- same key is used for encryption and decryption.

2. Asymmetric encryption:

- different keys are used for encryption and decryption (public and private keys).

- Common encryption algorithms:
  -AES (Advanced Encryption Standard)
  -RSA (Rivest-Shamir-Adleman)
  -SHA (Secure Hash Algorithm)
  -bcrypt

## Hashing:

- one-way encryption, data cannot be decrypted back to original format.
- converts readable text to cipher but not vice-versa.
- commonly used for storing passwords securely.
- ensures data integrity by generating unique hash values for data.
- Hashing of a text aways produces the same hash value for the same input.

## Salting:

- adding random data (salt) to hash value to make it more secure.
- prevents attacks like rainbow table attacks.

### Common hashing techniques:

- Hashing algorithms:
  -MD5 (Message-Digest Algorithm 5)
  -SHA-1 (Secure Hash Algorithm 1)
  -SHA-256 (Secure Hash Algorithm 256)
  -bcrypt
  -scrypt
- PBKDF2 (Password-Based Key Derivation Function 2)

- Example of using bcrypt for hashing passwords in Node.js:

```javascript
import bcrypt from "bcrypt";
const saltRounds = 10;
const plainPassword = "mypassword123";
// Hashing the password
bcrypt.hash(plainPassword, saltRounds, (err, hash) => {
  if (err) throw err;
  console.log("Hashed Password:", hash);
  // Verifying the password
  bcrypt.compare(plainPassword, hash, (err, result) => {
    if (err) throw err;
    console.log("Password Match:", result); // true
  });
});
```

## bcryptjs

- bcryptjs is a JavaScript implementation of the bcrypt hashing algorithm.
- It is used for securely hashing passwords and verifying them.
- bcryptjs is a pure JavaScript library, making it compatible with both Node.js and browser
  environments.
- To use bcryptjs, you need to install it via npm:

```bash
npm install bcryptjs
```

- Example of using bcryptjs for hashing passwords in Node.js:

```javascript
import bcrypt from "bcryptjs";
const saltRounds = 10;
const plainPassword = "mypassword123";
// Hashing the password
bcrypt.genSalt(saltRounds, (err, salt) => {
  if (err) throw err;
  bcrypt.hash(plainPassword, salt, (err, hash) => {
    if (err) throw err;
    console.log("Hashed Password:", hash);
    // Verifying the password
    bcrypt.compare(plainPassword, hash, (err, result) => {
      if (err) throw err;
      console.log("Password Match:", result); // true
    });
  });
});
```

- bcryptjs provides similar functionality to the original bcrypt library, including:
  - Hashing passwords with a specified number of salt rounds.
  - Verifying passwords against hashed values.
- It is widely used in web applications for secure password storage and authentication.

example of using bcryptjs with async/await syntax:

```javascript
import bcrypt from "bcryptjs";
const saltRounds = 10;
const plainPassword = "mypassword123";

async function hashAndVerifyPassword() {
  try {
    // Hashing the password
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(plainPassword, salt);
    console.log("Hashed Password:", hash);
    // Verifying the password
    const result = await bcrypt.compare(plainPassword, hash);
    console.log("Password Match:", result); // true
  } catch (err) {
    console.error(err);
  }
}
hashAndVerifyPassword();
```

- In this example, we use async/await syntax to hash and verify the password using bcryptjs.
- bcryptjs provides similar functionality to the original bcrypt library, including:
  - Hashing passwords with a specified number of salt rounds.
  - Verifying passwords against hashed values.
- It is widely used in web applications for secure password storage and authentication.

## Authentication and Authorization

- Authentication is the process of verifying the identity of a user or system.
  -Authentication : who you are? logged in user

- Authorization is the process of granting or denying access to resources based on the authenticated user's permissions.
- Authorization: what you can access? what logged in user can do? User roles and permissions:

- Common authentication methods:
  -Username and password
  -OAuth (Open Authorization)
  -JWT (JSON Web Tokens)
  -Multi-factor authentication (MFA)

## JWT (JSON Web Tokens)

-Self verified token
-Used for auth and authorization

- tempered proof(if data is changed,signature will not match)
- JWT is a compact, URL-safe means of representing claims to be transferred between two parties.
- It is commonly used for authentication and authorization in web applications.

## JWT Structure

- Header: contains metadata about the token, such as the signing algorithm used.

- Payload: contains the data being transmitted, such as user information and permissions.

- Signature: used to verify the integrity of the token and ensure it has not been tampered with.

-Install jsonwebtoken library:
npm install jsonwebtoken

- In this example, we create a JWT with a payload containing the user ID and role, sign it with a secret key, and set an expiration time of 1 hour.
- We then verify the token using the same secret key and decode the payload if the token is valid.

## How to genreate secret key?

- You can generate a secret key using various methods, such as:
  -Using online tools like [randomkeygen.com](https://randomkeygen.com/)
  -Using command line tools like OpenSSL:
  -openssl rand -base64 32
  -Using Node.js crypto module:
  -In terminal, run the following command to generate a random secret ke

```javascript
import crypto from "crypto";
const secretKey = crypto.randomBytes(32).toString("hex");
console.log("Generated Secret Key:", secretKey);
```

- Best practices for managing secret keys:

- It is important to keep the secret key secure and not expose it in your code or version control.
- The secret key should be long, random, and unique to ensure the security of your JWTs.
- The secret key is used to sign and verify JWTs, so it should be kept confidential and not shared with unauthorized parties.
- The secret key should be stored securely, such as in environment variables or a secure vault.
- Example of storing the secret key in an environment variable:

```bash
export JWT_SECRET_KEY="your_secret_key"
```

```javascript
import jwt from "jsonwebtoken";
const secretKey = process.env.JWT_SECRET_KEY;
// Creating and verifying JWTs using the secret key from environment variable
```

- By following these practices, you can ensure the security and integrity of your JWTs in your web applications.

- jwt.sign(): to create a JWT
- jwt.verify(): to verify a JWT
- jwt.decode(): to decode a JWT without verifying its signature
  -JSON.stringify(): to convert a JavaScript object to a JSON string
  -JSON.parse(): to convert a JSON string to a JavaScript object s
- Example:

```javascript
import jwt from "jsonwebtoken";
const secretKey = "your secret key";

// Creating a JWT
const user = { id: 1, role: "admin" };

console.log("Generated Token:", token);

// Verifying a JWT
jwt.verify(token, secretKey, (err, decoded) => {
  if (err) {
    console.error("Invalid token:", err);
  } else {
    console.log("Decoded payload:", decoded);
  }
});
```

## Storing JWT securely

- after generating JWT, it is important to store it securely on the client side.

- Store JWTs securely to prevent unauthorized access and ensure the integrity of your authentication system.
- 3 storage options:

  1. HttpOnly Cookies:

  - Store JWTs in HttpOnly cookies to prevent access from client-side scripts.
  - Set the HttpOnly flag when creating the cookie to enhance security.
  - size:4KB
  - Storage: Server and Browser
  - Expiry: cookie expiry time can be set
    example:

  ```javascript
  res.cookie("token", jwtToken, {
    httpOnly: true,
    secure: true, // use true in production with HTTPS
    maxAge: 3600000, // 1 hour
  });
  ```

  2. Local Storage:

  - Store JWTs in local storage for easy access on the client side.
  - Be cautious of XSS attacks, as local storage is ac cessible via JavaScript.
  - size:5MB
  - Storage: Browser only
  - Expiry: until manually cleared, not automatically expired
  - example:

  ```javascript
  localStorage.setItem("token", jwtToken);
  const token = localStorage.getItem("token");
  ```

  3. Session Storage:

  - Store JWTs in session storage for temporary storage during a browser session.
  - Data is cleared when the browser tab is closed, providing some security benefits.
  - size:5MB
  - Storage: Browser only
  - Expiry: until the tab is closed
    example:

  ```javascript
  sessionStorage.setItem("token", jwtToken);
  const token = sessionStorage.getItem("token");
  ```

## Auth process flow with JWT

1.User Login/Registration: successfully login or registration, server generates a JWT containing user information and permissions.

2. Generate Token: server creates a JWT using a secret key and sends it back to the client.

3. Store Token: client stores the JWT securely (HttpOnly cookies, local storage, or session storage).

4. Include Token in Requests(append or use toke in every request to handle auth): client includes the JWT in the Authorization header of subsequent requests to protected routes.

5. Verify Token and authenticate/authorize user: server verifies the JWT using the secret key to ensure its validity and integrity.

## Middleware

- Function that lies between the request and response cycle in a web application.
- Function that has access of both request and response objects.

-Browser -------- Request --------> Server
-middleware -------- Request --------> Server

- middleware -------- Response --------> Server
- middleware -------- Response --------> Browser
- Server -------- Response --------> Browser

- It has additional functiality to go to next( ) middleware function in the stack.

- It can modify the request or response objects, end the request-response cycle, or call the next middleware function in the stack.
- Middleware functions are used to handle tasks such as authentication, logging, error handling, and request parsing.
- Middleware functions can be defined globally for all routes or specific to certain routes.

### Usage of Middleware

- Middleware functions are used to perform tasks such as:
  -Logging
  -Authentication and authorization
  -Error handling , validation
  -Request parsing (e.g., parsing JSON or URL-encoded data)
  -Request adn response modification

- Example of a simple middleware function in Express.js:

```javascript
import express from "express";
const app = express();
// Simple middleware function

app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
  // Perform some operations here, such as logging or authentication

  next(); // Call the next middleware function in the stack
});

// Route handler
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

## Application Middleware

- Application middleware is a type of middleware that is applied to all routes in an Express.js application.

- It is defined using the `app.use()` method and can be used for tasks such as logging, authentication, and request parsing.
- Example of application middleware in Express.js:

```javascript
import express from "express";
const app = express();
// Application middleware for logging requests
app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
  next(); // Call the next middleware function in the stack
});

// Route handler
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

- In this example, the application middleware logs the request method and URL for every incoming request before passing control to the next middleware or route handler.

## Router middleware

- Router middleware is a type of middleware that is applied to specific routes or groups of routes in an Express.js application.
- It is defined using the `router.use()` method and can be used for tasks such as authentication, validation, and error handling for specific routes.
- Example of router middleware in Express.js:

```javascript
import express from "express";
const app = express();
const router = express.Router();

// Router middleware for logging requests
router.use((req, res, next) => {
  console.log(
    `Router Middleware - Request Method: ${req.method}, Request URL: ${req.url}`
  );
  next(); // Call the next middleware function in the stack
});
// Route handler for the router
router.get("/", (req, res) => {
  res.send("Hello from the router!");
});
// Use the router in the application
app.use("/api", router); // All routes in the router will be prefixed with /
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

- In this example, the router middleware logs the request method and URL for every incoming request to the `/api` route before passing control to the next middleware or route handler defined in the router.

## Authorization Middleware Role-Based Access Control (RBAC)

- Authorization middleware is used to restrict access to certain routes based on user roles and permissions.
- Role-Based Access Control (RBAC) is a common approach to authorization where users are assigned roles, and each role has specific permissions.

1. USER ROLES:
   purchasing products, view products, add to cart, place orders ,product create
2. MERCHANT ROLES:
   managing products, view orders, update order status, delete products
3. ADMIN ROLES:
   managing users, managing merchants, view reports, system settings,product ,orders management

- Example of authorization middleware using RBAC in Express.js:

```javascript
import express from "express";
const app = express();

// Sample user data with roles
const users = {
  1: { id: 1, name: "Alice", role: "user" },
  2: { id: 2, name: "Bob", role: "merchant" },
  3: { id: 3, name: "Charlie", role: "admin" },
};
// Authorization middleware
const roleBasedAuth = (role) => {
  return (req, res, next) => {
    if (req.user && req.user.role === role) {
      next(); // User has the required role, proceed to the next middleware or route handler
    } else {
      res.status(403).json({ message: "Forbidden: Access is denied." });
    }
  };
};
```

- Example of defining user roles in a separate file:
  constant.js

```javascript
export const USER_ROLES = {
  USER: "user",
  MERCHANT: "merchant",
  ADMIN: "admin",
};
```

- In this example, the `roleBasedAuth` middleware checks if the authenticated user has the required role to access the route.
- If the user has the required role, the middleware calls `next()` to pass control to the next middleware or route handler.
- If the user does not have the required role, the middleware responds with a 403 Forbidden status.
- Example of using the authorization middleware in routes:

```javascript
import roleBasedAuth from "./roleBasedAuth.js";
import { USER_ROLES } from "./constants.js";

// Route accessible only to users with the "user" role
app.get("/user/profile", roleBasedAuth(USER_ROLES.USER), (req, res) => {
  res.send("User Profile");
});
```

## Validation Middleware(data validation)

- Check/Verify whether the input data is valid or not before processing it further.
- for. eg. name(string), age(number), email(valid email format),isAcqtive(boolean)

- Validation -> API (most important), frontend, database(optoinal)

### zod :

- Zod is a TypeScript-first schema declaration and validation library.
- It allows you to define schemas for your data and validate them at runtime.
- To use Zod, you need to install it via npm:

```bash
npm install zod
```

- Example of using Zod for data validation in an Express.js application

libaray:
User.js

```javascript
import express from "express";
import { z } from "zod";
const app = express();
app.use(express.json());
// Define a Zod schema for user data
const userSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Invalid email format"),
  age: z.number().min(0, "Age must be a positive number"),
});
```

## NodeJs Code Semantics

- Always formate your code(Use prettier code formatter)
- Use proper spacing and line spacing
- Always use camelCase name your files, function, variables and folders in Js (eg. helloWorld)
- File, vaiable, names must be noun (eg. fetecher)
- Function and methods must be verb
- Also check singular & pulral case, e.g(getUserById, getUsers)
- Avoid using number while naming variable, file ,function, folder( test x, testOne )
- Add a line above "return" statement
- If you have list of codes, arrange in Asc orders " ctrl + shift + s"
- sendEmail(recipent, sender,), /createStudents

## filtering: :

const getProductsFromDB = async (query) => {
// const products = await Product.find();

console.log(query);

//filtering
/\*

query: {
category: 'jjk',
brand:'dajkk'
name:"njjh"
}
const name = query.name;
const category = query.category;
const brand = query.brand;

// const products = await Product.find({ category, brand, name });

filter:{
category,
name: { $regex: name, $optinon: "i" };
}

or
\*/

//destructing of objects

const { category, brand, name, min, max } = query;
const sort = query.sort ? JSON.parse(query.sort) : {}; //"{name:1}-> {name:1}" //sorting(if there is query.sort exit then parse if not send empty object)

const filters = {};

console.log(brand.split(","));

if (category) filters.category = category; //Exact match
if (brand) filters.brand = { $in: brand.split(",") }; // match data from list of items or array
if (name) filters.name = { $regex: name, $optinon: "i" }; // Ilike match(case insensetive match)
if (min) filters.price = { $gte: min };
if (max) filters.price = { ...filters.price, $lts: max };

console.log(filters);

const products = await Product.find({ filters }).sort(sort)
.limit(limit)
.skip(1); //offset means that skip

return products;
};

## file system:

// const products = fs.readFileSync("data/product.json", "utf-8");

/\*
const getProductsFromDB = (query) => {
const brand = query.brand ?? "";

const data = JSON.parse(products);

return data.filter((item) => (brand ? item.brand == brand : true));
};
\*/

/\*
const getProductsById = (id) => {
const data = JSON.parse(products);

return data.find((item) => item.id == id);
};
\*/

/\*
const createProduct = (data) => {
const prodctItems = JSON.parse(products);

prodctItems.push(data);

fs.writeFileSync("data/products.json", JSON.stringify(prodctItems));
};
\*/
