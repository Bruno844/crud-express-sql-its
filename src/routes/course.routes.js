import { Router } from "express";
import { createCourse, deleteCourse, getCourseById, getCourses, updateCourse } from "../controllers/courseController";
import { check } from "express-validator";

const router = Router();

//este archivo como el resto de la misma carpeta, funciona para la configuracion general de las rutas.
//con sus metodos respectivos,estamos diciendo que en base a la url que coloque el usuario,ejecutara una accion en especifico
//luego de la ruta, se le ubica la funcion en donde va a ejecutar esa tarea

//en esta primera ruta decimos que una vez que el usuario coloque la ruta raiz, el metodo que se ejecutara es el de getCourses, con lo cual esta funcion se encarga de la consulta a la base de datos, como tambien los errores del mismo
router.get('/', getCourses);
router.get('/:id', getCourseById);
router.post('/',[
    check('nombre', 'el nombre tiene que ser valido').not().isEmpty(),
    check('descripcion', 'tiene que ser obligatorio').not().isEmpty()
], createCourse);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse)


export default router;