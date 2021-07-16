const mongoose = require("mongoose");

const categorie = 
  new mongoose.Schema({
    name: String,
    image: String,
    slug:String      
  })

  
  
// );

module.exports = mongoose.model("Categorie",categorie);