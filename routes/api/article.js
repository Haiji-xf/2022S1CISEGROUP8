// routes/api/article.js
const express = require('express');
const router = express.Router();

//Load article model
const Article = require('../../model/article');

//Test api
router.get('/test', (req, res) => res.send('book route testing!'));

// @route GET api/books
// @description add/save book
// @access Public
router.post('/', (req, res) => {
    Article.create(req.body)
      .then(Article => res.json({ msg: 'Article added successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to add this Article' }));
  });

  module.exports = router;