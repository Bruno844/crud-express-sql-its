import connection from "../database/config";




export const getTeachers = (req,res) => {

    connection.query('SELECT * FROM profesores', (err,data) => {
        if(err){
            res.status(400).json({
                msg: "error al obtener los profesores"
            })
        }
        else{
            res.status(200).json({
                msg: data
            })
        }
    })


}


//FUNCIONA
export const getTeacherById = (req,res) => {

    const {id} = req.params

    try {
        connection.query(`SELECT * FROM profesores WHERE id = ${id}`, (err,data) => {
            if(err){
                res.status(400).json({msg: "error al obtener los datos"})
            }
            else{
                res.status(200).json({data})
            }

        })
        
    } catch (error) {
        consoñe.log(error)
    }

  


}



export const createTeacher = (req,res) => {

    const {nombre,especialidad,email} = req.body;

    try {

        connection.query(`INSERT INTO profesores(nombre,especialidad,email) VALUES("${nombre}","${especialidad}", "${email}")`, (err,data) => {

            if(err) {
                res.status(400).json({msg: "error al crear un dato"})
            }
            else{
                res.status(200).json({
                    msg: "creado correctamente",
                    data
                })
            }
    
    
        })
        
    } catch (error) {
        console.log(error)
        
    }
}



//eliminar un estudiante por su id
export const deleteTeacher = (req,res) => {

    const {id} = req.params;

    try {

        connection.query(`DELETE FROM profesores WHERE id = ${id}`, (err,data) => {
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


export const updateTeacher = (req,res) => {

    const {id} = req.params;
    const {nombre,especialidad,email} = req.body

    try {

        connection.query(`UPDATE profesores SET nombre="${nombre}" WHERE id = ${id}`, (err,data) => {
            
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