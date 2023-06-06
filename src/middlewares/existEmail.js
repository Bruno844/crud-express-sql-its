import connection from "../database/config";


//middleware que funciona como interceptor
export const existeMail = (req,res) => {

    const {email} = req.body

    //seleccionamos todos los emails en donde el email que le pasamos por el body sea igual al que tiene asignado en la base de datos
    const consult = `SELECT * FROM profesores WHERE email = ${email} `

    const exist = connection.query(consult, (err,data) => {
        //si el email existe ya, tiramos un error diciendo que ya esta creado
        if(exist){
            res.json({
                msg: `el email ${consult} ya existe en la base de datos`
            })
        }
        else{
            res.json({err})
        }
    })


}