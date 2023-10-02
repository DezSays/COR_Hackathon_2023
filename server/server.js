const express = require("express");
import * as pg from 'pg';
const hostname = "127.0.0.1";
const port = 5000;
const app = express();
const bcrypt = require('bcryptjs'); 
const helmet = require('helmet');
const morgan = require('morgan');
const session = require('express-session');
require("dotenv").config({ path: "../.env" });
const { About_us, Users, Mentors, Mentees, Request_Tables, QR_Table } = require("./models");
const {Sequelize} = require('sequelize')
const sequelize = new Sequelize(process.env.URL, {
    dialectModule: pg})

app.get("/", (req, res) => {
    console.log("Heartbeat");
    res.send("heartbeat");
});

// middlewares
app.use(express.json());
app.use(morgan('combined'));
app.use(helmet());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: 3600000,
    },
}));

const requireLogin = (req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.status(401).json({ "message": "Unauthorized" });
    }
}

// routes
app.get("/users", async (req, res) => {
    const usersData = await Users.findAll();
    console.log("Users");
    res.json(usersData);
});

app.get("/users/:userId", async (req, res) => {
    const { id } = req.params;
    const oneUser = await Users.findOne({ where: id })
    res.json(oneUser);
});

app.put("/users/:id", async (req, res) => {
    const { id } = req.params;
    const updatedUser = await Users.update(req.body, {
        where: {
            id,
        }
    });
    res.json(updatedUser);
});

app.get("/aboutus", async (req, res) => {
    const aboutUs = await About_us.findAll();
    res.json(aboutUs);
});

app.get("/mentors", async (req, res) => {
    const mentors = await Mentors.findAll();
    res.json(mentors);
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
});

app.put("/mentors/:id", async (req, res) => {
    const { id } = req.params;
    const updatedMentor = await Mentors.update(req.body, {
        where: {
            id,
        }
    });
    res.json(updatedMentor);
});

app.get("/mentees", async (req, res) => {
    const mentees = await Mentees.findAll();
    res.json(mentees);

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
});

app.put("/mentees/:id", async (req, res) => {
    const { id } = req.params;
    const updatedMentee = await Mentees.update(req.body, {
        where: {
            id,
        }
    });
    res.json(updatedMentee);
});

app.get("/request_form", async (req, res) => {
    const requestData = await Request_Tables.findAll();
    res.json(requestData);

});

app.get("/qrcode", async (req, res) => {
    const qrData = await QR_Table.findAll();
    res.json(qrData);

});

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
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password with bcryptjs
    const newUser = await Users.create({
        name,
        email,
        password: hashedPassword,
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
    res.send('logged out');
});

app.listen(port, hostname, () => {
    sequelize.authenticate()
    console.log(`Server running at http://${hostname}:${port}/`);
});
