import connection from "../database/config"


//traer todos los estudiantes
export const getEstudents = async (req,res) => {
    
    try {
        connection.query('SELECT * FROM estudiantes', (err,data) => {
            if(err){
                res.status(400).json({
                    msg: 'error al obtener los datos'
                })
            }
            else{
                res.status(200).json({
                    msg: data 
                })
            }
        })
        
    } catch (error) {
        console.log(error)
    }
}


//traer estudiante por su ID
export const getStudentById = (req,res) => {

    //extraemos el id del parametro
    const {id} = req.params;

    try {
        //selecciona todos los estudiantes de la tabla estudiantes en donde el id que tiene asignado en la base de datoscoindide con el id que le pasamos por parametro
        connection.query(`SELECT * FROM estudiantes WHERE id = ${id}`, (err,data) => {
            if(err){
                res.status(500).json({msg: "erro al obtener datos"})
            }
            else{
                res.status(200).json({data})
            }


        } )


    } catch (error) {
        console.log(error)
    }
}






//crear un estudiante
export const createStudent = (req,res) => {

    //extraemos del body los valores que tiene en la base de datos
    const {nombre,edad,grado} = req.body;

    try {
        //insertamos dentro de la tabla estudiantes los valores que pedimos del body de la solicitud POST
        connection.query(`INSERT INTO estudiantes(nombre, edad, grado) VALUES("${nombre}", ${edad}, "${grado}")`, (err,data) => {

            if(err){
                res.status(404).json({msg:"error al obtener datos"})
            }
            else{
                res.status(200).json({
                    msg: 'datos creados correctamente',
                    data
                })
            }


        })

        
    } catch (error) {
        
    }
}


//eliminar un estudiante por su id
export const deleteStudent = (req,res) => {

    const {id} = req.params;

    try {

        //elimina desde estudiantes si el id coincide con el que le estamos pasando
        connection.query(`DELETE FROM estudiantes WHERE id = ${id}`, (err,data) => {
            if(err){
                res.status(404).json({
                    msg: `error al borrar el estudiante con id ${id}`
                })
            }
            else{
                res.status(200).json({
                    msg: 'eliminado con exito'
                })
            }
        })

        
    } catch (error) {
        console.log(error)
    }


}


export const updateStudent = (req,res) => {

    const {id} = req.params;
    const {nombre,edad,grado} = req.body

    try {

        //actualiza los valores que le pasamos si el id coincide con el que le pasamos por parametro
        connection.query(`UPDATE estudiantes SET nombre="${nombre}", edad="${edad}", grado="${grado}" WHERE id = ${id}`, (err,data) => {
            
            if(err){
                res.status(404).json({
                    msg: `error al actualizar`
                })
            }
            else{
                res.status(200).json({
                    msg: 'actualizado con exito'
                })
            }


        })

        
    } catch (error) {
        console.log(error)
    }


}


