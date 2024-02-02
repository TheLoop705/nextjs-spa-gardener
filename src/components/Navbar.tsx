// src/components/Navbar.tsx
import React from 'react';
import { AppBar, Toolbar, Button, Divider, Box } from '@mui/material';

export default function Navbar() {
    return (
        <AppBar position="static" elevation={0}>
            <Toolbar sx={{
                justifyContent: 'center',
                '& > *': {
                    margin: '0 20px', // Adds more spacing between buttons
                },
            }}>
                <Button href="#home" color="inherit">Home</Button>
                <Box sx={{
                    width: '1px',
                    height: '24px',
                    background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.5) 50%, rgba(255,255,255,0) 100%)',
                    mx: 2, // Adjusts the margin around the divider for spacing
                }} />
                <Button href="#projects" color="inherit">Projects</Button>
                <Box sx={{
                    width: '1px',
                    height: '24px',
                    background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.5) 50%, rgba(255,255,255,0) 100%)',
                    mx: 2, // Adjusts the margin around the divider for spacing
                }} />
                <Button href="#contact" color="inherit">Contact</Button>
            </Toolbar>
        </AppBar>
    );
}

// export default function Navbar() {
//   return (
//     <AppBar position="static">
//       <Container>
//         <Toolbar disableGutters>
//           <Button href="#home" color="inherit">Home</Button>
//           <Button href="#projects" color="inherit">Projects</Button>
//           <Button href="#contact" color="inherit">Contact</Button>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );