import React from "react";
import Button from '@mui/material/Button';

export default function Btn({name, variant, color, width, heigth, left, top, bgColor, border, onClick, className}) {
    return (
        <Button
            variant={variant}
            className={className}
            sx={{
                width:width,
                height:heigth,
                position:'relative',
                left:left,
                top:top,
                color:color,
                backgroundColor:bgColor,
                border:border
        }}
            onClick={onClick}
        >
            {name}
        </Button>
    )
}