import Grid from "@mui/material/Grid";
import React from "react";

import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    title: "MacBook Pro",
    price: 2500,
  },

  {
    id: 2,
    title: "iPhone 15",
    price: 1200,
  },

  {
    id: 3,
    title: "iPad Pro",
    price: 1800,
  },
];

export default function ProductsGrid() {
  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid key={product.id} sx={{ sx: 12, sm: 6, md: 4 }}>
          <ProductCard {...product} />
        </Grid>
      ))}
    </Grid>
  );
}
