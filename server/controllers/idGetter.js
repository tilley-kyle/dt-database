const Machine = require('../../db/machineSchema');

const idGetter = (req, res) => {
  console.log('hi')
  Machine.find({})
  .then((data) => {
    console.log(data);
  })

}

module.exports = idGetter;