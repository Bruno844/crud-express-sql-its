import { Router } from "express";
import { createTeacher, deleteTeacher, getTeacherById, getTeachers, updateTeacher } from "../controllers/teacherController";
import { check } from "express-validator";
import { existeMail } from "../middlewares/existEmail";
import { validarCampos } from "../middlewares/validate-campos";


const router = Router();


router.get('/', getTeachers);
router.get('/:id', getTeacherById);
router.post('/', [
    check('nombre', 'ingrese su nombre').not().isEmpty(),
    check('especialidad', 'ingrese a lo que se dedica').not().isEmpty(),
    check('email', 'el email no es valido').isEmail(),
    //check('email').custom(existeMail),
    validarCampos,
], createTeacher);
router.delete('/:id', deleteTeacher);
router.put('/:id', updateTeacher)


export default router;