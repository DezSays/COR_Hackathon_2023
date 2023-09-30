"use strict";

const ENV = process.env;

exports.database = {
    username: ENV['username'],
    password: ENV['password'],
    database: ENV['database'],
    host: ENV['host'],
    dialect: ENV['dialect']
};
