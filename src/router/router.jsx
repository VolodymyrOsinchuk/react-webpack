import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Loader from "../components/common/Loader";

import { loader as HomeLoader } from "../pages/Home";
import { action as LoginAction } from "../pages/Login";
import { action as RegisterAction } from "../pages/Register";
import { loader as ProfileLoader } from "../pages/Profile";

// 🔥 lazy pages
const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const Profile = lazy(() => import("../pages/Profile"));

// 🔥 wrapper suspense (important)
const withSuspense = (Component) => (
  <Suspense fallback={<Loader />}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: withSuspense(Home),
        loader: HomeLoader,
      },

      {
        path: "login",
        element: withSuspense(Login),
        action: LoginAction,
      },

      {
        path: "register",
        element: withSuspense(Register),
        action: RegisterAction,
      },

      {
        path: "profile",
        element: withSuspense(Profile),
        loader: ProfileLoader,
      },
    ],
  },
]);
