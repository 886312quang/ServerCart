var mongoose = require('mongoose');

var productsSchema = new mongoose.Schema({
    id: Number,
    name: String,
    img: String,
    price :Number,
    inventory: Number,
    rating: Number
});

productsSchema.method.toJSON = function (){
    return {
        _id:this._id,
        it:this.id,
        name:this.name,
        img:this.img,
        price:this.price,
        inventory:this.inventory,
        rating:this.rating
    }
}
var Product = mongoose.model('Product',productsSchema,'products')

module.exports = Product;