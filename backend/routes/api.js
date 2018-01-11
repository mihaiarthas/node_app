var express = require('express');
var router = express.Router();
var bookController = require('../controllers/bookController.js');
var authorController = require('../controllers/authorController.js')

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
router.post('/book', bookController.createBook)
router.put('/book/:id', bookController.updateBook)
router.delete('/book/:id', bookController.deleteBook)
router.get('/book/:id', bookController.getBook)
router.get('/book', bookController.getBooks)

router.post('/author', authorController.createAuthor)
router.put('/author/:id', authorController.updateAuthor)
router.delete('/author/:id', authorController.deleteAuthor)
router.get('/author/:id', authorController.getAuthor)
router.get('/author', authorController.getAuthors)
module.exports = router;