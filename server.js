// Require dependencies

const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");

// Initialize the application

const app = express();

// Configure application settings

// Set up port value

require("dotenv").config();

const PORT = process.env.PORT;

// Database connection

// capitalize constant variables

const DATABASE_URL = process.env.DATABASE_URL;

// Connect Database using Mongoose

mongoose.connect(DATABASE_URL);

// Database Connection Error/Success

const db = mongoose.connection;

// Define callback functions for various events in connection to mongoDB

db.on("error", (err) => {
    console.log(err.message + " is mongoDB not running?");
});

db.on("connected", () => {
    console.log("mongoDB connected");
});

db.on("disconnected", () => {
    console.log("mongoDB disconnected");
});

// Mount middleware

// make public assets available
app.use(express.static("public"));

// body-parser middleware
app.use(express.urlencoded({ extended: false }));

// method-override
app.use(methodOverride("_method"));

// Mount routes

app.get("/", (req, res) => {
    res.send("Hello World!");
});


// Tell app to listen for client requests

app.listen(PORT, () => {
    console.log("Express is listening on port " + PORT);
});
