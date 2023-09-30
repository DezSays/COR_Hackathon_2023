const express = require('express')
const app = express();
// const settings = require('./settings')
require('dotenv').config({ path : '../.env'})
const { Mentors, Mentees, Lets_talks} = require('./models')

app.get('/heartbeat',(req,res) => {
    console.log('Heartbeat')
    res.send('heartbeat')
})

app.get('/mentors', async(req, res) => {
    const mentors = await Mentors.findAll()
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})