import express from "express";
import prRoute from "../prRoute.js";
import { videoCall,videoAns } from "../controllers/videocall.js";

const router = express.Router();




router.get('/send/:id',prRoute,videoCall);
router.get('/videoans/:id',prRoute,videoAns);

export default router