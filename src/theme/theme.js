import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#6C63FF",
    },

    secondary: {
      main: "#FF6584",
    },

    background: {
      default: "#F5F7FB",
    },
  },

  typography: {
    fontFamily: "Inter, sans-serif",
  },

  shape: {
    borderRadius: 12,
  },
});

export default theme;
