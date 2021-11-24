// Require dependencies

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define a mongoose schema

const logSchema = new Schema(
    {
        title: String,
        entry: String,
        shipIsBroken: {type: Boolean, default: true},
    },
    { timestamps: true },
);

// Export the model to be accessed in server.js

module.exports = mongoose.model("Log", logSchema);