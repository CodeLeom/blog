const express = require('express')
const bodyParser = require('body-parser')
const { randomBytes } = require('crypto')

const app = express()
app.use(bodyParser.json())

// store posts in the memory (every post created get deleted anytime the app restarts)
const posts = {}

// GET request from the posts
app.get('/posts', (req, res) => {
    res.send(posts)
})

// make POST request to the endpoint
app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex') //generate unique id for each post
    const { title } = req.body

    posts[id] = {
        id, title
    }

    res.status(201).send(posts[id])
})

app.listen(4001, () => {
    console.log('App Listening on Port 4001')
})
