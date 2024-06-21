import React, { useState } from 'react';
import InputBusquedaMedicamento from '../components/InputBusquedaMedicamento';
import TablaResultado from '../components/TablaResultado';
import { Box, Alert } from '@mui/material';

const BuscadorPage = () => {
  const [medicamento, setMedicamento] = useState('');
  const [results, setResults] = useState([]);
  const [alert, setAlert] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!medicamento) {
      setAlert('El campo de medicamento no puede estar vacío.');
      return;
    }

    setLoading(true);
    setAlert('');

    try {
      const response = await fetch(`https://api.fda.gov/drug/label.json?search=openfda.brand_name:${medicamento}`);
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        setResults(data.results);
        setAlert('');
      } else {
        setResults([]);
        setAlert('No se encontraron resultados para el medicamento buscado.');
      }
    } catch (error) {
      setAlert('Hubo un error al realizar la búsqueda.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event) => setMedicamento(event.target.value);

  return (

      <Box
      component="section"
      sx={{
        marginTop: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        padding: 5,
      }}
    >
       {alert && (
        <Box sx={{ width: '100%', maxWidth: 400, marginBottom: 2 }}>
          <Alert severity="error">{alert}</Alert>
        </Box>
      )}
      <InputBusquedaMedicamento
       value={medicamento}
       handleSearch={handleSearch}
       handleInputChange={handleInputChange}
       loading={loading}
      />
      {results.length > 0 && (
        <TablaResultado
          resultados={results}
        />
      )}
      </Box>
  );
}

export default BuscadorPage;
