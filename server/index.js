const express = require('express');
const bp = require('body-parser');
const cors = require('cors');

const formattingController = require('./controllers/formattingController');
const idGetter = require('./controllers/idGetter');
const dbSearch = require('./controllers/dbSearch');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.static('build'));
app.use(bp.json());

app.get('/start', idGetter);

app.post('/input', formattingController);

app.put('/search', dbSearch);

app.listen(process.env.PORT || port, () => console.log(`listening on port ${port}`));