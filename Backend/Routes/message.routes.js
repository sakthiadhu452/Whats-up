import express from "express";

import { getMessages } from "../controllers/message.controller.js";
const router = express.Router();

// import protectRoute from '../middlewares/protectRoute.js'
import { sendMessage } from "../controllers/message.controller.js";
import prRoute from "../prRoute.js";



router.get('/:id',prRoute,getMessages)
router.post('/send/:id',prRoute,sendMessage)






export default router;