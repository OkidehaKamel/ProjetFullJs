const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const PORT = process.env.PORT || 5001
const categoryRouter = require('./routes/categories')
const articleRouter = require('./routes/articles')
const app = express()
const path=require('path')

mongoose.connect('mongodb://localhost/projet',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Successfully connect to MongoDB."))
.catch(err => console.error("Connection error", err));

app.use(express.json())

app.use(express.static('front/build'))

app.use('/categories',categoryRouter)
app.use('/articles',articleRouter)

app.use(express.static(path.join(__dirname,'./front/build/index.html')));

//default page
app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./front/build/index.html'))
})

// const all_routes = require('express-list-endpoints');
// console.log(all_routes(app));



app.listen(PORT,()=>{
    console.log(`le server est lancé sur le port : ${PORT}`)
})
