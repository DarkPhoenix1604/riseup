const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
    {
        title: { 
            type: String, 
            required: true },
        description: { type: 
            String, 
            required: true },
        location: { type: String, 
            required: true }, 
        skillsRequired: [String], 
        employer: { 
            type: mongoose.Schema.Types.ObjectId,
             ref: "User", required: true },
        applicants: [{ 
            type: mongoose.Schema.Types.ObjectId,
             ref: "User" }],
    },
    { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);