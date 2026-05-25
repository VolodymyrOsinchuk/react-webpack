import { useLoaderData } from "react-router-dom";
import { api } from "../api/axios.js";
import React from "react";
import { toast } from "react-toastify";

export async function loader() {
  try {
    const res = await api.get("/products");

    console.log("🚀 products:", res);

    return res.data ?? [];
  } catch (error) {
    console.error("❌ loader error:", error);

    // 🔥 toast notification (UX)
    toast.error("Erreur lors du chargement des produits");

    // 🔥 important pour React Router
    throw new Response("Failed to load products", {
      status: 500,
    });
  }
}

export default function Home() {
  const products = useLoaderData();
  console.log("🚀 ~ Home ~ products :", products);

  return (
    <div>
      <h1>Products</h1>

      {products.map((p) => (
        <div key={p.id}>
          {p.title} - {p.price}€
        </div>
      ))}
    </div>
  );
}
