const mongoose = require("mongoose");

const categorie = mongoose.model(
  "Categorie",
  new mongoose.Schema({
    name: String,
    description: String
  })
);

module.exports = categorie;