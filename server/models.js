const pool = require('../db/index.js');

pool.on('error', (err, client) => {
  console.error('Critical error: failed to connect to PostgreSQL with error message ', err);
  process.exit(-1);
});

module.exports = {
  getProductList: (page, count) => {
    return pool.connect()
    .then(client => {
      return client.query('select * FROM product_overview LIMIT 10')
        .then(res => {
          console.log(client.query)
          client.release();
          return ("You requested " + page + " worth of data with " + count + " per page.");
        })
        .catch(err => {
          client.release();
          return err.stack;
        })
    });
  },
};