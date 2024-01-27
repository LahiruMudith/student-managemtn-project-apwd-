import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {useTheme} from "@mui/material/styles";
import {useState} from "react";
import instance from "../../services/AxiosOrder.jsx";

export default function SignUpMenu() {
    const theme = useTheme()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const LoginButton = () => {
        PostData()
    }

    const PostData = () => {
        instance.post('/register', {
            name: name,
            email: email,
            password: password
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <Button aria-describedby={id}
                    variant="contained"
                    onClick={handleClick}
                    sx={{
                        ":hover": {
                            backgroundColor:'#001F3F',
                            opacity:'0.9'
                        },
                        width:'8vw', height:'50px', borderRadius:'50px', flexShrink:'0', backgroundColor:'#001F3F', margin:'10px', left:'580%',
                        [theme.breakpoints.between('lg', 'xl')]: {
                            left:'560%',
                        },
                        [theme.breakpoints.between('md', 'lg')]: {
                            left:'430%'
                        },
                        [theme.breakpoints.between('sm', 'md')]: {
                            left:'360%',
                            margin:'5px'
                        },
                        [theme.breakpoints.between('xs', 'sm')]: {
                            left:'10%',
                            fontSize:'8px',
                            height:'40px',
                            margin:'5px'
                        },

                    }}
            >
                Sign Up
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                }}
                sx={{marginTop:'50px', marginLeft:'-22%'}}
            >
                <Box sx={{padding:'40px', width:'800px', height:'550px', backgroundColor:'#001F3F', borderRadius:'20px'}}>
                    <Box sx={{position:'relative', left:'20%', top:'20%'}}>
                        <TextField
                            style={{backgroundColor:'white', width:'400px',margin:'10px', borderRadius:'10px'}}
                            placeholder={"Name"}
                            onChange={(val)=> setName(val.target.value) }
                        />
                        <br/>
                        <TextField
                            style={{backgroundColor:'white', width:'400px',margin:'10px', borderRadius:'10px'}}
                            placeholder={"Email"}
                            onChange={(val)=> setEmail(val.target.value) }
                        />
                        <br/>
                        <TextField
                            type={'password'}
                            style={{backgroundColor:'white', width:'400px', margin:'10px', borderRadius:'10px'}}
                            placeholder={"Password"}
                            onChange={(val)=> setPassword(val.target.value) }
                        />
                        <br/>
                        <Button variant="contained" sx={{
                            ":hover": {
                                backgroundColor:'#FFFFFF',
                                opacity:'0.8'
                            },
                            backgroundColor:'white', color:'black', position:'relative', left:'23%'
                        }}
                                onClick={LoginButton}
                        >
                            Login
                        </Button>
                    </Box>
                </Box>
            </Popover>
        </div>
    );
}