import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import TabsDetalle from "../components/TabsDetalle";

function Detalles() {
  const { id } = useParams();
  const [tabValue, setTabValue] = useState(0);
  const [medicamento, setMedicamento] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMedicamento = async () => {
      try {
        const response = await fetch(`https://api.fda.gov/drug/label.json?search=id:${id}`);
        if (!response.ok) {
          throw new Error(`Error fetching medicamento with id ${id}`);
        }
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          setMedicamento(data.results[0]);
        } else {
          setError(`Medicamento con id ${id} no encontrado`);
        }
      } catch (error) {
        setError("Hubo un error al realizar la búsqueda.");
        console.error("Failed to fetch medicamento:", error);
      }
    };

    if (id) {
      fetchMedicamento();
    }
  }, [id]);

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };

  if (error) {
    return <Typography>{error}</Typography>;
  }

  if (!medicamento) {
    return <Typography>Cargando detalles del medicamento...</Typography>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: 3,
        marginTop: 20,
      }}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>
        Detalles del Medicamento
      </Typography>

      <TabsDetalle
        handleChangeTab={handleChangeTab}
        tabValue={tabValue}
        medicamento={medicamento}
      />
    </Box>
  );
}

export default Detalles;
