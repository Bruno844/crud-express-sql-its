import connection from "../database/config";




export const getCourses = (req,res) => {

    connection.query('SELECT * FROM cursos', (err,data) => {
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
export const getCourseById = (req,res) => {

    const {id} = req.params

    try {
        connection.query(`SELECT * FROM cursos WHERE id = ${id}`, (err,data) => {
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



export const createCourse = (req,res) => {

    const {nombre,descripcion} = req.body;

    try {

        connection.query(`INSERT INTO cursos(nombre,descripcion) VALUES("${nombre}","${descripcion}")`, (err,data) => {

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
export const deleteCourse = (req,res) => {

    const {id} = req.params;

    try {

        connection.query(`DELETE FROM cursos WHERE id = ${id}`, (err,data) => {
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


export const updateCourse = (req,res) => {

    const {id} = req.params;
    const {nombre,descripcion} = req.body

    try {

        connection.query(`UPDATE cursos SET nombre="${nombre}" WHERE id = ${id}`, (err,data) => {
            
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