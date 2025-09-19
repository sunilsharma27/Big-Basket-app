import React, { Component, useEffect, useState } from 'react';

import "../css/bigbas.css"
import axios from 'axios';

let Product = () => {
    const [products, setproducts] = useState([]);
    useEffect(()=>
        {
            let url = "http://127.0.0.1:5000/api/products/";
            axios.get(url).then((res)=>{
                // console.log(res.data)
                setproducts(res.data)
        
            }).catch((err)=>{
               console.log(err)
        
            })
       
       },[])
    return (
        <>
        {/* <pre>{JSON.stringify(products)}</pre> */}
            <div className="containear m-5">
                <div className="row">
                    <div className='col'>
                        <div className="body ms-5 " >
                            <h3>Products Page</h3>
                            <p><b>BigBasket</b> is an Indian online grocer headquartered in Pochaner,Shajapur M.P. India and currently owned by Tata Digital.It was the first online grocer in India, set up in 2011.It is a registered compony with the name</p>
                            <div className="row row-cols-1 row-cols-md-3 g-4 ">
                                
                        
                            {
                                    products.length > 0 ? 
                                    products.map((product) => {
                                            return (
                                                <div  className="col ">
                                                <div className=" text-center card rounded-3 h-20 w-20 m-3 card-hover shadow">
                                                    <ul className='list-group list-group-flush list' key={product.id}>
                                                        <li className='list-group-item'><img src={product.image} width={175} height={175} /></li>

                                                        <li className='list-group-item'>Name:  {product.name}</li>
                                                        <li className='list-group-item'>Price: {product.price}</li>
                                                        <li className='list-group-item'>Qty: {product.qty}</li>
                                                    </ul>
                                                </div>
                                                </div>
                                            )
                                        })  :
                                        <h1>Product is not found</h1>
                                }
                            
                            
                            

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        
        </>
    );

}

export default Product;
