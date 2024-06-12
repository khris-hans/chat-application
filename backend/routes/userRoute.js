import express from 'express';
import { getUserForSidebar } from '../controllers/userController.js';
import { protectRoute } from '../middleware/protectRoute.js';

const router = express.Router(); // create a router object

router.get('/', protectRoute, getUserForSidebar);


export default router