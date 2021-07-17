const mongoose = require("mongoose");
// const { Article } = require("./DonneeBDD/indexAintegrer");

const Articles = mongoose.model(
  "Articles",
  new mongoose.Schema({
    title: String,
    author: String,
    text: String,
    categoryid: String,
    prev:[],
    // categorie: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Categorie"
    //   }
    // ],
    slug:String  
  })
);

module.exports = Articles;