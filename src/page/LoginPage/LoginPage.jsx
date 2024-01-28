import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {TextField} from "@mui/material";
import {useState} from "react";
import axios from "axios";
import instance from "../../services/AxiosOrder.jsx";

const bull = (

    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const LoginBtn = () => {
        console.log(email)
        console.log(password)

        instance.post('/login', {
            email:email,
            password:password
        })
            .then(function (response) {
                const token = (response.data.token)
                if (token) {
                    localStorage.setItem('loginKey', token)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <Card sx={{ width:'600px', mx: 'auto', position:'relative', top:'30vh' }}>
            <CardContent>
                <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    sx={{width:'570px', marginBottom:'10px'}}
                    onChange={(val) => setEmail(val.target.value) }
                />
                <TextField
                    id="password"
                    label="Password"
                    type={'password'}
                    variant="outlined"
                    sx={{width:'570px', marginBottom:'10px'}}
                    onChange={(val) => setPassword(val.target.value) }
                />
                <Button sx={{position:'relative', left:'23vw', width:'100px'}}
                        variant="contained"
                        onClick={LoginBtn}
                >
                    Login
                </Button>
            </CardContent>
        </Card>
    );
}