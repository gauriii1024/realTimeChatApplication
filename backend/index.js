//const express = require('express')
import express from "express"
import dotenv from "dotenv";
import userRoute from './routes/user.route.js'
import connectDB from "./config/database.js";
dotenv.config({});



const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json())

app.use("/api/v1/user", userRoute);



app.listen(PORT, () => {
    connectDB();
    console.log(`Server listening at port ${PORT}`);
});

