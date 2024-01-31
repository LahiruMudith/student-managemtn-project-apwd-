import {TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {useState} from "react";
import instance from "../../services/AxiosOrder.jsx";
import './AddStudentPage.css'

export default function AddStudentPage() {
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [address,setAddress] = useState("");
    const [contact,setContact] = useState("");

    const AddStudent = () => {
        instance.post("/student/save", {
            student_name: name,
            student_age: age,
            student_address: address,
            student_contact: contact,
        })
            .then((response) => {
                console.log(response);
                alert("Student Addes Done")
            });
    }
    return (
        <>
            <Box sx={{minHeight:'83vh'}}>
                <Box sx={{width: '550px', border:'1px solid black', margin: 'auto', padding:'25px',}}>
                    <TextField id="outlined-basic" label="Name" variant="outlined" sx={{width: '500px'}} onChange={(val) => setName(val.target.value)}/><br/><br/>
                    <TextField id="outlined-basic" label="Age" variant="outlined" sx={{width: '500px'}} onChange={(val) => setAge(val.target.value)}/><br/><br/>
                    <TextField id="outlined-basic" label="Address" variant="outlined" sx={{width: '500px'}} onChange={(val) => setAddress(val.target.value)}/><br/><br/>
                    <TextField id="outlined-basic" label="Contact Number" variant="outlined" sx={{width: '500px'}} onChange={(val) => setContact(val.target.value)}/><br/><br/>
                    <Button variant="contained"
                            sx={{position:'relative', left:'12vw'}}
                            onClick={() => AddStudent()}
                    >
                        Add Student
                    </Button>
                </Box>

            </Box>

        </>
    )
}