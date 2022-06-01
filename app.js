
/*
 * @Author: Tai Zhang
 */
require("dotenv").config({ path: './.env' });
const express = require('express');

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

app.listen(port, () => console.log(`Server running on port ${port}`));

app.get('/', (req, res) => {
    res.send("API is working");
});