import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { TextField, Button, Typography, Alert } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './Login.scss';
import axios from 'axios';
import qs from 'qs';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = qs.stringify({ email: email, password });


    try {
      // Update the URL to HTTP and the endpoint if needed. Add the content type header.
      const response = await axios.post('https://api.firehawk52.com/login', data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.status === 200) {
        navigate('/mfa');
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      setError('O login falhou. Tente novamente.');
    }
  };

  return (
    <>
    <div className='login-container'>
      <form onSubmit={handleSubmit} className='form-container'>
        <Typography variant="h1" >
          Vomiplan
        </Typography>
        <Typography variant="h3" gutterBottom>
          Bem vindo de volta!
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Typography variant="h6" align="right" style={{ width: '100%' }} >
          <Link to="/forgot-password" >Esqueceu a senha?</Link>
        </Typography>
        <Button type="submit" variant="contained" color="primary" fullWidth >
          Entrar
        </Button>
        <Typography variant="h6">
          Não tem uma conta ainda? <Link to="/register" style={{ textDecoration: 'none' }}>Criar uma</Link>
        </Typography>
      </form>
        {error && <Alert severity="error">{error}</Alert>}
    </div>
        </>
  );
};

export default LoginPage;
