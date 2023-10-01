require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json())
require("dotenv").config({ path: "../.env" });
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(process.env.URL);
const { About_us, Users, Mentors, Mentees, Request_Tables, QR_Table,Intake_Forms } = require("./models");

app.get("/heartbeat", (req, res) => {
  console.log("Heartbeat");
  res.send("heartbeat");
});

const session = require('express-session');
app.use(session({
    secret: 'digitalcrafts', // Replace with a secret key for session encryption
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false, // Set to true if your server uses HTTPS
        maxAge: 3600000, // Session duration in milliseconds (e.g., 1 hour)
    },
}));


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
    const menteesData = await Mentees.findAll();
    res.send({ menteesData });
  
});

app.get("/request_form", async (req, res) => {
    const requestData = await Request_Tables.findAll();
    res.send({ requestData });
  
});

app.get("/qrcode", async (req, res) => {
    const qrData = await QR_Table.findAll();
    res.send({ qrData });
  
});

app.get("/intakeform", async (req, res) => {
    const IntakeData = await Intake_Forms.findAll();
    res.send({ IntakeData });
  
});

app.post('/login', async (req, res) => {
    const email = req.body.email;
    const user = await Users.findOne({ where: { email: email } });

    if (user) {
        // Store user information in the session
        req.session.user = user;
        res.json(user);
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

app.post('/register', async (req, res) => {
    const { name, email, role } = req.body;
    const newUser = await Users.create({
        name,
        email,
        role
    });
    req.session.user = newUser; // Log the user in automatically
    res.json(newUser);
});

app.get('/profile/:userId', requireLogin, async (req, res) => {
    const { userId } = req.params;
    const user = await Users.findOne({ where: { id: userId } });
    console.log(user);
    res.json(user);
});

function requireLogin(req, res, next) {
    if (req.session.user) {
        next(); // User is authenticated, proceed to the next middleware/route handler
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
}

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Error destroying session:', err);
        }
        res.redirect('/'); // Redirect to the login or home page
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
