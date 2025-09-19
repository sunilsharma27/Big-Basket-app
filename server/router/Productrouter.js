const express = require('express');
const router = express.Router();
const Product = require("../models/Products");
const { body,validationResult } = require("express-validator");

// get all products
// This route is used to get all product from the data base
router.get("/products",async(req,res)=>{
    try{
        // find all product in the database and return them as JSON response
        const products = await Product.find();
        res.status(200).json(products);
    }catch(err){
        console.log(err);
        res.status(500).json({
            message:"Internal server error"
        })
    }
    
})
// get single product
// this route is used to get single product by its Id

router.get("/products/:id",async(req,res)=>{
    try{
        // find all product in the database and return them as JSON response
        const product = await Product.findById(req.params.id)
        // if the product is not found, return a 404 error response
        if(!product){
            return res.status(404).json({message:"Product not found"})
        }
        res.status(200).json(product);
    }catch(err){
        console.log(err)
        res.status(500).json({
        message:"Internel server error",

        });
    }
});
// delete product
router.delete("/products/:id",async(req,res)=>{
    try{
        const product = await Product.findByIdAndDelete(req.params.id)
        if(!product)
        {
            return res.status(404).json({message:"Product not found"})
        }
        res.status(200).json({message: "Product deleted succefully",product})

    }catch(err){
        console.log(err)
        res.status(500).json({
            message:"Internal server error"
        })
    }
})
// create all product
router.post("/products",[
    body('name').notEmpty().withMessage("Name is required"),
    body('image').notEmpty().withMessage("Image is required"),
    body('price').notEmpty().withMessage("Price is required"),
    body('qty').notEmpty().withMessage("Quantity is required"),
    body('info').notEmpty().withMessage("information is required"),
],
async(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    try{
        let product = 
        {
            name: req.body.name,
            image: req.body.image,
            price: req.body.price,
            qty: req.body.qty,
            info: req.body.info,
        };
        product = new Product(product)
        // save the product to the data base
        product = await product.save();
        // if the product is saved succefully , send a response with the product data
        res.status(200).json({
            product : product
        })

    }catch(err){
        console.log(err);
        res.status(500).json({
            message:"Internel server error",
        })

    }
})
// update product
router.put("/products/:id",async(req,res)=>{
    try{
        let product = await Product.findById(req.params.id);
        if(!product){
            return res.status(404).json({message:"Product not found"})
        };
        let Update_product = 
        {
            name: req.body.name,
            image: req.body.image,
            price: req.body.price,
            qty: req.body.qty,
            info: req.body.info,
        };
        // update product with the new data
         product = await Product.findByIdAndUpdate(
            req.params.id,
            {
            $set : Update_product,
           },
        {new:true}
    );
        res.status(200).json({
            message:`update single product with id ${req.params.id}`,product
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            message:"Internel server error",
        })
    }
})
module.exports = router;