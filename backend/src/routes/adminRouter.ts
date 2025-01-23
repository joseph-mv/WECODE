import express, { Request, Response } from 'express';
import { adminLogin, createChatRoom, getChatRooms } from '../controllers/adminController';
import { verifyToken } from '../middleware/verifyToken';


const router=express.Router();

router.post('/login',adminLogin)
router.post('/add_topic', verifyToken,createChatRoom)
router.get('/topics',verifyToken,getChatRooms)

export default router