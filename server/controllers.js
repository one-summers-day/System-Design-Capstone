const models = require('./models.js');

module.exports = {
  myList: (req, res) => {
    const { page, count } = req.params;
    models.getProductList(page, count)
      .then((response) => {
        res.send(response);
      })
      .catch((error) => {
        res.status(404).send(error);
      });
  },
};