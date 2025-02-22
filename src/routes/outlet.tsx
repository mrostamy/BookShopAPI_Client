import Register from "@/components/auth/register/register";
import { Route, Routes } from "react-router";

function Outlet() {
  <Routes>
    <Route path="register" element={<Register />} />
  </Routes>;
}

export default Outlet;
