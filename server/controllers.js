const models = require('./models.js');

module.exports = {
  getProductList: (req, res) => {
    const { page, count } = req.query;
    models.getProductList(page, count) 
      .then((products) => {
        res.send(products);
      })
      .catch((error) => {
        res.status(404).send(error);
      });
  },

  getProductInfo: (req, res) => {
    const { product_id } = req.query;
    let productInfoComplete;
    models.getProductInfo(product_id) 
      .then((productInfo) => {
        productInfoComplete = productInfo[0];
      })
      .catch((error) => {
        res.status(404).send(error);
      });
    
    //this needs a refactor. right now we are calling two promises simultaneously which is dangerous, because the promises may resolve at different times.
    //instead, the better idea is to put the second promise inside a .then() inside the first promise to ensure it executes in order.
    models.getProductFeatures(product_id)
      .then((productFeatures) => {
        productInfoComplete.features = productFeatures;
        res.send(productInfoComplete)
      })
      .catch((error) => {
        res.status(404).send(error);
      });
  },

  getProductStyles: (req, res) => {
    const { product_id } = req.query;
    let productStylesComplete = {"product_id" : product_id};
    let productStylesResults = {};
    models.getProductStyles(product_id) 
      .then((productStyles) => {
        productStylesResults = productStyles[0];
        delete productStylesResults.product_id;
      })

      .then(() => {
        models.getProductPhotos(String(productStylesResults.style_id))
        .then((productPhotos) => {
          for (let counter = 0; counter < productPhotos.length; counter++){
            delete productPhotos[counter].id;
            delete productPhotos[counter].style_id;
          }
          productStylesResults.photos = productPhotos;
          res.send(productStylesResults)
        })
        .catch((error) => {
          res.status(404).send(error);
        })
      })

      .then(() => {
        models.getSkus(String(productStylesResults.style_id))
        .then((skus) => {
          productStylesResults.skus = skus;
          res.send(productStylesResults);
        })
        .catch((error) => {
          res.status(404).send(error);
        })
      })

      .catch((error) => {
        res.status(404).send(error);
      });
  },
};