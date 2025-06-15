var express = require('express');
var { products } = require('../data/mockData');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json(products);
});

router.post('/filter', (req, res) => {
  const category = req.body;
  if(!category){
    res.status(200).json(products);
    return;
  }
  const data = products.filter((item) => (item.category = category));
  if (data) res.status(200).json(data);
});

module.exports = router;
