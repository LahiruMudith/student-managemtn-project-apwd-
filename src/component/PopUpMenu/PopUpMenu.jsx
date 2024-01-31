import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import IconButton from "@mui/material/IconButton";
import UpdateMenuIcon from '../../assets/UpdateStudentIcon.png'
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import {TextField} from "@mui/material";
import instance from "../../services/AxiosOrder.jsx";
import {useState} from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function PopUpMenu({name, age, address, contact, id}) {
    const [open, setOpen] = React.useState(false);
    const [namer, setNamer] = useState(name);
    const [ager, setAger] = useState(age);
    const [addressr, setAddressr] = useState(address);
    const [contactr, setContactr] = useState(contact);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const Update = (id) => {
        setOpen(false);
        instance.put(`/student/update/${id}`, {
            student_name: namer ,
            student_age: ager,
            student_address: addressr,
            student_contact: contactr,
        })
            .then((response) => {
                console.log(response.data);
                location.reload();
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <React.Fragment>
            {/*<Button variant="outlined" >*/}
                <IconButton aria-label="Example"
                            sx={{}}
                            onClick={handleClickOpen}>
                    <img src={UpdateMenuIcon} style={{width:'25px'}}/>
                </IconButton>
            {/*</Button>*/}
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle fontFamily={"monospace"}>{"Update Student"}</DialogTitle>
                <DialogContent sx={{height:'440px', width:'300px'}}>
                    <DialogContentText id="alert-dialog-slide-description">
                                <h5>Name : <TextField id="outlined-basic" onChange={(val) => setNamer(val.target.value) } variant="outlined" value={namer} /></h5>
                                <h5>Age : <TextField id="outlined-basic" onChange={(val) => setAger(val.target.value) } variant="outlined" value={ager} /> </h5>
                                <h5>Address : <TextField id="outlined-basic" onChange={(val) => setAddressr(val.target.value) } variant="outlined" value={addressr}  /> </h5>
                                <h5>Contact : <TextField id="outlined-basic" onChange={(val) => setContactr(val.target.value) } variant="outlined" value={contactr}  /> </h5>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => Update(id)}>Update</Button>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}