import { Router } from "express";
import { createTeacher, deleteTeacher, getTeacherById, getTeachers, updateTeacher } from "../controllers/teacherController";


const router = Router();


router.get('/', getTeachers);
router.get('/:id', getTeacherById);
router.post('/', createTeacher);
router.delete('/:id', deleteTeacher);
router.put('/:id', updateTeacher)


export default router;