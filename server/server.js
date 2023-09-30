const express = require('express')
const app = express();
// const settings = require('./settings')
require('dotenv').config({ path : '../.env'})

const { Users } = require('./models')

app.get('/heartbeat',(req,res) => {
    console.log('Heartbeat')
    res.send('heartbeat')
})

app.get('/users', async(req,res) => {
    const usersData = await Users.findAll();
    console.log('Users');
    res.send(usersData)
}) 

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})