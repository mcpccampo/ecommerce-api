const products = require('../products.json');

module.exports = {
  products: (req, res) => {
    console.log('--> Products Route Accessed...');
    res.status(200).send(products);
  },
  
};
