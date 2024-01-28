import ViewStudentPage from "../../page/viewStudentPage/ViewStudentPage.jsx";
import UpdateStudentPage from "../../page/updateStudentPage/UpdateStudentPage.jsx";

const routes = [
    {
        name:'View Studsents',
        path:'/viewStudent',
        key:'viewStudent',
        component:<ViewStudentPage/>
    },
    {
        name:'Update Studnet',
        path:'/updateStudent',
        key:'updateStudent',
        component:<UpdateStudentPage/>
    }
]

export default routes;