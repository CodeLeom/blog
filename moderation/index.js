const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const app = express()
app.use(bodyParser.json())

app.post('/events', async (req, res) => {
    const {type, data} = req.body

    if (type === 'CommentCreated') {
        const status = data.content.includes('fuck') ? 'rejected' : 'approved'

        await axios.post('http://localhost:4005/events', {
            type: 'CommentModerated',
            data: {
                id: data.id,
                postId: data.postId,
                status,
                content: data.content
            }
        })
    }

    res.send({})
})

app.listen(4004, () => {
    console.log('App listening on Port 4004')
})