const express = require('express');
const bp = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.static('build'));
app.use(bp.json());

app.post('/input', (req, res) => {
  console.log(req.body);
  res.send().status(200);
});

app.listen(process.env.PORT || port, () => console.log(`listening on port ${port}`));