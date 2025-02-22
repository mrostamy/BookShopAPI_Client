import "./App.css";
import { Box } from "@mui/material";
import { Outlet } from "react-router";
import Register from "./components/auth/register/register";

function App() {
  return (
    <>
      <Register/>
    </>
  );
}

export default App;
