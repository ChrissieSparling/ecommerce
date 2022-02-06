const { Product } = require('../models');

const productData = [
  {
    product_name: 'Elder Wand',
    price: 75.00,
    stock: 3,
    category_id: 1,
  },
  {
    product_name: 'MoonCatchers',
    price: 50.00,
    stock: 15,
    category_id: 2,
  },
  {
    product_name: 'bullet earrings',
    price: 20.99,
    stock: 12,
    category_id: 3,
  },
  {
    product_name: 'snake',
    price: 49.99,
    stock: 2,
    category_id: 4,
  },
  {
    product_name: 'native-made drums',
    price: 39.99,
    stock: 22,
    category_id: 5,
  },
  {
    product_name: 'Birch Wand',
    price: 55.00,
    stock: 3,
    category_id: 1,
  },
  {
    product_name: 'Mobile-MoonCatchers',
    price: 90.00,
    stock: 15,
    category_id: 2,
  },
  {
    product_name: 'charm earrings',
    price: 6.99,
    stock: 12,
    category_id: 3,
  },
  {
    product_name: 'spider with egg sack',
    price: 49.99,
    stock: 2,
    category_id: 4,
  },
  {
    product_name: 'native-made dream-catchers',
    price: 25.00,
    stock: 10,
    category_id: 5,
  },
  {
    product_name: 'Magic Wand',
    price: 100.00,
    stock: 3,
    category_id: 1,
  },
  {
    product_name: 'Half-moon DreamCatchers',
    price: 25.00,
    stock: 5,
    category_id: 2,
  },
  {
    product_name: 'Spiral Necklace',
    price: 29.99,
    stock: 9,
    category_id: 3,
  },
  {
    product_name: 'Wizard coming out of the lake',
    price: 199.99,
    stock: 1,
    category_id: 4,
  },
  {
    product_name: 'native-made personal totems',
    price: 20.99,
    stock: 17,
    category_id: 5,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
