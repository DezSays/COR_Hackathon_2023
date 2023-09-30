require('dotenv').config()
const express = require('express')
const app = express();
// const settings = require('./settings')

const {Sequelize} = require('sequelize')
const sequelize = new Sequelize(process.env.URL)
const {About_us, Users} = require('./models')
app.get('/heartbeat',(req,res) => {
    console.log('Heartbeat')
    res.send('heartbeat')
})

app.get('/users', async(req,res) => {
    const usersData = await Users.findAll();
    console.log('Users');
    res.send(usersData)
}) 
app.get('/aboutus', async (req, res) => {
    try {
      const categories = await About_us.findAll();
      res.send({ categories });
    } catch (err) {
      console.error(err);
      res.send(err);
    }
  });

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})