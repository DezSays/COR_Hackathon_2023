// require("dotenv").config();
const express = require("express");
const app = express();
const bcrypt = require('bcrypt');
app.use(express.json())
require("dotenv").config({ path: "../.env" });
const { Sequelize } = require("sequelize");
// const sequelize = new Sequelize(process.env.URL);
const { About_us, Users, Mentors, Mentees, Request_Tables, QR_Table, Intake_Forms } = require("./models");

app.get("/heartbeat", (req, res) => {
  console.log("Heartbeat");
  res.send("heartbeat");
});

app.use(express.json());
const session = require('express-session');
app.use(session({
    secret: process.env.SESSION_SECRET, // Replace with a secret key for session encryption
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

app.get("/users/:userId", async (req, res) => {
    const { id } = req.params;
    const oneUser = await Users.findOne({ where: id })
    res.json(oneUser);
});

app.get("/aboutus", async (req, res) => {
    const aboutUs = await About_us.findAll();
    res.send({ aboutUs });
});

app.get("/mentors", async (req, res) => {
    const mentorsData = await Mentors.findAll();
    res.send({ mentorsData });
});

app.get("/mentors/:mentorId", async (req, res) => {
    const { id } = req.params;
    const oneMentor = await Mentors.findOne({ where: id })
    res.json(oneMentor)
});

app.post("/mentors", async (req, res) => {
    const { user_id, name, profession, gender, managment, counselor, same_gender, linkedin_url, photo_url } = req.body;
    const newMentor = await Mentors.create({
        user_id,
        name,
        profession,
        gender,
        managment,
        counselor,
        same_gender,
        linkedin_url,
        photo_url
    });
    res.json(newMentor);
})

app.get("/mentees", async (req, res) => {
    const menteesData = await Mentees.findAll();
    res.send({ menteesData });
  
});

app.get("/mentees/:menteeId", async (req, res) => {
    const { id } = req.params;
    const oneMentee = await Mentees.findOne({ where: id });
    res.json(oneMentee);
});

app.post("/mentees", async (req, res) => {
    const { user_id, name, student_type, preferred_profession, preferred_management, preferred_counselor, gender, same_gender, linkedin_url, photo_url } = req.body;
    const newMentee = await Mentees.create({
        user_id,
        name,
        student_type,
        preferred_profession,
        preferred_management,
        preferred_counselor,
        gender,
        same_gender,
        linkedin_url,
        photo_url
    });
    res.json(newMentee);
})

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

const requireLogin = (req, res, next) => {
    if (req.session.user) {
        next(); // User is authenticated, proceed to the next middleware/route handler
    } else {
        res.status(401).json({ "message": "Unauthorized" });
    }
}

app.post('/login', async (req, res) => {
    const { name, password } = req.body;
    const user = await Users.findOne({ where: { name } });
  
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Incorrect password.' });
    }
    req.session.user = user;
    res.json(user);
  });
  

app.post('/register', async (req, res) => {
    const { name, email, password, role } = req.body;
    const newUser = await Users.create({
        name,
        email,
        password,
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
