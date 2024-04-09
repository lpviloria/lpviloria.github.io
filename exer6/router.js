import {homepage, getUser, getAllUsers, saveStudent, editStudent, removeStudent, removeAllStudents} from './controller.js'


const router = (app) =>{
    app.get('/',homepage);
    app.get('/user', getUser);
    app.get('/members', getAllUsers);
    app.post('/save-student',saveStudent);
    app.post('/update',editStudent);
    app.post('/remove-user',removeStudent);
    app.post('/remove-all-user',removeAllStudents);
}

export default router;