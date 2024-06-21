import React from "react";
import { Box, Typography, Tab, Tabs, Paper } from "@mui/material";

const CONFIG_TABS = [
  {title: 'Información General'},
  {title: 'Indicaciones y uso'},
  {title: 'Dosificación y administración'},
  {title: 'Contraindicaciones'},
]

const TabsDetalle = ({ handleChangeTab, tabValue, medicamento }) => {
  if (!medicamento || medicamento.length === 0 || medicamento === undefined) 
    return <Typography>No se encontró el medicamento?.</Typography>;
  

  return (
    <>
      {/* Pestañas */}
      <Box sx={{ width: "100%", borderBottom: 1, borderColor: "divider", marginBottom: 2 }}>
        <Tabs value={tabValue} onChange={handleChangeTab} indicatorColor="primary">
          {CONFIG_TABS.map(tab => {
            return(
              <Tab label={tab.title} />
            )
          })}
        </Tabs>
      </Box>

      {/* Contenido de las pestañas */}
      <Paper elevation={3} sx={{ width: "100%", padding: 2 }}>
        {tabValue === 0 && (
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6">
              Marca: {medicamento?.openfda.brand_name?.join(", ") || "N/A"}
            </Typography>
            <Typography variant="h6">
              Nombre Genérico:{" "}
              {medicamento?.openfda.generic_name?.join(", ") || "N/A"}
            </Typography>
            <Typography variant="h6">
              Fabricante:{" "}
              {medicamento?.openfda.manufacturer_name?.join(", ") || "N/A"}
            </Typography>
            <Typography variant="h6">
              Fecha de Aprobación: {medicamento?.effective_time || "N/A"}
            </Typography>
          </Box>
        )}

        {tabValue === 1 && (
          <Box sx={{ textAlign: "center" }}>
            {/* Mostrar indicaciones u otra información adicional */}
            <Typography variant="body1">
              {medicamento?.indications_and_usage || "Indicaciones y uso no disponible"}
            </Typography>
          </Box>
        )}

        {tabValue === 2 && (
          <Box sx={{ textAlign: "center" }}>
            {/* Mostrar dosificacion u otra información adicional */}
            <Typography variant="body1">
              {medicamento?.dosage_and_administration ||
                "Dosificación y administración no disponible"}
            </Typography>
          </Box>
        )}

        {tabValue === 3 && (
          <Box sx={{ textAlign: "center" }}>
            {/* Mostrar contraindicaciones u otra información adicional */}
            <Typography variant="body1">
              {medicamento?.contraindications || "Contraindicaciones no disponible"}
            </Typography>
          </Box>
        )}
      </Paper>
      </>
  );
}

export default TabsDetalle;