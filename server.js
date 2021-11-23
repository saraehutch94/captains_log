// Require dependencies

const express = require("express");
const methodOverride = require("method-override");

// Initialize the application

const app = express();

// Configure application settings

// Set up port value

require("dotenv").config();

const PORT = process.env.PORT;

// Mount middleware

// make public assets available
app.use(express.static("public"));

// body-parser middleware
app.use(express.urlencoded({ extended: false }));

// method-override
app.use(methodOverride("_method"));

// Mount routes


// Tell app to listen for client requests

app.listen(PORT, () => {
    console.log("Express is listening on port " + PORT);
});