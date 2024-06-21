import React from 'react';
import { TextField, Box, Button, CircularProgress } from '@mui/material';

const InputBusquedaMedicamento = ({ value, handleInputChange, handleSearch, loading }) => {
  return (
      <Box
        sx={{
          width: '100%',
          maxWidth: 400,
          padding: 3,
          backgroundColor: '#1976d2',
          borderRadius: 2,
        }}
      >
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          sx={{ mb: 3, backgroundColor: 'white' }}
          value={value}
          onChange={handleInputChange}
        />
        <Button
          variant="contained"
          fullWidth
          sx={{ backgroundColor: '#00a8e8' }}
          onClick={handleSearch}
          disabled={loading}
        >
        {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Buscar'}
        </Button>
      </Box>
  );
}

export default InputBusquedaMedicamento;
