import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

const App = () => {
  const redirectUrl = 'https://docs.google.com/presentation/d/e/2PACX-1vTw6PpsIx4qo4OEaENcK6__SEgpoydXGkW44ZGuYbSbhM1E4wOT5C1EfvP3IN8mB7KcIx1Sze7p0Jat/pub?start=false&loop=false&delayms=60000'; // Replace with your desired URL

  return (
    <Router>
      <Route path="/" render={() => <Redirect to={redirectUrl} />} />
    </Router>
  );
};

export default App;