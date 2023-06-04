import { Router } from "express";
import { getAllCourseOfStudent } from "../controllers/studentCourseController";

const router = Router();


router.get('/:id/curso', getAllCourseOfStudent);



export default router