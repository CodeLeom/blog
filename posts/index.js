const express = require('express')
const bodyParser = require('body-parser')
const { randomBytes } = require('crypto')
const cors = require('cors')
const axios = require('axios')

const app = express()
app.use(bodyParser.json())
app.use(cors())

// store posts in the memory (every post created get deleted anytime the app restarts)
const posts = {}

// GET request from the posts
app.get('/posts', (req, res) => {
    res.send(posts)
})

// make POST request to the endpoint
app.post('/posts', async (req, res) => {
    const id = randomBytes(4).toString('hex') //generate unique id for each post
    const { title } = req.body

    posts[id] = {
        id, title
    }

    await axios.post("http://localhost:4005/events", {
    type: "PostCreated",
    data: {
      id,
      title,
    },
  })

    res.status(201).send(posts[id])
})


app.post('/events', (req, res) => {
    console.log('Event Received', req.body.type)

    res.send({})
})

app.listen(4001, () => {
    console.log('App Listening on Port 4001')
})
