import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from "axios";
import instance from "../../services/AxiosOrder.jsx";
import {useState} from "react";

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
    const [data, setData] = useState([])
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    instance({
        method: "get",
        url: "/student/getAll",
    }).then(function (response) {
        // const arr = [...data]
        // arr.push(response.data)
        console.log(response.data)
    });

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <p>Name : Lahiru</p>
                <p>Age : 17</p>
                <p>Address : Panadura</p>
                <p>Contact : 0761298256</p>
            </CardContent>
        </Card>
    );
}