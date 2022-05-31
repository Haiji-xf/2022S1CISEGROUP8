/*
 * @Author: Tai Zhang
 */
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



router.get('/', (req, res) => {
  Article.find()
    .then(Article => res.json(Article))
    .catch(err => res.status(404).json({ noarticlefound: 'No Articles are Found' }));

});

router.put('/:id', (req, res) => {
  Article.findByIdAndUpdate(req.params.id, req.body)
    .then(Article => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

module.exports = router;