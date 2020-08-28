const Machine = require('../../db/machineSchema');

const dbSearch = (req, res) => {
  if (req.body.criteria === 'all') {
    Machine.find({})
      .then((data) => {
        res.status(200).send(data);
      });
  } else {
    Machine.find({ [req.body.criteria]: req.body.input }).exec()
      .then((data) => {
        res.status(200).send(data);
      });
  }
};

module.exports = dbSearch;