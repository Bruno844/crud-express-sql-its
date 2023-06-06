import connection from "../database/config";




//metodos que trae a todos los profesores
export const getTeachers = (req,res) => {

    //hacemos una seleccion de todos los profesores y traemos la data en formato de objeto
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


//metodo que trae un profesor por su id
export const getTeacherById = (req,res) => {

    //extraemos de los parametros el id solicitado
    const {id} = req.params

    try {
        //selecciona todos los profesores de la tabla profesores en donde coincida el id que le pasamos con el que tiene asignado en la tabla de la base de datos
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


//este metodo crea un profesor nuevos
export const createTeacher = (req,res) => {

    //extraemos del body los valores que tiene para crearlos(estos valores estan configurados ya en la base de datos)
    const {nombre,especialidad,email} = req.body;

    try {

        //insertamos los datos con sus respectivos valores
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



//este metodo elimina un profesor pasandole por parametro su id
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


//este metodo actualiza un profesor mediante su id
export const updateTeacher = (req,res) => {

    //extraemos del parametro y del body los datos necesarios para actualizar los valores que tiene un profesor en particular
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