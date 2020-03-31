var Product = require('../../models/products.models');

module.exports.index = async function (req, res) {
    var products = await Product.find();
    res.json(products);
};

module.exports.create = async function (req, res, next) {

    const { body } = req;

    if (!body.id) {
        return res.status(422).json({
            errors: {
                id: 'is required',
            },
        });
    }
    if (!body.name) {
        return res.status(422).json({
            errors: {
                name: 'is required',
            },
        });
    }
    if (!body.img) {
        return res.status(422).json({
            errors: {
                img: 'is required',
            },
        });
    }
    if (!body.price) {
        return res.status(422).json({
            errors: {
                price: 'is required',
            },
        });
    }
    if (!body.inventory) {
        return res.status(422).json({
            errors: {
                inventory: 'is required',
            },
        });
    }
    if (!body.rating) {
        return res.status(422).json({
            errors: {
                rating: 'is required',
            },
        });
    }

    // var products = await Product.create(body);
    // res.json(products);
    const products = new Product(body);
    return products.save()
        .then(() => res.json({ products: products.toJSON() }))
        .catch(next);

}

module.exports.getId= async function (req, res ,next) {
    var i= req.params._id;

    var ids = await Product.findById(i);
   
    res.json(ids);  
    next();
}

module.exports.delete = async function (req, res, next) {
    return Product.findByIdAndRemove(req.params._id)
        .then(() => res.sendStatus(200))
        .catch(next);
}
module.exports.put = async function (req, res ,next) {
    var id= req.params._id;
    var product = await Product.findById({_id:id});
    if(product === null){
        var products = await Product.create(req.body);
        res.json(products);
    }else{
        var products = await Product.findByIdAndUpdate({_id:id},(req.body));
        res.json(products);
    }
    next();
}

