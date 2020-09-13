const Laker = require('./../models/Laker');

function index(req, res) {
    Laker.find({})
        .then((lakers) => res.json(lakers).status(200))
        .catch(err => console.log(err));
}

module.exports = {
    index
}