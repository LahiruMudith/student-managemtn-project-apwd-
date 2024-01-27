import Button from "@mui/material/Button";
import * as React from "react";

export default function LoginButton() {
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <Button aria-describedby={id}
                variant="contained"
                onClick={handleClick}
                sx={{
                    ":hover": {
                        backgroundColor:'#001F3F',
                        opacity:'0.9',
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
            Login
        </Button>
    )
}