import { Box, Button, Container, Typography, Stack } from "@mui/material";

import { HomeRounded, ErrorOutlineRounded } from "@mui/icons-material";

import { useRouteError, Link } from "react-router-dom";
import React from "react";

export default function ErrorPage() {
  const error = useRouteError();

  console.error(error);

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: "100vh",

          display: "flex",

          alignItems: "center",

          justifyContent: "center",

          textAlign: "center",
        }}
      >
        <Stack spacing={4} alignItems="center">
          <ErrorOutlineRounded
            color="error"
            sx={{
              fontSize: {
                xs: 80,
                md: 120,
              },
            }}
          />

          <Typography variant="h1" fontWeight="bold" color="error">
            404
          </Typography>

          <Typography variant="h4" fontWeight="bold">
            Oups... page introuvable
          </Typography>

          <Typography variant="body1" color="text.secondary" maxWidth={500}>
            La page que vous recherchez n'existe pas ou une erreur est survenue.
          </Typography>

          {error?.statusText && (
            <Typography color="error">{error.statusText}</Typography>
          )}

          {error?.message && (
            <Typography color="error">{error.message}</Typography>
          )}

          <Button
            component={Link}
            to="/"
            variant="contained"
            size="large"
            startIcon={<HomeRounded />}
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 3,
            }}
          >
            Retour à l'accueil
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
