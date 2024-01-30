import * as React from "react";
import './App.css'
import Main from "../page/Main/main.jsx";
import {useEffect, useState} from "react";
import LoginPage from "../page/LoginPage/LoginPage.jsx";
import Button from "@mui/material/Button";
import ViewStudentPage from "../page/viewStudentPage/ViewStudentPage.jsx";
import Alert from '@mui/material/Alert';
import {AlertTitle} from "@mui/material";


export default function App() {
    const [dashboard, setDashboard] = useState(false);

    const loginToken = localStorage.getItem('loginKey');

    useEffect(() => {
        if (loginToken) {
            setDashboard(true);
        }
    }, []);


    return (
        <>
            {
                dashboard ?
                    <>
                        <Main/>
                    </>

                    :
                    <>
                        <LoginPage/>
                    </>
            }
        </>
    )
}


