// Load required packages
var Document = require('../models/document');

// Create endpoint /api/document for POSTS
exports.postDocuments = function(req, res) {
  // Create a new instance of the Document model
  var document = new Document();

  // Set the document properties that came from the POST data
  document.name = req.body.name;
  document.creator = req.body.creator;
  document.content = req.body.content;

  // Save the document and check for errors
  document.save(function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Document added!', data: document });
  });
};

// Create endpoint /api/documents for GET
exports.getDocuments = function(req, res) {
  // Use the Document model to find all document
  Document.find(function(err, documents) {
    if (err)
      res.send(err);

    res.json(documents);
  });
};

// Create endpoint /api/documents/:document_id for GET
exports.getDocument = function(req, res) {
  // Use the Document model to find a specific document
  Document.findById(req.params.document_id, function(err, document) {
    if (err)
      res.send(err);

    res.json(document);
  });
};

// Create endpoint /api/documents/:document_id for PUT
exports.putDocument = function(req, res) {
  // Use the Document model to find a specific document
    Document.findById(req.params.document_id, function(err, document) {
    if (err)
      res.send(err);

    // Update the existing document quantity
    document.content = req.body.content;

    // Save the document and check for errors
    document.save(function(err) {
      if (err)
        res.send(err);

      res.json(document);
    });
  });
};

// Create endpoint /api/documents/:document_id for DELETE
exports.deleteDocument = function(req, res) {
  // Use the Document model to find a specific document and remove it
  Document.findByIdAndRemove(req.params.document_id, function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Document Removed!' });
  });
};
