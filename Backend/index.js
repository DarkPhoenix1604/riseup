const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path")

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.send("Backend is running");
})
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/courses", require("./routes/courseRoutes"));
app.use("/api/jobs", require("./routes/jobRoutes"));

const PORT =  8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));