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
router.get('/loaderio-a66186c2eac8f9b8e18b6ae2d334619a.txt', (req, res) => {
    res.sendFile('loaderio-a66186c2eac8f9b8e18b6ae2d334619a.txt')
})

module.exports = router;