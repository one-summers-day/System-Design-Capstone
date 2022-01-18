const express = require('express');
const router = express();
const {myList} = require('./controllers.js');
const models = require('./models.js');

router.get('/products', myList);

module.exports = router;