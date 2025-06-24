const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        category: { type: String, required: true },
        duration: { type: String, required: true }, // Example: "4 weeks"
        language: { type: String, required: true }, // Example: "English", "Hindi"
        provider: { type: String, required: true }, // Example: "Udemy", "Coursera"
        url: { type: String, required: true }, // Link to the course
        studentsEnrolled: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
    },
    { timestamps: true }
);

module.exports = mongoose.model("Course",courseSchema);