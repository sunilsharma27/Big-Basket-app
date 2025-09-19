const mongoose = require('mongoose');
const ProductShema = new mongoose.Schema({
    name:{ type : String ,required : true},
    image:{ type : String ,required : true},
    price:{ type : Number ,required : true},
    qty:{ type : Number ,required : true},
    info:{ type : String ,required : true}
},{timestamps : true});

const Product = mongoose.model('Product', ProductShema);
module.exports = Product;