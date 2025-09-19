import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

let ProductDeetail=(props)=> 
     {
        
        
       let[products,setproducts]=useState([])
       let navigate=useNavigate()
       const fetchProduct = async ()=>
       {
        try{
            const response = await axios.get("http://127.0.0.1:5000/api/products/");
            setproducts(response.data)
            
        }catch(err){
            console.error("Failed to fatch products",err)
        }
       }
                  useEffect(()=>{
                    fetchProduct()
    },[]);
    const handledeleat = async (id)=>
    {
       
        try{
            let res =await axios.delete(`http://127.0.0.1:5000/api/products/${id}`);
            fetchProduct()
            navigate("/productdetail")
            
        }catch(err){
            console.log("Deleat Failed",err)
        }
    }

            return (  
                   <>
                   <div className="containear m-5">
                       <div className="row">
                           <div className='col'>
                               <div className="body ms-5 " >
                                   <h3>Products Details</h3>
                                   <p><b>BigBasket</b> is an Indian online grocer headquartered in Pochaner,Shajapur M.P. India and currently owned by Tata Digital.It was the first online grocer in India, set up in 2011.It is a registered compony with the name</p>
                                  <button id='pd'><Link to="/createnewproduct" className='nav-link'> CREATE NEW </Link></button>
                                  <div className="table-responsive mt-4">
                                           <table style={{border:"2px solid black"}} className=" table table-hover text-center table-bodered">
                                               <thead  style={{backgroundColor:"black", height:"30px"}} className=" table-dark text-white ">
                                                <tr><th scope='col '>Sno</th>
                                                <th scope='col'>Product</th>
                                                <th scope='col'>Name</th>
                                                <th scope='col'>Price</th>
                                                <th scope='col'>Qty</th>
                                                <th scope='col'>Action</th>
                                                </tr>
                                               </thead>
                                               <tbody>
                                                   {
                                                       products.length > 0 ?
                                                           products.map((product,index) => {
                                                               return (
                                                                   <tr key={product._id}>
                                                                    <td>{index+1}</td> 
                                                                    <td><img src={product.image} height={40} width={60}alt="" /></td>  
                                                                   <td>{product.name}</td>
                                                                   <td>{product.price}</td>
                                                                   <td>{product.qty}</td>
                                                                   <td>
                                                                    <button
                                                                    onClick={()=> navigate(`/update/${product._id}`)}
                                                                     className='btn btn-sm btn-danger m-2' style={{background:"linear-gradient(to right,#1A001A 0%,#6A006A 10%)"}}> UPDATE </button>
                                                                    <button onClick={()=>handledeleat(product._id)} className='btn btn-sm btn-danger' style={{background:"linear-gradient(to right,#310000 0%,#030000 10%)"}} > DELEATE </button>
                                                                   </td>
                                                                
                                                                       
       
                                                                   </tr>
                                                               )
                                                           }) :
                                                           <h1>No Data found</h1>
                                                       }
                                                     </tbody>
       
                                           </table>
                                           </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   </>
               );
}

export default ProductDeetail;

