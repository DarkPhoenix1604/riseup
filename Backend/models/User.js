const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: { 
            type: String, 
            required: true },
        email: {
             type: String, 
             unique: true, 
             required: true },
        password: {
             type: String,
              required: true },
        // role: { 
        //     type: String, 
        //     enum: ["student", "employer", "ngo"],
        //      default: "student" },

        // skills: [String], // Array of skills user has

        // appliedJobs: [{ 
        //     type: mongoose.Schema.Types.ObjectId, 
        //     ref: "Job" }],

        // enrolledCourses: [{
        //     type: mongoose.Schema.Types.ObjectId,
        //          ref: "Course" }],
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

 module.exports = User;