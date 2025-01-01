import express from "express";
import { sendMessage } from "../controllers/message.controller.js";
import isAutheticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/send/:id").post(isAutheticated, sendMessage);

export default router;