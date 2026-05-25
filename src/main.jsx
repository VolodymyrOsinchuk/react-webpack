import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";

import App from "./App";

import { CssBaseline, ThemeProvider } from "@mui/material";

import theme from "./theme/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <App />
      <ToastContainer position="top-right" autoClose={2000} />
    </ThemeProvider>
  </React.StrictMode>,
);
