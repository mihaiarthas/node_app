var Author = require('../models/author.js')

exports.getAuthors = function (req, res) {
	Author.findAll()
		.then((Authors) => res.status(200).json(Authors))
		.catch((err) => {
			console.warn(err)
			res.status(500).send('some error...')
		})
}

exports.getAuthor = function (req, res) {
	Author.findById(req.params.id)
		.then((auth) => res.status(200).json(auth))
		.catch((err) => {
			console.warn(err)
			res.status(500).send('some error...')
		})
}

exports.createAuthor = function (req, res) {
	Author.create(req.body)
		.then(() => res.status(201).send('created'))
		.catch((err) => {
			console.warn(err)
			res.status(500).send('some error...')
		})
}

exports.updateAuthor = function (req, res) {
	Author.findById(req.params.id)
    .then((Author) => {
      if (Author){
        return Author.update(req.body, {fields: ['name', 'age', 'booksNumber']})
      }
      else{
        res.status(404).send('not found')
      }
    })
    .then(() => {
      if (!res.headersSent){
        res.status(201).send('modified')
      }
    })
    .catch((err) => {
      console.warn(err)
      res.status(500).send('some error...')
    })
}

exports.deleteAuthor = function (req, res) {
	Author.findById(req.params.id)
		.then((game) => {
			if (game) {
				return game.destroy()
			}
			else {
				res.status(404).send(req.params.id)
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