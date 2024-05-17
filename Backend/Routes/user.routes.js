import express from "express";
import prRoute from "../prRoute.js";
import { getUsersForSideBar } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/",prRoute,getUsersForSideBar);


export default router