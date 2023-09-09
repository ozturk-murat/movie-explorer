import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#440b4f",
    },
    error: {
      main: red.A400,
    },
    text:{
      primary: "#FFFFFF"
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body:{
            background: "linear-gradient(to right, #0f0c29, #302b63, #24243e) !important"
        }
      },
    },
  }
});

export default theme;