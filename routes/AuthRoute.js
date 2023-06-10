import express from "express";
import { Login, LogOut, STAFF } from "../controllers/Auth.js";

const router = express.Router();

router.get("/staff", STAFF);
router.post("/login", Login);
router.delete("/logout", LogOut);

export default router;
