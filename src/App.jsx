import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

const App = () => {
  const redirectUrl = 'https://docs.google.com/presentation/d/e/2PACX-1vTw6PpsIx4qo4OEaENcK6__SEgpoydXGkW44ZGuYbSbhM1E4wOT5C1EfvP3IN8mB7KcIx1Sze7p0Jat/pub?start=false&loop=false&delayms=60000'; // Replace with your desired URL

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={redirectUrl} replace />} />
      </Routes>
    </Router>
  );
};

export default App;