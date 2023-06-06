import { validationResult } from 'express-validator';

//metodo para poder validar campos en donde se necesite pasar informacion hacia la base de datos
export const validarCampos = ( req, res, next) => {


    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors)
    }

    //la palabra reservada next funciona para decir que si todo lo anterior se ejecuto de manera correcta, que la funcion misma continue con lo que tiene despues
    next();
}
