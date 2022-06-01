/*
 * @Author: Tai Zhang
 */
require("dotenv").config({ path: './.env' });
const express = require('express');
const bodyParser = require("body-parser");
const connectDB = require('./config/db');
const path = require("path");
var cors = require('cors');

const article = require('./routes/api/article');
const app = express();

connectDB();

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));

// app.get('/', (req, res) => {
//     res.send("API is working!");
// });

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "build"));
});

app.use('/api/article', article);

const port = process.env.PORT || 5555;


// Step 1: will import the client build folder to the server.
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2: will ensure that the routes defined with React Router are working once the application has been deployed. 
//It handles any requests by redirecting them to app.js
app.get("*", function (request, response) {
    response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.listen(port, () => console.log(`Server running on port ${port}`));

app.get('/', (req, res) => {
    res.send("API is working");
});

