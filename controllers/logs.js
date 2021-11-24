// Require dependencies

const express = require("express");

// Create a route/controller object

const logRouter = express.Router();

const Log = require("../models/log");

// List our router actions

// seed route

const logSeed = require("../models/logSeed.js");

logRouter.get("/seed", (req, res) => {
    Log.deleteMany({}, (error, allLogs) => {});
    Log.create(logSeed, (error, data) => {
        res.redirect("/logs");
    });
});

// index/read route

logRouter.get("/", (req, res) => {
    Log.find({}, (error, allLogs) => {
        res.send("Hello World");
    });
});

// Export router/controller object so that we can require it in server.js

module.exports = logRouter;