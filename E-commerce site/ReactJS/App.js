
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/LoginPage/Login';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Register from './Components/RegisterPage/Register';
// import loginBackground from "./Images/back.jpg";
import Home from './Components/HomePage/Home';
import Cart from './Components/HomePage/Cart';
import { useState } from 'react';
import CartContext from './Components/HomePage/CartContext';


function App() {

  const [counts, setCounts] = useState({});
  const [selectedSize, setSelectedSize] = useState({});

  return (
    <CartContext.Provider value={{ counts, setCounts, selectedSize, setSelectedSize }}>
    <BrowserRouter>
          <div>
            
            <p><NavLink to="/"></NavLink></p>
            <p><NavLink to="/Register"></NavLink></p>
            <p><NavLink to="/Home"></NavLink></p>
            <p><NavLink to="/Cart"></NavLink></p>
          </div>
          
          <Routes>
            <Route path="/" element={<Login></Login>}></Route>
            <Route path="/Register" element={<Register></Register>}></Route>
            <Route path="/Home" element={<Home></Home>}></Route>
            <Route path="/Cart" element={<Cart></Cart>}></Route>
          </Routes>
           
    </BrowserRouter>
    </CartContext.Provider>
    
  );
}

export default App;
