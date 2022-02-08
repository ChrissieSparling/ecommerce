const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'wood wands',
  },
  {
    tag_name: 'dream catchers',
  },
  {
    tag_name: 'necklaces',
  },
  {
    tag_name: 'earrings',
  },
  {
    tag_name: 'clay sculptures',
  },
  {
    tag_name: 'MoonPeopleProduct',
  },
  {
    tag_name: 'stones',
  },
  {
    tag_name: 'wizard skart collections of oddities',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
