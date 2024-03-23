import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Alert } from '@mui/material';
import axios from 'axios';
import LockIcon from '@mui/icons-material/Lock';
import './MFAPage.scss';

const MFAPage: React.FC = () => {
  const [mfaCode, setMfaCode] = useState(new Array(6).fill(''));
  const [error, setError] = useState('');
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cookieName = 'secret';
    const cookieString = document.cookie.split('; ').find(row => row.startsWith(cookieName));
    if (!cookieString) {
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []); //hello

  const handleChange = (index: number, value: string) => {
    const newMfaCode = [...mfaCode];
    newMfaCode[index] = value;
    setMfaCode(newMfaCode);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    } else if (!value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleKeyUp = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !mfaCode[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const code = mfaCode.join('');

    try {
      const response = await axios.post('https://api.firehawk52.com/finish-mfa', { mfaCode: code });
      if (response.status === 200) {
        navigate('/home');
      } else {
        setError('Código inválido. Por favor, tente novamente.');
      }
    } catch (error) {
      setError('Um erro ocorreu. Por favor, tente novamente.');
    }
  };

  const renderInputFields = () => {
    const inputs = [];
    for (let i = 0; i < 6; i++) {
      inputs.push(
        <TextField
          key={i}
          type="tel"
          inputProps={{ maxLength: 1, pattern: '[0-9]*' }}
          variant="outlined"
          value={mfaCode[i]}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyUp={(e) => handleKeyUp(i, e)}
          inputRef={(el) => (inputRefs.current[i] = el)}
          className="mfaInput"
        />
      );
    }
    return <div className="mfaInputContainer">{inputs}</div>;
  };

  return (
    <>
      <div className="mfa-container">
        <div className="inner-container">
          <Typography variant="h1" align="center" gutterBottom className="title">
            Autenticação segura <LockIcon />
          </Typography>
          <Typography variant="h3" align="center" gutterBottom className="subtitle">
            Insira o código de 6 dígitos que enviamos para seu email.
          </Typography>
          <form onSubmit={handleSubmit} className="form">
            {renderInputFields()}
            <Button type="submit" variant="contained" color="primary" className="submitButton" fullWidth>
              Verificar código
            </Button>
          </form>
        </div>
        {error && <Alert severity="error">{error}</Alert>}
      </div>
    </>
  );
};
export default MFAPage;
