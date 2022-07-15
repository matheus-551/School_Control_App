import React from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';

import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <GlobalStyles/>
    </>
  )
}

export default App;