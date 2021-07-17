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

// //put articles by id
// router.put('/article/:id', (req, res) => {
//     articleModel.updateOne(
//         { "_id": req.params.id },
//         {
//             $push: {
//                 version: prev_version
//             }
//         }
//     )
// })

//add new article
router.post('/new', (req, res) => {
    const articles = new articleModel({
        title: req.body.title,
        author: req.body.author,
        text: req.body.text,
        categoryid: req.body.categoryid,
        slug: req.body.slug,
        version:req.body.version

    })
    articles.save()
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            res.json(error)
        })
})

// Update for  "mongoose": "^4.11.9",
// router.put("/:comment_id", function(req, res){
//     Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, comment){
//         if(err){
//             console.log(err);
//             res.render("edit");
//         } else {
//             res.redirect("/campgrounds/" + req.params.id);
//         }
//     });
// });

//edit article
router.put("/edit/:id", (req, res) => {
    let updates = req.body //we set a variable equal to the entire req.body
    articleModel.findOneAndUpdate(
        { _id: req.params.id },
        {
            $push: {
                version: updates
            }
        },
        {new: true, useFindAndModify: false}
        )
      .then(data => res.json(data))
      .catch(err => res.status(400).json("Error: " + err))
  })

//edit article
// router.post('/edit/:id', (req, res) => {
    
//     const article = articleModel.updateOne({
//         title: req.body.title,
//         author: req.body.author,
//         text: req.body.text,
//         categoryid: req.body.categoryid,
//         slug: req.body.slug
//     },
//     {
//         where: {_id:req.params.id}
//     })
//     // .then(function(data){
//     //     return data;
//     // })
//     // .catch(error =>{
//     //     return error
//     // })
//     // res.json(data);
//     .then(data => {
//             res.json(data)
//         })
//         .catch(error => {
//             res.json(error)
//         })
// })


//delete article
// router.delete('/delete/:articleid', (req, res) => {
    
//     articleModel.deleteOne(req.body.articleid)
// })

module.exports = router;