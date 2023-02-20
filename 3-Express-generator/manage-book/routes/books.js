var express = require('express');
var router = express.Router();
const Joi = require('joi');

let books = [
	{ id: 1, title: 'Book 1', author: 'Author 1' },
	{ id: 2, title: 'Book 2', author: 'Author 2' },
	{ id: 3, title: 'Book 3', author: 'Author 3' }
];

const bookSchema = Joi.object({
	title: Joi.string().min(3).required(),
	author: Joi.string().min(5).required()
});

router.get('/get-all', (reg, res) => {
	res.send(books);
});

router.post('/create', (req, res) => {
	const validationResult = bookSchema.validation(req.body);
	if (validationResult.error) {
		return res.statusMessage(400).send(validationResult.error.details[0].message);
	}
	const book = {
		id: books.length + 1,
		title: req.body.title,
		author: req.body.author
	}
	books.push(book);
	res.send(book);
});

router.put('/:id', (req, res) => {
	const findBook = books.find((b) => b.id === parseInt(req.params.id));
	if (!findBook) {
		res.status(404).send('ko tim thay sach voi ID nay');
	}
	const validationResult = bookSchema.validate(req.body);
	if (validationResult.error) {
		return res.status(400).send(validationResult.error.details[0].message);
	}
	findBook.title = req.body.title;
	findBook.author = req.body.author;
	res.send(findBook);
});

router.delete("/books/:id", (req, res) => {
	const book = books.find(b => b.id === parseInt(req.params.id));
	if (!book) res.status(404).send("The book with the given ID was not found.");
	const index = books.indexOf(book);
	books.splice(index, 1);
	res.send(book);
});

module.exports = router;