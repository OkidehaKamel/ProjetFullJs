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
        slug: req.body.slug

    })
    articles.save()
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            res.json(error)
        })
})

module.exports = router;