import { useLoaderData } from "react-router-dom";
import { api } from "../api/axios.js";
import React from "react";
import { toast } from "react-toastify";

export async function loader() {
  try {
    const res = await api.get("/api/products");

    console.log("🚀 products:", res);

    return Array.isArray(res.data) ? res.data : [];
  } catch (error) {
    console.error("❌ loader error:", error);

    // 🔥 toast notification (UX)
    toast.error("Erreur lors du chargement des produits");

    return [];
  }
}

export default function Home() {
  const products = useLoaderData();
  console.log("🚀 ~ Home ~ products :", products);

  if (!Array.isArray(products)) {
    return <div>No products found.</div>;
  }

  return (
    <div>
      <h1>Products</h1>

      {products.map((p) => (
        <div key={p.id || p._id}>
          {p.title} - {p.price}€
        </div>
      ))}
    </div>
  );
}
