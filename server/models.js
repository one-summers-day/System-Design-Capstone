const pool = require('../db/index.js');

pool.on('error', (err, client) => {
  console.error('Critical error: failed to connect to PostgreSQL with error message ', err);
  process.exit(-1);
});

module.exports = {
  getProductList: (page, count) => {
    return pool.connect()
    .then(client => {
      return client.query('SELECT * FROM product_overview LIMIT ' + page * count)
        .then(res => {
          console.log(client.query)
          client.release();
          return (res.rows);
        })
        .catch(err => {
          client.release();
          return err;
        })
    });
  },

  getProductInfo: (product_id) => {
    let productInfo;
    return pool.connect()
    .then(client => {
      return client.query('SELECT * FROM product_overview WHERE id = ' + product_id)
        .then(res => {
          client.release();
          productInfo = (res.rows);
          return res.rows;
        })
        .catch(err => {
          client.release();
          return err;
        })
    })
  },

  getProductFeatures: (product_id) => {
    let productInfo;
    return pool.connect()
    .then(client => {
      return client.query('SELECT * FROM features WHERE id = ' + product_id)
        .then(res => {
          client.release();
          productInfo = (res.rows);
          return res.rows;
        })
        .catch(err => {
          client.release();
          return err;
        })
    })
  },

  getProductStyles: (product_id) => {
    let productInfo;
    return pool.connect()
    .then(client => {
      return client.query('SELECT * FROM styles WHERE product_id = ' + product_id)
        .then(res => {
          client.release();
          productInfo = (res.rows);
          return res.rows;
        })
        .catch(err => {
          client.release();
          return err;
        })
    })
  },

  getProductPhotos: (style_id) => {
    let productInfo;
    return pool.connect()
    .then(client => {
      return client.query('SELECT * FROM photos WHERE style_id = ' + style_id)
        .then(res => {
          client.release();
          productInfo = (res.rows);
          return res.rows;
        })
        .catch(err => {
          client.release();
          return err;
        })
    })
  },

  getSkus: (style_id) => {
    let productInfo;
    return pool.connect()
    .then(client => {
      return client.query('SELECT * FROM skus WHERE style_id = ' + style_id)
        .then(res => {
          client.release();
          productInfo = (res.rows);
          return res.rows;
        })
        .catch(err => {
          client.release();
          return style_id;
        })
    })
  },

  patchSkus: (sku_id, quantityChange) => {
    let productInfo;
    return pool.connect()
    .then(client => {
      return client.query('UPDATE skus SET quantity = quantity + ' + quantityChange + ' WHERE id = ' + sku_id)
        .then(res => {
          client.release();
          productInfo = (res.rows);
          return "Operation successful. Use getProductInfo to see updated skus.";
        })
        .catch(err => {
          client.release();
          return "error occurred here";
        })
    })
  }
};


