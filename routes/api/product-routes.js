const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint


//GET route to SHOW * Catergories
router.get('/', (req, res) => {
  Product.findAll({
    include:[Category,Tag]
  }).then((products) => {
    res.status(200).json(products);
  }).catch(err=> {
    console.log(err);
    res.status(400).json(err)
  });
});

//GET route to SHOW A Product by id
router.get('/:id', async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, {include:[Category,Tag]});
  if (!productData) {
    res.status(404).json({ message: "No product with this id!"});
    return;
  }
    res.status(200).json(productData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//POST route to CREATE A NewProduct
router.post('/', (req, res) => {
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
  Product.create(req.body)
    .then((product) => {
      // Here we go with the crazy-- if there IS product-tags, we need to CREATE pairings to bulkCreate in the ProductTag model 
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // if NO product-tags EXIST, we will send back the following responses
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

//PUT route to UPDATE A Product by id
router.put('/:id', (req, res) => {
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((ProductTag) => {
      // findAll tags from ProductTag
      return ProductTag.findAll({ where: { product_id: req.params.id } });
    })
    .then((productTags) => {
      // GET list of current tag_ids
      const productTagIds = productTags.map(({ tag_id }) => tag_id);
      // CREATE filtered list of new tag_ids
      const newProductTags = req.body.tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            product_id: req.params.id,
            tag_id,
          };
        });
      // this will filter out and remove tags
      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);
      return Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    })
    .then((updatedProductTags) => res.status(200).json(updatedProductTags))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

//DELETE route to DELETE A Product by id
router.delete('/:id', (req, res) => {
  Product.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedProduct) => {
      res.status(200).json(deletedProduct);
    })
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
