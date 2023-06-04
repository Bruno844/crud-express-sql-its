import express from 'express';
import cors from 'cors';
import connection from '../database/config';
import studentRoutes from '../routes/student.routes';
import teacherRoutes from '../routes/teacher.routes';
import courseRoutes from '../routes/course.routes'
import studentCourseRoutes from '../routes/studentCourse.routes';



class Server {


    constructor(){

        this.app = express();
        this.listen();
        this.connectDb();
        this.middlewares();
        this.routes();

    }


    middlewares(){
        this.app.use(cors())
        this.app.use(express.json());
    }





    listen(){

        this.app.listen(3000, () => {
            console.log('servidor corriendo en puerto',  3000)
        })

    }

    routes(){

        this.app.use('/api/estudiantes', studentRoutes);
        this.app.use('/api/profesores', teacherRoutes);
        this.app.use('/api/cursos', courseRoutes );
        this.app.use('/api/estudiantes', studentCourseRoutes )
    }


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