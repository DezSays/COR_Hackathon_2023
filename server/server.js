require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json())
// const settings = require('./settings')
require("dotenv").config({ path: "../.env" });
const {  Sequelize  } = require("sequelize");
const sequelize = new Sequelize(process.env.URL);
const {  About_us, Users, Mentors, Mentees  } = require("./models");
app.get("/heartbeat",  (req,  res) => {
  console.log("Heartbeat");
  res.send("heartbeat");
});

app.get("/users", async (req, res) => {
  const usersData = await Users.findAll();
  console.log("Users");
  res.send(usersData);
});
app.get("/aboutus", async (req, res) => {
  const aboutUs = await About_us.findAll();
  res.send({ aboutUs });
});

app.get("/mentors", async (req, res) => {
  const mentorsData = await Mentors.findAll();
  res.send({ mentorsData });
});
app.get("/mentees", async (req, res) => {
  try {
    const menteesData = await Mentees.findAll();
    res.send({ menteesData });
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
  console.log("Server is running on port 3000");
});
