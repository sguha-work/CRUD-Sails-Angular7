# SailsJS 1.0 for API and Angular 7 for frontend

This example is a very basic CRUD operation using following technologies

  - Angular 7 for frontend development
  - SailsJS version 1.0 for backend API
  - MYSQL for database
# Environment setup
    - To install sails js run `sudo npm install sails -g`
    - To install nodemon run `sudo npm install nodemon -g`
    - Make sure MYSQL server is up and running (In my case I'm using XAMPP for linux   so before startting the node server I perform a `sudo /opt/lampp/lampp start`    to make the mysql up and running)
    - Create a database called `persondb` in mysql
    - Import the `persondb.sql` file resides in root folder of the repository
# How to run
  - Run the API server
    - Open the crudapi folder using command prompt
    - perform a `npm install`
    - run `sails lift` or `node app.js` or `nodemon app.js` to start the node server
  - Run the UI server
    - Open the crdui folder using command prompt
    - Run `ng serve -o`
