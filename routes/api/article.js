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



router.put("/:id", async (req, res, next) =>{
  console.log(req.body.id);
  console.log(req.params.id);
  var dataUpdate = req.body;
  var idUpdate = {_id : req.params.id};
  var newData= { $set: dataUpdate };
  Article.updateOne(idUpdate, newData, (err, res) =>{
    if(err)
      console.log("Something Wrong");
    else
      console.log("Successfully update");

  });
});

router.put('/:id', (req, res) => {
  Article.findByIdAndUpdate(req.params.id, req.body)
    .then(Article => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

module.exports = router;