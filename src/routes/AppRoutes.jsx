import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Callback from "../pages/Callback";
import Contact from "../pages/Contact";
import Appointmnent from "../pages/Appointment";
import HealthPackages from "../pages/HealthPackages"
import Doctors from "../pages/Doctors";
import Hospitals from"../pages/Hospitals"
import Career from "../pages/Career";
import About from "../pages/About";
import Register from "../pages/Register";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />}/>
    <Route path="/callback" element={<Callback />}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/appointments" element={<Appointmnent/>}/>
    <Route path="/health-checkup" element={<HealthPackages/>}/>
    <Route path="/doctors" element={<Doctors/>}/>
    <Route path="/hospitals" element={<Hospitals/>}/>
    <Route path="/career" element={<Career/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/register" element={<Register/>}/>
    
  </Routes>
);

export default AppRoutes;
