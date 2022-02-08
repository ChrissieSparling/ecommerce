# ecommerce
this is a back-end ecommerce application. It has a full CRUD app. Create. Read. Update. Delete functions.

this will aid companies with organizing their products into categories with various tags.

# installation
Clone [my repo: ecommerce](https://github.com/ChrissieSparling/ecommerce) from my Github to your local machine (run git bash commands to open the file into VSCode)
1. Open VSCode and run the following command in the built-in terminal to install the necessary node packages

2. npm install

3. Connect to the MySQL shell 

4. mysql -u root -p

5. Enter your password 
- Run this command to create the database where data will be stored:

6. SOURCE db/schema.sql;

7. Stop the terminal from running MySQL commands by typing

8. quit;

- Run this command to seed the data into the database:

9. npm run seed

- Start the server.js in the integrated terminal by running the following command:

10. node server.js

# ANOTHER WAY / instead of node server.js you could:
  Run `nodemon server.js` 
  If all went as planned -- You have successfully launched the server!! let's explore the routes in [Insomnia](https://insomnia.rest/)


# DEPLOYED SITE ON HEROKU
[Heroku](https://ecommerce-back-end-2022.herokuapp.com/)
add the following endpoints to see the specific info:
end point:   /api/categories
end point:   /api/products
end point:   /api/tags

# CHECK THE ROUTES:
# Category Routes
end point:   /api/categories
There are five routes to handle various data in the Category model
- GET all Categories (returns all categories in the database)
- GET a Category by ID (returns a single category that matches the requested id)
- POST a new Category (creates a new category, takes in certain parameters)
- PUT to update a Category by ID (updates the specified category, takes in certain parameters)
- DELETE to delete a Category by ID (deletes the specified category from the database)

### Product Routes
end point:   /api/products
There are five routes to handle various data in the Product model
- GET all Products (returns all products in the database)
- GET a Product by ID (returns a single product that matches the requested id)
- POST a new Product (creates a new product, takes in certain parameters)
- PUT to update a Product by ID (updates the specified product, takes in certain parameters)
- DELETE to delete a Product by ID (deletes the specified product from the database)

### Tag Routes
end point:   /api/tags
There are five routes to handle various data in the Tag model
- GET all Tags (returns all tags in the database)
- GET a Tag by ID (returns a single tag that matches the requested id)
- POST a new Tag (creates a new tag, takes in certain parameters)
- PUT to update a Tag by ID (updates the specified tag, takes in certain parameters)
- DELETE to delete a Tag by ID (deletes the specified tag from the database)

video walkthrough:
https://drive.google.com/file/d/1AZbX5QOfx0Cdx19w9qbZ4DrWHGvPgc7m/view