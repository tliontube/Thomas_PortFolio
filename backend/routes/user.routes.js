import express from 'express';
import { getUsers,addNewUser,userSignIn } from '../controllers/user.controller.js';
import auth from '../middlewares/auth.js';

const router = express.Router();

router.get('/',auth, getUsers);
router.post('/addnewuser',addNewUser);
router.post('/signin',userSignIn)

export default router;
