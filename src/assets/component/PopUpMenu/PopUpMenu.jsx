import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import IconButton from "@mui/material/IconButton";
import UpdateMenuIcon from '../../UpdateStudentIcon.png'
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function PopUpMenu({name, age, address, contact}) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const Update = () => {
        setOpen(false);
        alert("Update Successfully")
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
                <DialogContent sx={{height:'210px', width:'300px'}}>
                    <DialogContentText id="alert-dialog-slide-description">

                                <h5>Name : {name} </h5>
                                <h5>Age : {age} </h5>
                                <h5>Address : {address} </h5>
                                <h5>Contact : {contact} </h5>

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={Update}>Update</Button>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}