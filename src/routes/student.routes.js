import {Router} from 'express';
import { check } from 'express-validator';
import { createStudent, deleteStudent, getEstudents, getStudentById, getStudentByIdForCourse, updateStudent } from '../controllers/studentController';
import { validarCampos } from '../middlewares/validate-campos';

const router = Router();


router.get('/', getEstudents);
router.get('/:id', getStudentById);
router.post('/',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('grado', 'ingresa un grado apto').not().isEmpty(),
    check('edad', 'ingresa bien tu edad').isDecimal().isLength({min: 2, max: 2},),
    validarCampos,
], createStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent)



export default router;