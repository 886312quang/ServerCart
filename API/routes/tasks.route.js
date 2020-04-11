var express = require('express');
var controller = require('../controllers/tasks.controller');
var router = express.Router();

router.get('/', controller.index);

router.get('/:_id', controller.getId);
router.post('/', controller.create); 
router.delete('/:_id', controller.delete);
router.put('/:_id',controller.put);

module.exports = router;