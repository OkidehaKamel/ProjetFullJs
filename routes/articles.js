const express = require('express')
const { useParams } = require('react-router-dom')
// const { default: Article } = require('../front/src/components/Article')
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

//get articles by id
router.get('/article/:id', (req, res) => {
    articleModel.findById(req.params.id)
    .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found article with id " + req.params.id });
        else res.json(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving article with id=" + req.params.id });
      });
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

//edit article
// router.get('/edit/:id', (req, res) => {
//     const article= articleModel.findById(req.params.id)
//     res.json(article);
// })


//delete article
// router.delete('/delete/:articleid', (req, res) => {
    
//     articleModel.deleteOne(req.body.articleid)
// })

module.exports = router;