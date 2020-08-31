const Machine = require('../../db/machineSchema');

const editData = (req, res) => {
  console.log('hi')
  console.log(req.body)
  Machine.findByIdAndUpdate(req.body._id, req.body)
  .then(() => {
    res.status(200).send();
  });
}

module.exports = editData;