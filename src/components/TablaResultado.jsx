import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const TablaResultado = ({ resultados }) => {
  return (
        <Box
          sx={{
            width: '100%',
            maxWidth: 800,
            marginTop: 15,
          }}
        >
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Marca</TableCell>
                  <TableCell>Nombre Genérico</TableCell>
                  <TableCell>Fabricante</TableCell>
                  <TableCell>Fecha de Aprobación</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {resultados.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.openfda.brand_name?.join(', ') || 'N/A'}
                    </TableCell>
                    <TableCell>
                      <Link to={`/detalles/${row.id}`} style={{ textDecoration: 'none', color: '#1976d2' }}>
                        {row.openfda.generic_name?.join(', ') || 'N/A'}
                      </Link>
                    </TableCell>
                    <TableCell>{row.openfda.manufacturer_name?.join(', ') || 'N/A'}</TableCell>
                    <TableCell>{row.effective_time || 'N/A'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
     
  );
}

export default TablaResultado;
