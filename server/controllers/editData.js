const Machine = require('../../db/machineSchema');

const editData = (req, res) => {
  Machine.findByIdAndUpdate(req.body._id, req.body)
  .then(() => {
    res.status(200).send();
  });
}

module.exports = editData;