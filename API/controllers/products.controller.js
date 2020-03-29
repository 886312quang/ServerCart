var Product = require('../../models/products.models');

module.exports.index = async function(req,res) {
    var products = await Product.find();
    res.json(products);
};