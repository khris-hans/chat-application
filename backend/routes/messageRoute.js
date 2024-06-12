import express from 'express';
import { getMessages, sendMessage, deleteMessage } from '../controllers/messageController.js';
 import { protectRoute } from '../middleware/protectRoute.js';

const router = express.Router(); // create a router object

router.get('/:id',protectRoute, getMessages);
router.post('/send/:id',protectRoute,  sendMessage); //protectRoute,
router.delete('/:id', deleteMessage);

export default router;