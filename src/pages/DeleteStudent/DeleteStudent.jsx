import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function DeleteStudent() {
    const [value, setValue] = React.useState(2);

    return (
        <Box sx={{ width: 300 }}>
            <h1>This is Delete Student Page</h1>
        </Box>
    );
}