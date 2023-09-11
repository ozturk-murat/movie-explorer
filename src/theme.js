import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fbc500",
    },
    secondary: {
      main: "#fbc500",
    },
    error: {
      main: "#FF0000",
    },
    text: {
      primary: "#333333",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          boxShadow: "none",
          borderBottom: "1px solid #fbc500",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& fieldset": {
            borderColor: "#fbc500",
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          height: 56,
          borderColor: "#fbc500",
          "&.Mui-selected": {},
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          ":hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#fbc500",
        },
      },
    },
  },
  typography: {
    h1: {
      fontFamily: "Edu VIC WA NT, sans-serif",
      fontWeight: 600,
    },
  },
});

export default theme;
