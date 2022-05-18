
require("dotenv").config({ path: './.env' });
const express = require('express');

//new added
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
//end here

const connectDB = require('./config/db');
const path = require("path");
var cors = require('cors');

const article = require('./routes/api/article');
const app = express();

connectDB();






app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
    res.send("API is working!");
});

app.use('/api/article', article);

const port = process.env.PORT || 5555;

// Step 1:
app.use(express.static(path.resolve(__dirname, "./frontend/build")));
// Step 2:
app.get("*", function (request, response) {
    response.sendFile(path.resolve(__dirname, "./frontend/build", "index.html"));
});

app.listen(port, () => { console.log(`Server running on port ${port}`) });
