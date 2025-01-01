import express from "express";
import { getMessage, sendMessage } from "../controllers/message.controller.js";
import isAutheticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/send/:id").post(isAutheticated, sendMessage);
router.route("/:id").get(isAutheticated, getMessage)

export default router;