import connection from "../database/config";



export const getAllCourseOfStudent = (req,res) => {

    const {id} = req.params

    connection.query(`

                SELECT *
                FROM cursos
                INNER JOIN estudiantes_cursos
                ON estudiantes_cursos.curso_id = cursos.id
                

    
                    `
    
    , (err,data) => {
        if(err){
            res.json({msg: 'error al obtener los datos',err})
        }
        else{
            res.json({
                msg: 'exito en obtener los datos',
                data
            })
        }
    })


}
