import React from 'react';

import AppRoutes from './AppRoutes';

import Navbar from './components/Navbar';

import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <Navbar/>
      <AppRoutes/>
      
      <GlobalStyles/>
    </>
  )
}

export default App;