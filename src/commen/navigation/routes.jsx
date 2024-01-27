import addStudentICon from '../../assets/addStudetnIcon.png'
import updateStudentIcon from '../../assets/updateStudentIcon.png'
import deleteStudentIcon from '../../assets/deleteStudentIcon.png'
import AddStudent from "../../pages/AddStudent/AddStudent.jsx";
import UpdateStudent from "../../pages/UpdateStudent/UpdateStudent.jsx";
import DeleteStudent from "../../pages/DeleteStudent/DeleteStudent.jsx";

const routes = [
    {
        name: 'Add Student',
        path: '/addStudent',
        key: 'addStudent',
        icon: <img src={addStudentICon} style={{width:'30px'}}/>,
        component: <AddStudent/>
    },
    {
        name: 'Update Student',
        path: '/updateStudent',
        key: 'updateStudent',
        icon: <img src={updateStudentIcon} style={{width:'30px'}}/>,
        component: <UpdateStudent/>
    },
    {
        name: 'Delete Student',
        path: '/deleteStudent',
        key: 'deleteStudent',
        icon: <img src={deleteStudentIcon} style={{width:'30px'}}/>,
        component: <DeleteStudent/>
    }
]

export default routes;