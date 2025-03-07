let users = require('../data').users;


exports.getAllUsers = (req, res) => {
    res.json(users);  
};


exports.getUserById = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
        res.json(user);  
    } else {
        res.status(404).send('User not found');  
    }
};
