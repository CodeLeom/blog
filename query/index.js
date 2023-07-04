const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

const posts = {} //get all the post into an object

app.get('/posts', (req, res) => {
    res.send(posts)
})

//get all the events from post and comment
app.post('/events', (req, res) => {
    const {type, data} = req.body

    if(type === 'PostCreated'){
        const {id, title} = data

        posts[id] = {id, title, comments: []}
    }

    if(type === 'CommentCreated'){
        const {id, content, postId, status} = data

        const post = posts[postId]
        post.comments.push({id, content, status})

    }

    console.log(posts)
    res.send({})
})


app.listen(4003, () => {
    console.log('App Listening on Port 4003')
})