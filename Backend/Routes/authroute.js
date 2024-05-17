import express from "express"

import { logout,loginUser,signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post('/login',loginUser)

router.post('/logout',logout)


router.post('/signup',signup)


export default router;