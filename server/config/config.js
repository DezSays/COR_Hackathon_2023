require('dotenv').config({ path : '../.env'})
module.exports = {
  "development": {
    "username": USER,
    "password": PW,
    "database": URL,
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": USER,
    "password": PW,
    "database": URL,
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
