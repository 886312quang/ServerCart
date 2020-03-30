var express = require('express');
var controller = require('../controllers/products.controller');
var router = express.Router();

router.get('/', controller.index);
router.post('/', controller.create); 
router.delete('/_:id', controller.delete);
  

module.exports = router;