
require('dotenv').config();

const express = require('express')
const mongoose =require('mongoose')
var cors = require('cors')
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
app.use(cors({
    origin: 'http://localhost:3000',
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.options('*', cors())
app.all('', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    //Auth Each API Request created by user.
    next();
});


app.use('/api/products',apiProductRoute);
app.use('/api/products/:_id', apiProductRoute);
app.use(express.static('public'));

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/products', (req, res) => res.send('Products'))

app.listen(port, () => console.log(`App listening on port ${port}!`))

