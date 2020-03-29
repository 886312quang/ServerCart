
require('dotenv').config();

const express = require('express')
const mongoose =require('mongoose')
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL, err =>{
    if(err){
        console.log(err);
    }
})




var bodyParser = require('body-parser')
const port = 9999;

var apiProductRoute = require('./API/routes/products.route');


var app = express()

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use( function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
     "X-Requested-With",
     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
     );
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next()
  });


app.use('/api/products',apiProductRoute);
app.use(express.static('public'));

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/products', (req, res) => res.send('Products'))

app.listen(port, () => console.log(`App listening on port ${port}!`))

