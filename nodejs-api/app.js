//use express to create api
const express = require('express')
const app=express()
app.use((req,res,next)=>{
    res.status(200)
    res.json({
        message:'this api works'
    })
})
module.export =app;