import { Router } from "express";
import { createCourse, deleteCourse, getCourseById, getCourses, updateCourse } from "../controllers/courseController";
import { check } from "express-validator";

const router = Router();


router.get('/', getCourses);
router.get('/:id', getCourseById);
router.post('/',[
    check('nombre', 'el nombre tiene que ser valido').not().isEmpty(),
    check('descripcion', 'tiene que ser obligatorio').not().isEmpty()
], createCourse);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse)


export default router;