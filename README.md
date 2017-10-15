# Eat-Da-Burger Part II!

## Overview

A Node, Express, Handlebars, and MySQL burger app that allows users to order any burger that they would like to eat and then devour it!

This app is a remade ok of the original burger app which can be found [here](https://github.com/BrendanHa07/burger). The difference between the two apps is that Part 2 utilizes the Sequelize ORM rather than just MySQL queries.

## Functionality

This app has 3 major CRUD functions:

- READ all entries from the MySQL database and then renders them to the DOM via handlebars.
- UPDATES everytime a user devours a burger.
  - Grabs the id from the/burger/:id route and changes its "devoured" status in the MySQL database.
  - Re-routes the user back to the index page with the newly devoured burger displayed in the eaten column (via Handlebars).
- CREATES a new burger everytime a user hits the "Burger Me" button.
  - Uses /burger/create route to insert new burger into the MySQL database.
  - Re-routes user back to the index page with the newly added burger in the ready to be eaten column (via Handlebars).
  
## Screenshots




**Check out the APP here!**
https://hidden-shore-81036.herokuapp.com/index
