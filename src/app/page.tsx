// src/pages/index.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import { Box, Container, Grid, Typography, TextField, Button, Paper } from '@mui/material';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Box my={4} id="home">
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 2, backgroundColor: 'secondary.main' }}>
                <img src="https://www.gardendesign.com/pictures/images/320x240Exact/site_3/rock-garden-entryway-garden-design_15636.jpg" alt="Gardener's Project" style={{ width: '100%', height: 'auto' }} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>Gardener's Name</Typography>
              <img src="https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Gardener" style={{ maxWidth: '100%', height: 'auto' }} />
              <Typography variant="subtitle1" mt={2} sx={{ fontSize: 'subtitle1.fontSize', fontFamily: 'subtitle1.fontFamily' }}>“A passionate quote about gardening and landscaping that reflects the gardener's philosophy.”</Typography>
            </Grid>
          </Grid>
        </Box>
        <Box my={4} id="projects">
          <Typography variant="h5" gutterBottom sx={{ color: 'secondary.main' }}>Project Highlights</Typography>
          <img src="https://images.pexels.com/photos/59321/pexels-photo-59321.jpeg" alt="Project Highlight" style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />
          {/* Implement carousel functionality */}
        </Box>
        <Box my={4} id="contact">
          <Typography variant="h5">Contact</Typography>
          <form noValidate autoComplete="off">
            <TextField id="name" label="Your Name" variant="outlined" fullWidth margin="normal" />
            <TextField id="email" label="Your Email" variant="outlined" fullWidth margin="normal" />
            <TextField
              id="message"
              label="Your Message"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              rows={4}
            />
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
              Send
            </Button>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
