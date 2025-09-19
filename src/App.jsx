import React from "react";
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from "./componands/Home";
import Creatnewpro from "./root/Creatnewpro";
import UpdateProduct from "./root/UpdateProduct";
import Product from "./root/Product";
import ProductDeetail from "./root/ProductDeetail";
import Navbar from "./componands/Navbar";


let App=()=>
{
  return(
   <>
   
   <BrowserRouter>
     <Navbar/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/product" element={<Product/>}/>
       <Route path="/productdetail" element={<ProductDeetail/>}/>
       <Route path="/createnewproduct" element={<Creatnewpro/>}/>
       <Route path="/update/:id" element={<UpdateProduct/>}/>
    </Routes>
   </BrowserRouter>
   </>
  )
}
export default App