require('dotenv').config()
const express = require('express')
const app = express();
app.use(express.json())
// const settings = require('./settings')

const { Sequelize } = require('sequelize')
const sequelize = new Sequelize(process.env.URL)
const { About_us, Users } = require('./models')
app.get('/heartbeat', (req, res) => {
    console.log('Heartbeat')
    res.send('heartbeat')
})

app.get('/users', async (req, res) => {
    try {
        const usersData = await Users.findAll();
        console.log('Users');
        res.send(usersData)
    } catch {
        console.error(err);
        res.send(err);
    }
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

app.post('/login', async (req, res) => {
    const email = req.body.email;
    const user =  await Users.findOne( { where: {email:email }});
    res.json(user);
});
app.post('/register', async (req, res) => {
    const { name, email, role } = req.body;
    const news = await Users.create({
        name,
        email,
        role
    })
    res.json(newUser)
});

app.get('/profile/:userId', async (req, res) => {
    const {userId} = req.params;
    const user = await Users.findOne({ where: {id:userId }});
    console.log(user)
    res.json(user);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})