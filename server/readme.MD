# Server Endpoints

This readme outlines the endpoints available on the server.

## Heartbeat

### `GET /`

- Description: Check server heartbeat.
- Response: Returns a string 'heartbeat' to indicate that the server is running.

## Users

### `GET /users`

- Description: Get all users.
- Response: Returns an array of all users.

### `GET /users/:userId`

- Description: Get a specific user by ID.
- Response: Returns the user with the specified ID.

### `PUT /users/:id`

- Description: Update a user by ID.
- Response: Returns the updated user.

## About Us

### `GET /aboutus`

- Description: Get information about the company.
- Response: Returns information about the company.

## Mentors

### `GET /mentors`

- Description: Get all mentors.
- Response: Returns an array of all mentors.

### `GET /mentors/:mentorId`

- Description: Get a specific mentor by ID.
- Response: Returns the mentor with the specified ID.

### `POST /mentors`

- Description: Create a new mentor.
- Response: Returns the newly created mentor.

### `PUT /mentors/:id`

- Description: Update a mentor by ID.
- Response: Returns the updated mentor.

## Mentees

### `GET /mentees`

- Description: Get all mentees.
- Response: Returns an array of all mentees.

### `GET /mentees/:menteeId`

- Description: Get a specific mentee by ID.
- Response: Returns the mentee with the specified ID.

### `POST /mentees`

- Description: Create a new mentee.
- Response: Returns the newly created mentee.

### `PUT /mentees/:id`

- Description: Update a mentee by ID.
- Response: Returns the updated mentee.

## Request Form

### `GET /request_form`

- Description: Get all request form data.
- Response: Returns an array of all request form data.

## QR Code

### `GET /qrcode`

- Description: Get all QR code data.
- Response: Returns an array of all QR code data.

## Authentication

### `POST /login`

- Description: Authenticate a user.
- Response: Returns a message indicating the status of the sign-in process.

### `POST /register`

- Description: Register a new user.
- Response: Returns a message indicating the status of the user creation process.

### `GET /profile/:userId`

- Description: Get user profile by ID.
- Response: Returns the user profile with the specified ID.

### `GET /logout`

- Description: Log out the current user.
- Response: Logs out the current user and redirects to the login or home page.

## Server Setup

The server runs on the specified hostname and port, with an active connection to the database using Sequelize.

