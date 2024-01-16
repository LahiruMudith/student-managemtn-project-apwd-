
import IconButton from "@mui/material/IconButton";
import {Button} from "@mui/material";
import {useTheme} from "@mui/material/styles";

export default function Btn({name, onClick}) {
    const theme = useTheme()

    return (
        <Button
            onClick={onClick}
            sx={{
                ":hover": {
                    backgroundColor:'#001F3F',
                    opacity:'0.9'
                },
            width:'8vw', height:'50px', borderRadius:'50px', flexShrink:'0', backgroundColor:'#001F3F', margin:'10px', position:'relative', left:'56%',
                [theme.breakpoints.between('lg', 'xl')]: {
                    left:'54%',
                },
                [theme.breakpoints.between('md', 'lg')]: {
                   left:'45%'
                },
                [theme.breakpoints.between('sm', 'md')]: {
                    left:'32%'
                },
                [theme.breakpoints.between('xs', 'sm')]: {
                    left:'4%',
                    fontSize:'8px',
                    height:'40px',
                    margin:'5px'
                },

            }}
            variant="contained"
        >
            {name}
        </Button>
    )
}