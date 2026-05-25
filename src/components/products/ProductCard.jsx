import { Card, CardContent, Typography, Button, Stack } from "@mui/material";
import React from "react";

export default function ProductCard({ title, price }) {
  return (
    <Card
      sx={{
        p: 2,
        height: "100%",
        transition: "0.3s",

        "&:hover": {
          transform: "translateY(-5px)",
        },
      }}
    >
      <CardContent>
        <Typography variant="h5" fontWeight="bold">
          {title}
        </Typography>

        <Typography color="primary" variant="h6" mt={2}>
          {price} €
        </Typography>

        <Stack mt={3}>
          <Button variant="contained">Acheter</Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
