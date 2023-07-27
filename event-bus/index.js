const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const app = express()
app.use(bodyParser.json())

const events = []

app.post('/events', (req, res) => {
    const event = req.body

    events.push(event)

    axios.post('http://localhost:4001/events', event) //posts service
    axios.post('http://localhost:4002/events', event) //comments service
    axios.post('http://localhost:4003/events', event) //query service
    axios.post('http://localhost:4004/events', event) //moderation service

    res.send({ status: "OK"})
})

// retrieve every events that has occured
app.get('/events', (req, res) => {
    res.send(events)
})

app.listen(4005, () => {
    console.log('App Listening on Port 4005')
})