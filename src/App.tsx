import React from 'react';
import { GlobalStyle } from './styles/global'

import { Dashboard } from './components/Dashboard'
function App() {
  return (
    <>
      <GlobalStyle />
      <Dashboard />
    </>
  );
}

export default App;
