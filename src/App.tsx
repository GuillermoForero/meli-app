import AppProvider from 'providers/AppProviders';
import React from 'react';
import Router from 'router';

const App = () => (
  <AppProvider>
    <Router />
  </AppProvider>
);

export default App;
