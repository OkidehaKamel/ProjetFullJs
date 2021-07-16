const express = require('express')
const { useParams } = require('react-router-dom')
const router = express.Router()
const categoryModel = require('../models/categorie')

//get all categories
router.get('/', (req,res)=>{
    categoryModel.find(function(err, categories){
        if (err){
            res.send(err); 
        }
        res.json(categories);         
    })    
})

//get by category slug
router.get('/:slug',async (req,res)=>{
    const category=await categoryModel.find({
        slug: req.params.slug       
    })
    if(category==null){
        res.redirect('/')
    }
    
})

//get by category id
router.get('/:id',async (req,res)=>{
    const category=await categoryModel.find({
        id: req.params.id       
    })
    if(category==null){
        res.redirect('/')
    }
    
})

//add new category
router.post('/new',(req,res)=>{
    const category = new  categoryModel({
        name: req.body.name,
        image: req.body.image,
        slug:req.body.slug

    })
    category.save()
    .then(data =>{
        res.json(data)
    })
    .catch(error=>{
        res.json(error)
    })
})

module.exports = router;