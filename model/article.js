/*
 * @Author: Tai Zhang
 */
const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  source: {
    type: String
  },
  year: {
    type: String
  },
  doi: {
    type: String,
  },
  practice: {
    type: String,
  },
  claimed: {
    type: String,
  },
  evidence: {
    type: String,
  },
  moderated: {
    type: Boolean,
  },
  analyzed: {
    type: Boolean,
  },
  practice: {
    type: String,
  }
});

module.exports = Article = mongoose.model('article', ArticleSchema);
