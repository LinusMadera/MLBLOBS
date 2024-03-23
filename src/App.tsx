// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import { ThemeProvider } from '@emotion/react';
import { theme } from './themes/ThemeProvider';
import MFAPage from './pages/MFAPage';
const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/mfa" element={<MFAPage />} />

          <Route element={<PrivateRoute />}>
            <Route path="/" element={<h1>Authed</h1>} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
