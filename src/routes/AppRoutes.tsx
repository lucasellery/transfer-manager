import {
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "@/pages/Home/Home";
import NewRegister from "@/pages/NewRegister/NewRegister";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/new-register" element={<NewRegister />}/>
    </Routes>
  )
}

export default AppRoutes;
