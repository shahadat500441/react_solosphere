import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./routes/Router";

import { RouterProvider } from "react-router-dom";
import AuthProvider from "./provider/AuthProvider";
import { Toaster } from 'react-hot-toast';
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      {" "}
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </AuthProvider>
  </StrictMode>
);
