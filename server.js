const express = require('express')
// const mongoose = require('mongoose')
require('dotenv').config()
const PORT = process.env.PORT || 5001

const app = express()
const path=require('path')

// mongoose.connect('mongodb://localhost/projet',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

app.use(express.json())

app.use(express.static('front/build'))

app.get('/api/test',(req,res)=>{
    res.send({
        msg: 'test get ok'
    })
})

//default page
app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./front/build/index.html'))
})

app.listen(PORT,()=>{
    console.log(`le server est lancé sur le port : ${PORT}`)
})
