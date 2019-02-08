const express = require("express");
const axios = require('axios')
var app = express()
var bodyparser = require("body-parser")
import {Comment, Event} from "./database/models"
require("./database/index")

app.post("/comments", (req, res) =>{
    let post = req.body
    Comment.create({title: post.title, 
        user: post.user, 
        rating : post.rating, 
        body: post.body, 
        trip_date : post.date, 
        pic_URL : post.url, 
        mobile : post.mobile, 
        flag : post.flag})
    .then(comment => {
        res.send(comment)
    })
    .catch(error =>{
        console.error(error)
    })
})

app.get("/comments", (req, res) =>{
    let {event} = req.params
    Event.findAll({
        include: [{
            model : Comment}],
        where : {event: event}

    })
    .then(data =>{
        res.send(data)
    })
    .catch(error =>{
        console.error(error)
        res.sendStatus(500)
    })
})

var port = process.env.port || 3015

app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})

