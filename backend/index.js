//const express = require('express')
import express from "express"
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoute from './routes/user.route.js'
import connectDB from "./config/database.js";
import messageRoute from "./routes/message.route.js"
dotenv.config({});




const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json())
app.use(cookieParser())

app.use("/api/v1/user", userRoute);
app.use("/api/v1/message", messageRoute);



app.listen(PORT, () => {
    connectDB();
    console.log(`Server listening at port ${PORT}`);
});

