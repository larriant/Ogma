// Get the packages we need
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var userController = require('./controllers/user');
var authController = require('./controllers/auth');
var documentController = require('./controllers/document');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ogma');

// Create our Express application
var app = express();

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
  extended: true
}));

// Use the passport package in our application
app.use(passport.initialize());

// Create our Express router
var router = express.Router();

// Create endpoint handlers for /documents
router.route('/documents')
  .post(documentController.postDocuments)
  .get(documentController.getDocuments);

// Create endpoint handlers for /documents/:document_id
router.route('/documents/:document_id')
  .get(documentController.getDocument)
  .put(documentController.putDocument)
  .delete(documentController.deleteDocument);

// Create endpoint handlers for /users
router.route('/users')
  .post(userController.postUsers)
  .get(authController.isAuthenticated, userController.getUsers);

// Register all our routes with /api
app.use('/api', router);

// Start the server
app.listen(3000);
console.log('Insert beer on port ' + 3000);

