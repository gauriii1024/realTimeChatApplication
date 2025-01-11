//const express = require('express')
import express from "express"
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoute from './routes/user.route.js'
import connectDB from "./config/database.js";
import cors from "cors"
import messageRoute from "./routes/message.route.js"
dotenv.config({});

const app = express();

const PORT = process.env.PORT || 8081;

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cookieParser())

const corsOption={
    origin:'http://localhost:3000',
    credentials: true
};
app.use(cors(corsOption))

app.use("/api/v1/user", userRoute);
app.use("/api/v1/message", messageRoute);



app.listen(PORT, () => {
    connectDB();
    console.log(`Server listening at port ${PORT}`);
});

