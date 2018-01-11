var Book = require('../models/book.js')

exports.getBooks = function(req, res) {
	Book.findAll()
		.then((Books) => res.status(200).json(Books))
		.catch((err) => {
			console.warn(err)
			res.status(500).send('some error...')
		})
}

exports.getBook = function(req, res) {
	Book.findById(req.params.id)
		.then((book) => res.status(200).json(book))
		.catch((err) => {
			console.warn(err)
			res.status(500).send('some error...')
		})
}

exports.createBook = function(req, res) {
	Book.create(req.body)
		.then(() => res.status(201).send('created'))
		.catch((err) => {
			console.warn(err)
			res.status(500).send(req.body)
		})
}

exports.updateBook = function(req, res) {
	Book.findById(req.params.id)
		.then((Book) => {
			if (Book) {
				return Book.update(req.body, { fields: ['name', 'publishingHouse', 'year', 'review', 'authorId'] })
			}
			else {
				res.status(404).send('not found')
			}
		})
		.then(() => {
			if (!res.headersSent) {
				res.status(201).send('modified')
			}
		})
		.catch((err) => {
			console.warn(err)
			res.status(500).send('some error...')
		})
}

exports.deleteBook = function(req, res) {
	Book.findById(req.params.id)
		.then((Book) => {
			if (Book) {
				return Book.destroy()
			}
			else {
				res.status(404).send('not found')
			}
		})
		.then(() => {
			if (!res.headersSent) {
				res.status(201).send('removed')
			}
		})
		.catch((err) => {
			console.warn(err)
			res.status(500).send('some error...')
		})
}
