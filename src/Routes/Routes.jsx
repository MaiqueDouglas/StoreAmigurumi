import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home"
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Collection from "../Pages/Collection/Collection";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Checkout from "../Components/Checkout/Checkout";
import CartModal from "../Components/CartModal/CartModal";




function AppRoutes() {
  return (
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Collection" element= {<Collection/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/cartModal" element={<CartModal/>} />
        
      </Routes>
    
  );
}

export default AppRoutes;
