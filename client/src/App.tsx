// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<h1>Authed</h1>} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
