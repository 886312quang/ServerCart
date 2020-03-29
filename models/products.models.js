var mongoose = require('mongoose');

var productsSchema = new mongoose.Schema({
    id: Number,
    name: String,
    img: String,
    price :Number,
    inventory: Number,
    rating: Number
});

var Product = mongoose.model('Product',productsSchema,'products')

module.exports = Product;