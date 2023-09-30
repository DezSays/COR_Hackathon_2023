require('dotenv').config()
const express = require('express')
const app = express();
// const settings = require('./settings')
require('dotenv').config({ path : '../.env'})

const {Sequelize} = require('sequelize')
const sequelize = new Sequelize(process.env.URL)
const {About_us} = require('./models')
app.get('/heartbeat',(req,res) => {
    console.log('Heartbeat')
    res.send('heartbeat')
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

app.get('/mentors', async(req, res) => {
    const mentors = await Mentors.findAll()
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})