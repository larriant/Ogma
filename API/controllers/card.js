// Load required packages
var Card = require('../models/card');

// Create endpoint /api/document for POSTS
exports.postCard = function(req, res) {
  // Create a new instance of the Document model
  var card = new Card();

  // Set the document properties that came from the POST data
  card.name = req.body.name;
  card.creator = req.body.creator;
  card.content = req.body.content;
  card.front = req.body.front;
  card.back = req.body.back

  // Save the document and check for errors
  document.save(function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Card added!', data: card });
  });
};

// Create endpoint /api/documents for GET
exports.getCards = function(req, res) {
  // Use the Card model to find all cards 
  Card.find(function(err, cards) {
    if (err)
      res.send(err);

    res.json(cards);
  });
};

// Create endpoint /api/documents/:document_id for GET
exports.getCard = function(req, res) {
  // Use the Card model to find a specific document
  Card.findById(req.params.card_id, function(err, card) {
    if (err)
      res.send(err);

    res.json(card);
  });
};

// Create endpoint /api/documents/:document_id for PUT
exports.putCard= function(req, res) {
  // Use the Card model to find a specific card 
    Card.findById(req.params.card_id, function(err, card) {
    if (err)
      res.send(err);

    // Update the existing document quantity
    card.content = req.body.content;

    // Save the card and check for errors
    card.save(function(err) {
      if (err)
        res.send(err);

      res.json(card);
    });
  });
};

// Create endpoint /api/documents/:document_id for DELETE
exports.deleteCard= function(req, res) {
  // Use the Card model to find a specific card and remove it
  Card.findByIdAndRemove(req.params.card_id, function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Card Removed!' });
  });
};
