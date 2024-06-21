import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BuscadorPage from './pages/BuscadorPage';
import DetallesPage from './pages/DetallePage'

const RoutesConfig = () => (
  <Routes>
    <Route 
      path="/" 
      element={
        <BuscadorPage />
      } 
    />
    <Route path="/detalles/:id" element={<DetallesPage />} />
  </Routes>
);

export default RoutesConfig;
