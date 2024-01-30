import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import updateStudentIcon from '../../assets/UpdateStudentIcon.png';
import DeleteIcon from '@mui/icons-material/Delete';
import instance from "../../services/AxiosOrder.jsx";
import {useEffect, useState} from "react";
import {HashLoader} from "react-spinners";
import LogoutIcon from "@mui/icons-material/Logout.js";
import Box from "@mui/material/Box";
import TextArea from "../../common/Component/TextArea/TextArea.jsx";
import PopUpMenu from "../../assets/component/PopUpMenu/PopUpMenu.jsx";


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function ViewStudentPage() {
    const [expanded, setExpanded] = React.useState(false);
    const [loader, setLoader] = useState(true)
    const [data, setData] = useState([])
    const arr = []

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        instance({
            method: "get",
            url: "/student/getAll",
        }).then(function (response) {
            console.log(response.data)
            setData(response.data)
            setLoader(false)
        });
    }, []);


    return (
        <>
            {
                loader ?
                    <HashLoader
                        style={{width:'300px'}}
                        color="#FFA500"
                        cssOverride={{}}
                        size={100}
                        loading
                        speedMultiplier={2}
                    />                    :
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        {
                            data.map((val, index) => (

                                <Card key={index} sx={{width: 345, margin: '10px'}}>
                                    <CardContent>
                                        <p>Name : {val.student_name}</p>
                                        <p>Age : {val.student_age}</p>
                                        <p>Address : {val.student_address}</p>
                                        <p>Contact : {val.student_contact}</p>

                                    </CardContent>
                                    <Box sx={{position:'relative', left:'250px', display:'flex'}}>
                                        <PopUpMenu
                                            name={val.student_name}
                                            age={val.student_age}
                                            address={val.student_address}
                                            contact={val.student_contact}
                                        />
                                        <IconButton aria-label="Example"
                                                    sx={{}}
                                                    onClick={() => LogoutClick()}>
                                            <DeleteIcon/>
                                        </IconButton>
                                    </Box>
                                </Card>

                            ))
                        }
                    </div>
            }
        </>
    );
}