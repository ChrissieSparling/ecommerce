const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// GET route to findAll catergories and err messages
router.get('/', (req, res) => {
  Category.findAll({
    include:[Product]
  }).then((categories) => {
    res.status(200).json(categories);
  }).catch(err=> {
    console.log(err);
    res.status(400).json(err)
  });
});

//GET route to show Catergory by id
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {include:[Product]});
  if (!categoryData) {
    res.status(404).json({ message: "No category with this id! Try again."});
    return;
  }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//POST route to CREATE A newCatergory
router.post('/', (req, res) => {
  Category.create(req.body)
  .then((newCategory) => res.status(200).json(newCategory))
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

//PUT route to UPDATE A Catergory by id
router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id
      },
    });
    if(!categoryData[0]) {
      res.status(404).json({ message: "No category with this id! Try again."});
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//DELETE route to DELETE A Catergory by id
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedCategory) => {
      res.status(200).json(deletedCategory);
    })
    .catch((err) => res.status(400).json(err));
});
// export the router to get all the applicable routes
module.exports = router;