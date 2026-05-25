import { Form, redirect } from "react-router-dom";
import { api } from "../api/axios.js";
import React from "react";

export async function action({ request }) {
  const formData = await request.formData();

  await api.post("/auth/register", {
    email: formData.get("email"),
    password: formData.get("password"),
  });

  return redirect("/login");
}

export default function Register() {
  return (
    <Form method="post">
      <input name="email" />
      <input name="password" type="password" />
      <button>Register</button>
    </Form>
  );
}
