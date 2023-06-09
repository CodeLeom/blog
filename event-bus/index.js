const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const app = express()
app.use(bodyParser.json())

app.post('/events', (req, res) => {
    const event = req.body

    axios.post('http://localhost:4001/events', event) //posts
    axios.post('http://localhost:4002/events', event) //comments
    axios.post('http://localhost:4003/events', event) //query


    res.send({ status: "OK"})
})

app.listen(4005, () => {
    console.log('App Listening on Port 4005')
})