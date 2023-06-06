import connection from "../database/config";



export const existeMail = (req,res) => {

    const {email} = req.body

    const consult = `SELECT * FROM profesores WHERE email = ${email} `

    const exist = connection.query(consult, (err,data) => {
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