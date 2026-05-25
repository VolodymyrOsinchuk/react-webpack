import React from "react";
import { Box, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Box
      display="flex"
      height="100vh"
      sx={{ justifyContent: "center", alignItems: "center" }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
