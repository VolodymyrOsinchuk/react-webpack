import { Form, redirect } from "react-router-dom";
import { api } from "../api/axios.js";
import React from "react";

export async function action({ request }) {
  const formData = await request.formData();

  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  await api.post("/auth/login", data);

  return redirect("/profile");
}

export default function Login() {
  return (
    <Form method="post">
      <input name="email" placeholder="email" />
      <input name="password" type="password" />

      <button type="submit">Login</button>
    </Form>
  );
}
