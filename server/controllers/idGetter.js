const Machine = require('../../db/machineSchema');

const idGetter = (req, res) => {
  Machine.find({})
  .then((data) => {
    const ids = [];
    data.forEach((machine) => {
      if (ids.indexOf(machine.Model) === -1) {
        ids.push(machine.Model);
      }
    });
    res.status(200).send(ids);
  });

}

module.exports = idGetter;