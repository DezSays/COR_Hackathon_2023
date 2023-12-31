const swaggerUiPath = require('swagger-ui-dist').getAbsoluteFSPath();
const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const pg = require("pg");
const hostname = "127.0.0.1";
const port = 5000;
const app = express();
const cors = require("cors");
const bcrypt = require("bcryptjs");
const helmet = require("helmet");
const morgan = require("morgan");
const session = require("express-session");
require("dotenv").config({ path: "../.env" });
const {
  About_us,
  Users,
  Mentors,
  Mentees,
  Request_Tables,
  QR_Table,
} = require("./models");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.URL, {
  dialectModule: pg,
});

// middlewares
app.use(express.json());
app.use(morgan("combined"));
app.use('/swagger-ui', express.static(swaggerUiPath));
app.use(helmet());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 3600000,
    },
  })
  );
  
  app.use(
    cors({
      origin: [
        "https://cor-hackathon-2023.vercel.app/",
        "https://cor-hackathon-2023-unmx.vercel.app/"
      ]
    })
  );

    const requireLogin = (req, res, next) => {
      if (req.session.user) {
        next();
      } else {
        res.status(401).json({ message: "Unauthorized" });
      }
    };
    
    // routes

    app.get("/users", async (req, res) => {
      const usersData = await Users.findAll();
  console.log("Users");
  res.json(usersData);
});

app.get("/users/:userId", async (req, res) => {
  const { id } = req.params;
  const oneUser = await Users.findOne({ where: id });
  res.json(oneUser);
});

app.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const updatedUser = await Users.update(req.body, {
    where: {
      id,
    },
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
  const oneMentor = await Mentors.findOne({ where: id });
  res.json(oneMentor);
});

app.post("/mentors", async (req, res) => {
  const {
    user_id,
    name,
    profession,
    gender,
    managment,
    counselor,
    same_gender,
    linkedin_url,
    photo_url,
  } = req.body;
  const newMentor = await Mentors.create({
    user_id,
    name,
    profession,
    gender,
    managment,
    counselor,
    same_gender,
    linkedin_url,
    photo_url,
  });
  res.json(newMentor);
});

app.put("/mentors/:id", async (req, res) => {
  const { id } = req.params;
  const updatedMentor = await Mentors.update(req.body, {
    where: {
      id,
    },
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
  const {
    email,
    name,
    student_type,
    preferred_profession,
    preferred_management,
    preferred_counselor,
    gender,
    same_gender,
    linkedin_url,
    photo_url,
  } = req.body;
  const foundUser = await Users.findOne({where: {email:email}})
  if(!foundUser){
    res.send('Email address not found. Are you logged in?')
  }
  console.log(foundUser)
  const user_id = foundUser.id
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
    photo_url,
  });
  res.json(newMentee);
});

app.put("/mentees/:id", async (req, res) => {
  const { id } = req.params;
  const updatedMentee = await Mentees.update(req.body, {
    where: {
      id,
    },
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

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({ where: { email: email } });
    console.log(user);
    if (!user) {
      return res.status(401).json({ error: "Invalid username or password" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    res.json({
      message: "Sign in successful",
    });
  } catch (error) {
    console.error("Error signing in:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const existingUser = await Users.findOne({ where: { email: email } });
    if (existingUser) {
      return res.status(409).json({ error: "Email already exists" });
    }
    await bcrypt.hash(password, 10);
    await Users.create({ name, email, password, role });
    res.json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/profile/:userId", requireLogin, async (req, res) => {
  const { userId } = req.params;
  const user = await Users.findOne({ where: { id: userId } });
  console.log(user);
  res.json(user);
});

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
    }
    res.redirect("/"); 
  });
  res.send("logged out");
});



const options = {
  definition:{
  "openapi": "3.0.3",
  "info": {
    "title": "City of Refuge Mentor/Mentee Server",
    "description": "This server is an API service that facilitates the management of users, including operations such as user registration, login, profile retrieval, and logout. Additionally, it supports the handling of various data entities such as About Us information, Mentors, Mentees, QR codes, and request forms. The API provides endpoints for retrieving, creating, and updating these different data entities. The server is documented using Swagger, which allows for clear and standardized documentation of the available API endpoints and data schemas.",
    "termsOfService": "http://swagger.io/terms/",
    "contact": {
      "email": "dezareabryan@gmail.com"
    },
    "license": {
      "name": "Apache 2.0",
      "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
    },
    "version": "1.0.11"
  },
  "externalDocs": {
    "description": "Find out more about Swagger",
    "url": "http://swagger.io"
  },
  "servers": [
    {
      "url": "https://cor-hackathon-2023.vercel.app/",
      "variables": {}
    }
  ],
  "tags": [
    {
      "name": "Users",
      "description": "Users data"
    },
    {
      "name": "About_us",
      "description": "About us data"
    },
    {
      "name": "Mentors",
      "description": "Mentors data"
    },
    {
      "name": "Mentees",
      "description": "Mentees data"
    },
    {
      "name": "QR_Table",
      "description": "QR codes data"
    },
    {
      "name": "Request_Tables",
      "description": "Request forms data"
    }
  ],
  "paths": {
    "/users": {
      "get": {
        "summary": "Get all users",
        "tags": [
          "Users"
        ],
        "responses": {
          "200": {
            "description": "List of users",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "/models/Users"
                }
              }
            }
          }
        }
      },
      "post": {
        "summary": "Create a new user",
        "tags": [
          "Users"
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "/models/Users"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "The created user.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "/models/Users"
                }
              }
            }
          },
          "500": {
            "description": "Some server error"
          }
        }
      }
    },
    "/users/{userId}": {
      "get": {
        "summary": "Get user by ID",
        "tags": [
          "Users"
        ],
        "parameters": [
          {
            "in": "path",
            "name": "userId",
            "schema": {
              "type": "integer"
            },
            "required": true,
            "description": "The user ID"
          }
        ],
        "responses": {
          "200": {
            "description": "The user response by ID",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "/models/Users"
                }
              }
            }
          },
          "404": {
            "description": "The user was not found"
          }
        }
      },
      "put": {
        "summary": "Update user by ID",
        "tags": [
          "Users"
        ],
        "parameters": [
          {
            "in": "path",
            "name": "userId",
            "schema": {
              "type": "integer"
            },
            "required": true,
            "description": "The user ID"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "/models/Users"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "The user was updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "/models/Users"
                }
              }
            }
          },
          "404": {
            "description": "The user was not found"
          },
          "500": {
            "description": "Some error happened"
          }
        }
      }
    },
    "/login": {
      "post": {
        "summary": "User login",
        "tags": [
          "Users"
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "/models/Login"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Sign in successful"
          },
          "401": {
            "description": "Invalid username or password"
          },
          "500": {
            "description": "Internal server error"
          }
        }
      }
    },
    "/register": {
      "post": {
        "summary": "Register a new user",
        "tags": [
          "Users"
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "/models/Register"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "User created successfully"
          },
          "409": {
            "description": "Email already exists"
          },
          "500": {
            "description": "Internal server error"
          }
        }
      }
    },
    "/profile/{userId}": {
      "get": {
        "summary": "Get user profile by ID",
        "tags": [
          "Users"
        ],
        "parameters": [
          {
            "in": "path",
            "name": "userId",
            "schema": {
              "type": "integer"
            },
            "required": true,
            "description": "The user ID"
          }
        ],
        "responses": {
          "200": {
            "description": "The user profile by ID",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "/models/Users"
                }
              }
            }
          },
          "404": {
            "description": "The user was not found"
          }
        }
      }
    },
    "/logout": {
      "get": {
        "summary": "User logout",
        "tags": [
          "Users"
        ],
        "responses": {
          "200": {
            "description": "User logged out"
          },
          "500": {
            "description": "Some error happened"
          }
        }
      }
    },
    "/aboutus": {
      "get": {
        "summary": "Get all about us data",
        "tags": [
          "Users"
        ],
        "responses": {
          "200": {
            "description": "List of about us data",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "/models/About_us"
                }
              }
            }
          }
        }
      }
    },
    "/mentors": {
      "get": {
        "summary": "Get all mentors",
        "tags": [
          "Users"
        ],
        "responses": {
          "200": {
            "description": "List of mentors",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "/models/Mentors"
                }
              }
            }
          }
        }
      },
      "post": {
        "summary": "Create a new mentor",
        "tags": [
          "Users"
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "/models/Mentors"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "The created mentor.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "/models/Mentors"
                }
              }
            }
          }
        }
      }
    },
    "/mentors/{mentorId}": {
      "get": {
        "summary": "Get mentor by ID",
        "tags": [
          "Users"
        ],
        "parameters": [
          {
            "in": "path",
            "name": "mentorId",
            "schema": {
              "type": "integer"
            },
            "required": true,
            "description": "The mentor ID"
          }
        ],
        "responses": {
          "200": {
            "description": "The mentor response by ID",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "/models/Mentors"
                }
              }
            }
          },
          "404": {
            "description": "The mentor was not found"
          }
        }
      },
      "put": {
        "summary": "Update mentor by ID",
        "tags": [
          "Users"
        ],
        "parameters": [
          {
            "in": "path",
            "name": "mentorId",
            "schema": {
              "type": "integer"
            },
            "required": true,
            "description": "The mentor ID"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "/models/Mentors"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "The mentor was updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "/models/Mentors"
                }
              }
            }
          },
          "404": {
            "description": "The mentor was not found"
          },
          "500": {
            "description": "Some error happened"
          }
        }
      }
    },
    "/mentees": {
      "get": {
        "summary": "Get all mentees",
        "tags": [
          "Users"
        ],
        "responses": {
          "200": {
            "description": "List of mentees",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "/models/Mentees"
                }
              }
            }
          }
        }
      },
      "post": {
        "summary": "Create a new mentee",
        "tags": [
          "Users"
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "/models/Mentees"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "The created mentee.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "/models/Mentees"
                }
              }
            }
          }
        }
      }
    },
    "/mentees/{menteeId}": {
      "get": {
        "summary": "Get mentee by ID",
        "tags": [
          "Users"
        ],
        "parameters": [
          {
            "in": "path",
            "name": "menteeId",
            "schema": {
              "type": "integer"
            },
            "required": true,
            "description": "The mentee ID"
          }
        ],
        "responses": {
          "200": {
            "description": "The mentee response by ID",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "/models/Mentees"
                }
              }
            }
          },
          "404": {
            "description": "The mentee was not found"
          }
        }
      },
      "put": {
        "summary": "Update mentee by ID",
        "tags": [
          "Users"
        ],
        "parameters": [
          {
            "in": "path",
            "name": "menteeId",
            "schema": {
              "type": "integer"
            },
            "required": true,
            "description": "The mentee ID"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "/models/Mentees"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "The mentee was updated",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "/models/Mentees"
                }
              }
            }
          },
          "404": {
            "description": "The mentee was not found"
          },
          "500": {
            "description": "Some error happened"
          }
        }
      }
    },
    "/qrcode": {
      "get": {
        "summary": "Get all QR codes",
        "tags": [
          "Users"
        ],
        "responses": {
          "200": {
            "description": "List of QR codes",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "/models/QR_Table"
                }
              }
            }
          }
        }
      }
    },
    "/request_form": {
      "get": {
        "summary": "Get all request forms",
        "tags": [
          "Users"
        ],
        "responses": {
          "200": {
            "description": "List of request forms",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "/models/Request_Tables"
                }
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "About_us": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "content": {
            "type": "string"
          }
        }
      },
      "Lets_talks": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "content": {
            "type": "string"
          }
        }
      },
      "Mentees": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "user_id": {
            "type": "integer"
          },
          "name": {
            "type": "string"
          },
          "student_type": {
            "type": "string"
          },
          "preferred_profession": {
            "type": "string"
          },
          "preferred_management": {
            "type": "string"
          },
          "preferred_counselor": {
            "type": "string"
          },
          "gender": {
            "type": "string"
          },
          "same_gender": {
            "type": "boolean"
          },
          "linkedin_url": {
            "type": "string"
          },
          "photo_url": {
            "type": "string"
          }
        }
      },
      "Mentors": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "user_id": {
            "type": "integer"
          },
          "name": {
            "type": "string"
          },
          "profession": {
            "type": "string"
          },
          "gender": {
            "type": "string"
          },
          "management": {
            "type": "boolean"
          },
          "counselor": {
            "type": "string"
          },
          "same_gender": {
            "type": "boolean"
          },
          "linkedin_url": {
            "type": "string"
          },
          "photo_url": {
            "type": "string"
          }
        }
      },
      "QR_Table": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "content": {
            "type": "string"
          }
        }
      },
      "Request_Tables": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "mentee_id": {
            "type": "integer"
          },
          "mentor_id": {
            "type": "integer"
          },
          "status": {
            "type": "string"
          }
        }
      },
      "Users": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "name": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "password": {
            "type": "string"
          },
          "role": {
            "type": "string"
          }
        }
      },
      "Login": {
        "type": "object",
        "properties": {
          "email": {
            "type": "string"
          },
          "password": {
            "type": "string"
          }
        }
      },
      "Register": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "password": {
            "type": "string"
          },
          "role": {
            "type": "string"
          }
        }
      }
    },
    "requestBodies": {
      "CreateUser": {
        "description": "User object that needs to be created",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "/models/Users"
            }
          }
        }
      },
      "UpdateUser": {
        "description": "User object that needs to be updated",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "/models/Users"
            }
          }
        }
      },
      "LoginUser": {
        "description": "User object used for login",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "/models/Login"
            }
          }
        }
      },
      "RegisterUser": {
        "description": "User object used for registration",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "/models/Register"
            }
          }
        }
      }
    }
  }},
  apis: ["./server.js"],
};

app.use(express.static(__dirname));
app.use('*.css', (req, res, next) => {
    res.set('Content-Type', 'text/css');
    next();
});


const specs = swaggerJsdoc(options);
app.use(
  "/",
  swaggerUi.serve,
  swaggerUi.setup(specs, {
    explorer: true,
    customCssUrl:
      "https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.0/themes/3.x/theme-newspaper.css",
  })

);

app.listen(port, hostname, () => {
  sequelize.authenticate();
  console.log(`Server running at http://${hostname}:${port}/`);
});
