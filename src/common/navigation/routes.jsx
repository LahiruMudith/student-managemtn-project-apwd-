import ViewStudentPage from "../../page/viewStudentPage/ViewStudentPage.jsx";
import AddStudentPage from "../../page/AddStudentPage/AddStudentPage.jsx";

const routes = [
    {
        name:'Add Student',
        path:'/addStudent',
        key:'addStudent',
        component:<AddStudentPage/>
    },
    {
        name:'View Studsents',
        path:'/viewStudent',
        key:'viewStudent',
        component:<ViewStudentPage/>
    },
]

export default routes;