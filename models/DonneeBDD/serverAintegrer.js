const mongoose = require("mongoose");

const db = require("./models");

const createArticle = function(article) {
  return db.Articles.create(article).then(docArticle => {
    console.log("\n>> Créer un Article:\n", docArticle);
    return docArticle;
  });
};

const createImage = function(articleId, image) {
    return db.Image.create(image).then(docImage => {
      console.log("\n>> Rajouter une image:\n", docImage);
      return db.Articles.findByIdAndUpdate(
        articleId,
        {
          $push: {
            images: {
              _id: docImage._id,
              url: docImage.url,
              caption: docImage.caption
            }
          }
        },
        { new: true, useFindAndModify: false }
      );
    });
  };

const run = async function() {
  var tutorial = await createArticle({
    title: "Article #1",
    author: ""
  });

  tutorial = await createImage(article._id, {
    path: "sites/uploads/images/mongodb.png",
    url: "/images/mongodb.png",
    caption: "MongoDB Database",
    createdAt: Date.now()
  });
  console.log("\n>> Article:\n", article);

  tutorial = await createImage(tutorial._id, {
    path: "sites/uploads/images/one-to-many.png",
    url: "/images/one-to-many.png",
    caption: "One to Many Relationship",
    createdAt: Date.now()
  });
  console.log("\n>> Article:\n", article);
};

mongoose
  .connect("mongodb://localhost/ProjetFullStack_DB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Successfully connect to MongoDB."))
  .catch(err => console.error("Connection error", err));