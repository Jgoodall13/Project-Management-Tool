import express from "express";
import { register, login, refreshToken } from "../controllers/authcontroller";

const router = express.Router();

// POST /auth/register
router.post("/register", register);

// POST /auth/login
router.post("/login", login);
router.post("/refresh", refreshToken);

export default router;
