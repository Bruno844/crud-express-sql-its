import connection from "../database/config";



export const getAllCourseOfStudent = (req,res) => {

    const {id} = req.params

    const consult = `
    
                SELECT e.nombre, e.edad, c.nombre as nombreCurso, c.descripcion
                FROM estudiantes e
                INNER JOIN estudiantes_cursos ec
                ON e.id = ec.estudiante_id
                INNER JOIN cursos c
                ON c.id = ec.curso_id
    
    
    `

    connection.query(consult, (err,data) => {
        if(err){
            res.json({err})
        }
        else{
            res.json({
                msg: 'exito',
                data
            })
        }
    })


}
