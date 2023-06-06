import mysql from 'mysql2';


//configuracion general para la conexion con mi base de datos
const connection = mysql.createConnection({
    //le pedimos el host,el usuario y contraseña como asi tambien el nombre de la base de datos en donde desarrollaremos
    host: "localhost",
    user: "root",
    password: "",
    database: "db-instituto"
})


export default connection;