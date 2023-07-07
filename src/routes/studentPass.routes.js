import {Router} from 'express';
import { addUserNew } from '../controllers/studentPasswordController';



const router = Router();



router.post('/', addUserNew);


export default router