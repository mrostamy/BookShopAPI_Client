import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App";
import TestMe from "./testme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="app">
          <Route index element={<App />} />
          <Route path="test" element={<TestMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
