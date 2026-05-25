import { redirect, useLoaderData } from "react-router-dom";
import { api } from "../api/axios.js";
import React from "react";

export async function loader() {
  try {
    const res = await api.get("/auth/me");
    return res.data.user;
  } catch {
    return redirect("/login");
  }
}

export default function Profile() {
  const user = useLoaderData();

  return (
    <div>
      <h1>Profile</h1>
      <p>{user?.email}</p>
    </div>
  );
}
