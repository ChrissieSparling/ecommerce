// import all the models since we will be assigning their associations below
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category);

// Categories have many Products
Category.hasMany(Product);

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { through: ProductTag});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { through: ProductTag});

module.exports = {
  Product:Product,
  Category:Category,
  Tag:Tag,
  ProductTag:ProductTag,
};