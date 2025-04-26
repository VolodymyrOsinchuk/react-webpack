import React from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  AppBar,
  Toolbar,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Grid";

const HomeLayout = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Box>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Home Layout
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Box sx={{ marginTop: 10, padding: 2 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "primary.main",
                height: 200,
                borderRadius: 1,
              }}
            >
              <Typography variant="h5" color="white">
                Left Section
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 4 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "secondary.main",
                height: 200,
                borderRadius: 1,
              }}
            >
              <Typography variant="h5" color="white">
                Center Section
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 4 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "error.main",
                height: 200,
                borderRadius: 1,
              }}
            >
              <Typography variant="h5" color="white">
                Right Section
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h6">
            {isMobile ? "Mobile View" : "Desktop View"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeLayout;
