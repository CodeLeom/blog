const express = require('express')
const bodyParser = require('body-parser')
const { randomBytes } = require('crypto')

const app = express()
app.use(bodyParser.json())

const commentsByPostId = {};

// make a GET request to fetch the comments associated with an ID
app.get('/posts/:id/comments', (req, res) => {
    res.send(commentsByPostId[req.params.id] || [])
})

// make a POST request to send comment and associate it with the respected ID
app.post('/posts/:id/comments', (req, res) => {
    const commentId = randomBytes(4).toString('hex')
    const { content } = req.body

    const comments = commentsByPostId[req.params.id] || []

    comments.push({id: commentId, content})

    commentsByPostId[req.params.id] = comments;

    res.status(201).send(comments)
})

app.listen(4002, () => {
    console.log('App listening on Port 4002')
})