import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Register from "./components/auth/register/register";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
  </StrictMode>
);
