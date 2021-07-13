const mongoose = require("mongoose");
const { Article } = require("./DonneeBDD/indexAintegrer");

const Articles = mongoose.model(
  "Articles",
  new mongoose.Schema({
    titre: String,
    auteur: String,
    Texte: String,
    images: [],
    categorie: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categorie"
      }
    ],
  })
);

module.exports = Articles;