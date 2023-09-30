require('dotenv').config();
module.exports = {
  "development": {
    "username": "lmfhgebl",
    "password": process.env.PW,
    "database": "lmfhgebl",
    "host": process.env.HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": "lmfhgebl",
    "password": process.env.PW,
    "database": "lmfhgebl",
    "host": process.env.HOST,
    "dialect": "postgres"
  },
  "production": {
    "username": "lmfhgebl",
    "password": process.env.PW,
    "database": "lmfhgebl",
    "host": process.env.HOST,
    "dialect": "postgres"
  }
}
