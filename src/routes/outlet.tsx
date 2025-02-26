import Register from "@/components/auth/register/register";
import Test111 from "@/components/testCSS";
import { Route, Routes } from "react-router";

function Outlet() {
  <Routes>
    <Route path="register" element={<Register />} />
    <Route path="test" element={<Test111 />} />
  </Routes>;
}

export default Outlet;
