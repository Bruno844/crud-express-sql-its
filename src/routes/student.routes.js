import {Router} from 'express';
import { createStudent, deleteStudent, getEstudents, getStudentById, updateStudent } from '../controllers/studentController';

const router = Router();


router.get('/', getEstudents);
router.get('/:id', getStudentById);
router.post('/', createStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent)



export default router;