import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {TextField} from "@mui/material";
import './LoginCard.css'
import Btn from "../../commen/component/Button/Button.jsx";
import {useState} from "react";

export default function LoginCard({className}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const getLoginDetails = () => {
        console.log(email);
        console.log(password);
    }
    const createAccount = () => {
        console.log("Create Account Button Clicked")
    }
    const fogotPassword = () => {
        console.log("Fogot Password Button Clicked")
    }


    return (
        <Card className={className} sx={{width:'500px', height:'300px', position:'relative', top:'200px', left:'450px', backgroundColor:'#248DD9', border:'1px solid #248DD9', borderRadius:'25px', padding:'20px'}}>
            <CardContent sx={{bottom: '30px'}}>
                <TextField className="input-Field" label={"Email"} onChange={(val) => setEmail(val.target.value)}/>
                <TextField className="input-Field" label={"Password"} onChange={(val) => setPassword(val.target.value)}/>
                <h5
                    onClick={createAccount}
                    style={{
                        position:'relative',
                        left:'20px',
                        bottom:'25px',
                        color:'white',
                        fontWeight:'10',
                        cursor:'pointer'
                }}>Create One</h5>
                <h5
                    onClick={fogotPassword}
                    style={{
                    position:'relative',
                    bottom:'64px',
                    left:'360px',
                    color:'white',
                    fontWeight:'10',
                    cursor:'pointer'
                }}>Fogot Password?</h5>
            </CardContent>
            <Btn
                name={'Login'}
                bgColor={"#248DD9"}
                color={'white'}
                border={'1px solid white'}
                width={'100px'}
                left={'40%'}
                top={'-20%'}
                onClick={getLoginDetails}
            />
        </Card>
    );
}