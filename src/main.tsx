import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./assets/pages/Home/index.tsx";
import { ThemeProvider } from "styled-components";
import Theme, { Global } from "./assets/styles/styles.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={Theme}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    <Global />
  </ThemeProvider>
);
