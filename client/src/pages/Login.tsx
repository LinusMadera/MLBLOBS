import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../hooks/useAuth';
import qs from 'qs';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Alert from '@mui/material/Alert';
import './Login.scss'; // Ensure your CSS/SCSS file is correctly linked for any additional styling

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState(false);
    const { login } = useAuth();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoginError(false);

        const data = qs.stringify({ email, password });

        try {
            const response = await axios.post('http://localhost:5000/login', data, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
            login(response.data.token);
        } catch (error) {
            console.error(error);
            setLoginError(true);
        }
    };

    return (
        <form className="form_container" onSubmit={handleSubmit} noValidate>
            <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                fullWidth
                variant="outlined"
            />
            <TextField
                label="Password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                fullWidth
                variant="outlined"
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
            <Button type="submit" variant="contained" fullWidth style={{ marginTop: '20px' }}>
                Login
            </Button>
            {loginError && (
                <Alert severity="error" style={{ marginTop: '20px' }}>
                    Login failed, please try again later.
                </Alert>
            )}
        </form>
    );
};

export default Login;
