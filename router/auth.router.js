// routes/auth.routes.js
import { Router } from "express";
import { login } from "../controller/auth.controller.js";

const router = Router();

// POST /auth/login
router.post("/login", login);

export default router;