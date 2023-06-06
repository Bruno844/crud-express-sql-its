import express from 'express';
import cors from 'cors';
import connection from '../database/config';
import studentRoutes from '../routes/student.routes';
import teacherRoutes from '../routes/teacher.routes';
import courseRoutes from '../routes/course.routes'
import studentCourseRoutes from '../routes/studentCourse.routes';


//esta clase contiene todas las configuraciones generales para poder crear un servidor backend de manera organizada y modularizada por carpetas y funciones propias
class Server {


    constructor(){

        this.app = express();
        this.listen();
        this.connectDb();
        this.middlewares();
        this.routes();

    }


    //metodo que funcionan como puente
    middlewares(){
        this.app.use(cors())
        this.app.use(express.json());
    }





    //metodo para crear un servidor y que este encendido cada que se requiera del mismo
    listen(){

        this.app.listen(3000, () => {
            console.log('servidor corriendo en puerto',  3000)
        })

    }


    //rutas en donde el usuario coloca la url que nosotros le configuramos, de esta manera puede consultar las funciones y datos que el mismo requiera.
    routes(){

        this.app.use('/api/estudiantes', studentRoutes);
        this.app.use('/api/profesores', teacherRoutes);
        this.app.use('/api/cursos', courseRoutes );
        //this.app.use('/api/estudiantes', studentCourseRoutes )
    }


    //metodo para la conexion con la base de datos
    connectDb(){

        connection.connect((err) => {
            if(err){
                console.log('hubo un error en la conexion en la base de datos')
            }
            else{
                console.log('conexion a la base de datos exitosa')
            }
        })

    }



}

export default Server;