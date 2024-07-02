import React, { useState } from 'react';
import { Button, Container, TextField, Typography, Box } from '@mui/material';
import { redirect, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = () => {
    console.log('Sign In clicked');
    console.log('User ID:', userId);
    console.log('Password:', password);
  };

  const handleSignUp = () => {
    navigate('/register');
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 15, mb: 5 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <TextField
          label="User ID"
          variant="outlined"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />
        <Box sx={{ display: 'flex', gap: 2, width: '100%', justifyContent: 'center' }}>
          <Button variant="contained"  onClick={handleSignIn} 
          sx={{
            backgroundColor: '#f14040',
            '&:hover': {
              backgroundColor: '#5a5ae2',
            },
          }}>
            Sign In
          </Button>
          <Button variant="outlined" color="primary" onClick={handleSignUp}>
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
