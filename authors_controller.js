let authors = require('../data').authors;


exports.getAllAuthors = (req, res) => {
    res.json(authors);  
};


exports.getAuthorById = (req, res) => {
    const author = authors.find(a => a.id === parseInt(req.params.id));
    if (author) {
        res.json(author);  
    } else {
        res.status(404).send('Author not found');  
    }
};
