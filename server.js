const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRoute=require("./routes/userRoute")
connectDB();
const app = express();

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))
app.use(
    cors({
    origin:["http://localhost:3000",],
    credentials:true,
}))


const PORT = process.env.PORT || 5000;

//Routes
app.use("/api/users",userRoute)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
