import React, { useState } from 'react';
import axios from 'axios';
import UpdateProduct from './UpdateProduct';
import Product from './Product';
import { useNavigate } from 'react-router-dom';

let  Creatnewpro=()=>{
    let navigate=useNavigate()
    const [products,setproducts] = useState(
        {
            name:"",
            image:"",
            price:"",
            qty:"",
            info:"",

        }
    )
    let update = (e)=>
    {
        setproducts({
            ...products,
            [e.target.name]:e.target.value
            
        })
    }
    let updateImage = async (event) =>
    {
        let imageFile = event.target.files[0];
        let base64Image = await convertBase64String(imageFile);
        setproducts({
            ...products,
            image : base64Image
        });
    };
    let convertBase64String = (imageFile) => {
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
    let datasubmit=(event)=>
    {
     event.preventDefault()
     let url = "http://127.0.0.1:5000/api/products/";
            axios.post(url,products).then((res)=>{
                console.log("data has been submited")
                navigate("/Product")
                
        
            }).catch((err)=>{
               console.log(err)
        
            })
    }
    
        return (
            <>
            {/* <pre>{JSON.stringify(products)}</pre> */}
                <div className="containear mt-3 mx-5">
                    <div className="row mx-2">
                        <div className='col'>
                            <div className="body ms-5 " >
                                <h3 style={{ color: "green" }}>Create New Product</h3>
                                <p><b>BigBasket</b> is an Indian online grocer headquartered in Pochaner,Shajapur M.P. India and currently owned by Tata Digital.It was the first online grocer in India, set up in 2011.It is a registered compony with the name</p>
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="card">
                                            <div style={{ backgroundColor: 'grey' }} className="card-header text-white">
                                                <h1>New Product</h1>
                                            </div>
                                            <div className="card-body bg-light">
                                                <form onSubmit={datasubmit} >
                                                    <div className="form-group">
                                                        
                                                        <input style={{ border: "1px solid grey" }} type="text"onChange={update} value={products.name} name="name" className="form-control" placeholder="Product Name" />
                                                    </div>
                                                    
                                                        <div className="form-group mt-3">
                                                    <input type="file" name='image' onChange={updateImage}  style={{ border: "1px solid grey ", width: "84%", background: "white", color: "white" }} id="product-image" />
                                                    <button type='button'>Browse</button>
                                                      </div>
                                                    <div className="form-group mt-3">
                                                        <input style={{ border: "1px solid grey" }} type="number"onChange={update} value={products.price} name="price" className="form-control" placeholder="Price" />

                                                    </div>
                                                    <div className="form-group mt-3">
                                                        <input style={{ border: "1px solid grey" }} type="number" onChange={update} value={products.qty} name="qty"className="form-control" placeholder="Available Qty" />
                                                    </div>
                                                    <div className="form-group mt-3">

                                                        <textarea style={{ width: "100%" }}onChange={update} value={products.info} name="info" placeholder='Genrel Info'></textarea>
                                                    </div>
                                                    <div className="form-group mt-3">
                                                        <input type="submit" value="CREATE" id='pd'/>
                                                        </div>
                                                
                                                </form>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div >
                        </div >
                    </div >
                </div >
            </>
        );
    
}

export default Creatnewpro;
