import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export default function ToolTip({title}) {
    return (
        <Tooltip title={title}>
            <IconButton>
                <DeleteIcon />
            </IconButton>
        </Tooltip>
    );
}