import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Header() {
    return (
        <>
            <Box className="flex items-center justify-center gap-3 m-6">
                <Stack direction="row" spacing={2}>
                    <Avatar>CC</Avatar>
                </Stack>
                <Typography variant='h4' className='text-gray-600'>
                    Chef Claude
                </Typography>
            </Box>
        </>
    )
}