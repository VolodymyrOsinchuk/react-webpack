import { AppBar, Toolbar, Typography, Button, Stack } from "@mui/material";
import React from "react";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          React App
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>

          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>

          <Button color="inherit" component={Link} to="/register">
            Register
          </Button>

          <Button color="inherit" component={Link} to="/profile">
            Profile
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
