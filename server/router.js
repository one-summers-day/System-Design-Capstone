const express = require('express');
const router = express();
const {getProductList} = require('./controllers.js');
const {getProductInfo} = require('./controllers.js');
const {getProductStyles} = require('./controllers.js');
const {patchSkus} = require('./controllers.js');

const models = require('./models.js');

router.get('/products', getProductList);
router.get('/products/:product_id', getProductInfo);
router.get('/products/:product_id/styles', getProductStyles);
router.patch('/products/sku/:sku_id', patchSkus);

module.exports = router;