import express from 'express';
import { register, login, logout } from '../controllers/authController.js';

const router = express.Router(); // create a router object

 router.post('/login', login);
 router.post('/register', register);
 router.post('/logout', logout);        
   
export default router;
