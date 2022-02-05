const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');
// connect to port and bring in express
const app = express();
const PORT = process.env.PORT || 6120;
// use middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// use routes
app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});