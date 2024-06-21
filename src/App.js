import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import RoutesConfig from './RoutesConfig';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
       <Header />
      <CssBaseline />  
      <RoutesConfig />
    </BrowserRouter>
  );
}

export default App;
