const express = require('express')
const { useParams } = require('react-router-dom')
const router = express.Router()
const articleModel = require('../models/articles')

//get all articles
router.get('/', (req, res) => {
    articleModel.find(function (err, articles) {
        if (err) {
            res.send(err);
        }
        res.json(articles);
    })
})

//get articles by category id
router.get('/:categoryid', (req, res) => {
    articleModel.find(function (err, articles) {
        if (err) {
            res.send(err);
        }
        articles = articles.filter(article => article.categoryid == req.params.categoryid)
        res.json(articles);
    })
})

//add new article
router.post('/new', (req, res) => {
    const articles = new articleModel({
        title: req.body.title,
        author: req.body.author,
        text: req.body.text,
        categoryid: req.body.categoryid,
        slug: req.body.slug,
        version: req.body.version

    })
    articles.save()
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            res.json(error)
        })
})

//edit article
router.put("/edit/:id", (req, res) => {
    let updates = req.body 
    articleModel.findOneAndUpdate(
        { _id: req.params.id },
        {
            $push: {
                version: updates
            }
        },
        { new: true, useFindAndModify: false }
    )
        .then(data => res.json(data))
        .catch(err => res.status(400).json("Error: " + err))
});

//delete a version
router.put("/edit-version/:id", (req, res) => {
    let versionToDelete = req.body 
    articleModel.findOneAndUpdate(
        { _id: req.params.id },
        {
            $pull: {
                 version: versionToDelete 
            }
        },
        { new: true, useFindAndModify: false }
    )
});

//delete article
router.delete("/:id", (req, res) => {
    articleModel.findByIdAndDelete(req.params.id)
        .then(() => res.json("donnée supprimée"))
})

module.exports = router;