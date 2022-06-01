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

//Route used to get all articles from database
router.get('/', (req, res) => {
  Article.find()
    .then(Article => res.json(Article))
    .catch(err => res.status(404).json({ noarticlefound: 'No Articles are Found' }));
});

//Route used to update articles
router.put("/:id", async (req, res, next) =>{

  var dataUpdate = req.body;
  var idUpdate = {_id : req.params.id};
  var newData= { $set: dataUpdate };
  //Updateone function will update the article based on id and new data.
  Article.updateOne(idUpdate, newData, (err, res) =>{
    if(err)
      console.log("Something Wrong");
    else{
      console.log("Successfully update");
    }


  });
});

//Route used to delete an article
router.delete("/:id", async (req, res)=>{
  //findOneAndRemove function will find the articles based on an attribute and delete it
  Article.findOneAndRemove({_id: req.params.id}, (err)=>{
    if (err){
      console.warn("failed to delete " + req.params.id);
    }
    else{
      res.sendStatus(200);
      console.warn("successful");
    }
  }
);})

module.exports = router;