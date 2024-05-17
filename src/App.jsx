import React, { useEffect } from 'react';

const App = () => {
  const redirectUrl = 'https://docs.google.com/presentation/d/e/2PACX-1vTw6PpsIx4qo4OEaENcK6__SEgpoydXGkW44ZGuYbSbhM1E4wOT5C1EfvP3IN8mB7KcIx1Sze7p0Jat/pub?start=false&loop=false&delayms=6000000';

  useEffect(() => {
    window.location.href = redirectUrl;
  }, []);

  return null;
};

export default App;