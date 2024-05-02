import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home"
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Collection from "../Pages/Collection/Collection";



function AppRoutes() {
  return (
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Collection" element= {<Collection/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    
  );
}

export default AppRoutes;
