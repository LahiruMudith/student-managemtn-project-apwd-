import ViewStudentPage from "../../page/viewStudentPage/ViewStudentPage.jsx";
import AddStudentPage from "../../page/AddStudentPage/AddStudentPage.jsx";
import ViewStudent from  '../../assets/viewAllStudentIcon.png'
import AddIcon from '../../assets/AddStudentIcon.png'

const routes = [
    {
        name:'Add Student',
        path:'/addStudent',
        key:'addStudent',
        component:<AddStudentPage/>,
        icon:<img src={AddIcon} style={{width:'30px'}}/>
    },
    {
        name:'View Studsents',
        path:'/viewStudent',
        key:'viewStudent',
        component:<ViewStudentPage/>,
        icon:<img src={ViewStudent}/>
    },
]

export default routes;