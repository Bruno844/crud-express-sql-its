import connection from "../database/config";
import bcrypt from 'bcrypt';



export const addUserNew = async (req,res) => {

    const {nombre, password} = req.body;

    const ashedPassword = await bcrypt.hash(password, 10);


    const userNew = connection.query(`INSERT INTO estudiante_password(nombre,password) VALUES("${nombre}", "${ashedPassword}")`, (err,data) => {
        if(err) {
            res.status(404).json({
                msg: 'error al crear un usuario'
            })
        }
        else{
            res.status(200).json({
                data,
                msg: 'creado exitosamente'
            })
        }
    })

}