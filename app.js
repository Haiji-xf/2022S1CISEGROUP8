/*
 * @Author: Tai Zhang
 */
const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello this is CISE Group 8!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));