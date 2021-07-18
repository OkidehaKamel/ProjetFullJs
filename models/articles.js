const mongoose = require("mongoose");

const Articles = mongoose.model(
  "Articles",
  new mongoose.Schema({
    title: String,
    author: String,
    text: String,
    categoryid: String,
    version:[],
    slug:String  
  })
);

module.exports = Articles;