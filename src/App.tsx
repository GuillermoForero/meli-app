import AppProvider from 'providers/AppProviders';
import React from 'react';
import Router from 'router';
/*
To make correct use of the grid layout, I could use a frontend library and use one of its grids,
I didn't see it necessary, since I only have the Desktop layout, but maybe the best thing to do is use a grid system
*/
const App = () => (
  <AppProvider>
    <Router />
  </AppProvider>
);

export default App;
