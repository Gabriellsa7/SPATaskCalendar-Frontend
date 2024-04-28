import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/index.tsx";
import { ThemeProvider } from "styled-components";
import Theme, { Global } from "./styles/styles.ts";
import TaskDescription from "./components/TaskDescription/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/task/:taskId",
        element: <TaskDescription />,
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
