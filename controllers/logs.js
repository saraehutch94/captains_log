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
        res.render("index.ejs", {allLogs});
    });
});

// new route

logRouter.get("/new", (req, res) => {
    res.render("new.ejs");
});


// delete route


// update route

logRouter.put("/:id", (req, res) => {
    Log.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new : true },
        (error, updatedLog) => {
            res.redirect("/logs");
        }    
    );
});


// create route

logRouter.post("/", (req, res) => {
    if (req.body.shipIsBroken === "on") {
        req.body.shipIsBroken === true;
    } else {
        req.body.shipIsBroken === false;
    }
    Log.create(req.body, (error, newLog) => {
        res.redirect("/logs");
    });
});


// edit route

logRouter.get("/:id/edit", (req, res) => {
    Log.findById(req.params.id, (error, foundLog) => {
        res.render("edit.ejs", {foundLog});
    });
});


// show route

logRouter.get("/:id", (req, res) => {
    Log.findById(req.params.id, (error, foundLog) => {
        res.render("show.ejs", {foundLog});
    });
});


// Export router/controller object so that we can require it in server.js

module.exports = logRouter;