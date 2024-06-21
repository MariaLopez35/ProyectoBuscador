import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Header = () => {
  return (
    <>
      <Grid container>
        <Grid item>
          <AppBar component="nav">
            <Toolbar>
              <Typography
                variant="h3"
                component="div"
                textAlign="center"
                sx={{ flexGrow: 1 }}
              >
                BUSCADOR PARA PROFESIONALES
              </Typography>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
