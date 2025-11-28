# Open User API

A simple and lightweight Express.js-based REST API for managing user data. This project demonstrates basic CRUD (Create, Read, Update, Delete) operations with a clean MVC architecture.

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies](#technologies)

## ✨ Features

- Get all users
- Get a specific user by ID
- Create a new user
- Update user information
- Delete a user
- CORS enabled for cross-origin requests
- Error handling with meaningful responses

## 📁 Project Structure

```
Open-User-API/
├── app.js                 # Main application entry point
├── package.json          # Project dependencies
├── controllers/
│   └── userController.js # User business logic
├── models/
│   └── userModel.js      # User data model (in-memory storage)
└── routes/
    └── userRouter.js     # User API routes
```

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/diwasbk/Open-User-API.git
cd Open-User-API
```

2. Install dependencies:
```bash
npm install
```

## 🏃 Usage

Start the server:
```bash
npm start
```

The server will run on `http://localhost:4200`

## 📡 API Endpoints

### 1. Get All Users
- **Method:** `GET`
- **URL:** `/api/user/`
- **Response:**
```json
{
  "message": "All Users",
  "result": [...],
  "success": true
}
```

### 2. Get User by ID
- **Method:** `GET`
- **URL:** `/api/user/:id`
- **Example:** `/api/user/101`
- **Response:**
```json
{
  "message": "Welcome John Doe",
  "result": {
    "id": 101,
    "username": "john_doe",
    "email": "john@example.com",
    "name": "John Doe",
    "age": 30,
    "address": "Kathmandu, Kathmandu"
  },
  "success": true
}
```

### 3. Create a New User
- **Method:** `POST`
- **URL:** `/api/user/post`
- **Request Body:**
```json
{
  "id": 123,
  "username": "new_user",
  "email": "newuser@example.com",
  "name": "New User",
  "age": 25,
  "address": "Your Address"
}
```
- **Response:**
```json
{
  "message": "Welcome New User",
  "result": {
    "id": 123,
    "username": "new_user",
    "email": "newuser@example.com",
    "name": "New User",
    "age": 25,
    "address": "Your Address"
  },
  "success": true
}
```

### 4. Update User by ID
- **Method:** `PUT`
- **URL:** `/api/user/update/:id`
- **Example:** `/api/user/update/101`
- **Request Body:** (any fields you want to update)
```json
{
  "email": "newemail@example.com",
  "age": 31
}
```
- **Response:**
```json
{
  "message": "User John Doe updated successfully",
  "result": {
    "id": 101,
    "username": "john_doe",
    "email": "newemail@example.com",
    "name": "John Doe",
    "age": 31,
    "address": "Kathmandu, Kathmandu"
  },
  "success": true
}
```

### 5. Delete User by ID
- **Method:** `DELETE`
- **URL:** `/api/user/delete/:id`
- **Example:** `/api/user/delete/101`
- **Response:**
```json
{
  "status": 200,
  "message": "User John Doe deleted successfully",
  "success": true
}
```

## 🛠️ Technologies

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **CORS** - Cross-Origin Resource Sharing
- **ES6 Modules** - Modern JavaScript syntax

## 📝 Notes

- User data is stored in-memory (resets when the server restarts)
- For production use, consider implementing a persistent database
- Validation should be added for request data in a production environment

## Author

[Diwas Bk](https://github.com/diwasbk)
