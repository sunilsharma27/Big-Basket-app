import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = () => {
    // use params is a hook that return an object of key/value paires of URL parameter
    const { id } = useParams();
    const navigate = useNavigate();

    const [products,setproducts] = useState(
            {
                name:"",
                image:"",
                price:"",
                qty:"",
                info:"",
    
            }
        );
        const fetchProduct = async()=>
        {
            try{
                let res =await axios.get(`http://127.0.0.1:5000/api/products/${id}`);
                console.log(res.data)
                
                setproducts(res.data)
            }catch(err){
                console.log("Falied to fatch prodyct:",err)
            }
        };
        useEffect(()=>
        {
            fetchProduct()
        },[]);
       const handlechange = (e)=>
            {
                const {name, value} = e.target;
                setproducts({
                    ...products,
                    [name]:value
                });
            }
        const updateImage = async (event) =>
            {
                let imageFile = event.target.files[0];
                let base64Image = await convertBase64String(imageFile);
                setproducts({
                    ...products,
                    image : base64Image
                });
            };
        const convertBase64String = (imageFile) => {
                return new Promise((resolve,reject)=>
                {
                    let fileReader = new FileReader();
                    fileReader.readAsDataURL(imageFile);
                    fileReader.addEventListener('load',()=>
                    {
                        if(fileReader.result){
                            resolve(fileReader.result);
                        }
                        else{
                            reject("Error Occurred")
                        }
                    });
                    
                });
            };
const handleSubmit = async (e)=>
{
    e.preventDefault();
    try{
        await axios.put(`http://127.0.0.1:5000/api/products/${id}`,products);
        console.log("productupdated")
        navigate("/productdetail")
    }catch(err){
        console.error("updated Failed",err)
        alert('updated failed Please Try Again',err)
    }
}


    return (
        <>
           {/* <pre>{JSON.stringify(products)}</pre> */}
            <div className="containear mt-3 mx-5">
                <div className="row mx-2">
                    <div className='col'>
                        <div className="body ms-5 " >
                            <h3 style={{ color: "green" }}>Update Product</h3>
                            <p><b>BigBasket</b> is an Indian online grocer headquartered in Pochaner,Shajapur M.P. India and currently owned by Tata Digital.It was the first online grocer in India, set up in 2011.It is a registered compony with the name</p>
                            <div className="row ">
                                <div className="col-md-6">
                                    <div className="card">
                                        <div style={{ backgroundColor: "lightgray" }} className="card-header text-white">
                                            <h1>Selected Product</h1>
                                        </div>
                                        <div className="card-body bg-light">
                                            <form onSubmit={handleSubmit} >
                                                <div className="form-group">
                                                <input style={{ border: "1px solid grey" }}type="text"
                                                value={products.name} name="name" onChange={handlechange}
                                                className="form-control" placeholder="Product Name" />
                                                
                                                </div>

                                                <div className="form-group mt-3">
                                                    <input type="file" style={{ border: "1px solid grey ", width: "86%",height:"100%", background: "white", color: "white" }} 
                                                    onChange={updateImage}  name="image"
                                                    id="product-image" />
                                                    <button type='button'>Browse</button>
                                                </div>
                                                <div className="form-group mt-3">
                                                    <input style={{ border: "1px solid grey" }} type="number"
                                                    value={products.price} name='price' onChange={handlechange}
                                                     className="form-control" placeholder="Price" />

                                                </div>
                                                <div className="form-group mt-3">
                                                    <input style={{ border: "1px solid grey" }} type="number" 
                                                     value={products.qty} name='qty' onChange={handlechange}
                                                    className="form-control" placeholder="Available Qty" />
                                                </div>
                                                <div className="form-group mt-3">

                                                    <textarea style={{ width: "100%" }} id=""
                                            value={products.info} name='info' onChange={handlechange}
                                                    > for curry</textarea>
                                                </div>
                                                <button id='pd'>CREATE</button>
                                                
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UpdateProduct;
