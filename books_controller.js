let books = require('../data').books;


exports.createBook = (req, res) => {
    const { title, authorId } = req.body;
    const newBook = { id: books.length + 1, title, authorId, available: true };
    books.push(newBook);
    res.status(201).json(newBook);  
};


exports.getAllBooks = (req, res) => {
    res.json(books);  
};


exports.getBookById = (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (book) {
        res.json(book);  
    } else {
        res.status(404).send('Book not found');  
    }
};
