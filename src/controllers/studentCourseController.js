import connection from "../database/config";


//metodo que trae todos los cursos de los estudiantes
export const getAllCourseOfStudent = (req,res) => {

    const {id} = req.params

    //hacemos una consulta hacia los valores que tiene asignado cada tabla, en este caso la de estudiantes.
    //hacemos una union con el inner join con la tabla estudiantes_cursos
    //y decimos que de la tabla estudiantes y su id coincida con el id de estudiante de la otra tabla
    //lo mismo con los cursos
    const consult = `
    
                SELECT e.nombre, e.edad, c.nombre as nombreCurso, c.descripcion
                FROM estudiantes e
                INNER JOIN estudiantes_cursos ec
                ON e.id = ec.estudiante_id
                INNER JOIN cursos c
                ON c.id = ec.curso_id
    
    
    `

    //aplicamos la query 
    connection.query(consult, (err,data) => {
        //si da un error lo mostramos en formato json
        if(err){
            res.json({err})
        }
        //de lo contrario trae la data
        else{
            res.json({
                msg: 'exito',
                data
            })
        }
    })


}
