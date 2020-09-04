const Machine = require('../../db/machineSchema');

const deleteData = (req, res) => {
  Machine.findByIdAndRemove(req.body._id)
  .then(() => {
    res.status(200).send();
  });
}

module.exports = deleteData;