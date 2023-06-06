//importacion de la conexion con la base de datos
import connection from "../database/config";



//metodo para solicitar todos los cursos de la base de datps
export const getCourses = (req,res) => {

    //escribo en lenguaje sql la consulta sobre la tabla cursos
    connection.query('SELECT * FROM cursos', (err,data) => {
        //pregunto si hubo un error, que lo muestre
        if(err){
            res.status(400).json({
                msg: "error al obtener los profesores"
            })
        }
        //de lo contrario que muestre en formato json los datos
        else{
            res.status(200).json({
                msg: data
            })
        }
    })


}


//metodo para obtener un curso por su id
export const getCourseById = (req,res) => {

    //extraemos de los parametros el id solicitado
    const {id} = req.params

    //ejecutamos todo en un try y catch para la toma de errores y obtencion de los datos
    try {
        //escribimos en lenguaje sql que traemos todos los cursos en donde coincida el id que tiene en la db con el que le pasamos por parametro
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


//metodo que crea un curso
export const createCourse = (req,res) => {

    //extraemos con desestructuracion de objetos el parametro nombre y descripcion del body
    const {nombre,descripcion} = req.body;

    try {

        //insertamos los datos que le pasemos por objeto en formato JSON
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



//funcion que elimina un curso por su id
export const deleteCourse = (req,res) => {

    //extraemos el id por el parametro solicitado
    const {id} = req.params;

    try {

        //eliminamos un curso si el id que le pasamos es igual al id que tiene asignado en la base de datos
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

//metodo que actualiza un curso
export const updateCourse = (req,res) => {

    //extraemos el id y los datos nuevos que le queremos pasar, ya que sin el id no sabemos a cual curso actualizar
    const {id} = req.params;
    const {nombre,descripcion} = req.body

    try {

        //se lee asi: actualizamos la tabla cursos seteando los valores nombre y descripcion en donde el id que tiene asignado en la base de datos coincida con el que le pasamos por parametro.
        connection.query(`UPDATE cursos SET nombre="${nombre}", descripcion="${descripcion}" WHERE id = ${id}`, (err,data) => {
            //si no es asi,lanza error
            if(err){
                res.status(404).json({
                    msg: `error al actualizar`
                })
            }
            //de lo contrario lo actualiza con exito
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