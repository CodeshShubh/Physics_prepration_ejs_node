import express from 'express';
import { Login, Register } from '../controllers/AuthController.js';

const router = express.Router();


//  (/User/Register)
router.post('/Register', Register)
//  (/User/Login)
.post('/Login', Login)



export default router;