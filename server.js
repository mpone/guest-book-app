const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const { getMessages, addMessage } = require('./server/messages');

app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.set('Access-Control-Allow-Headers', 'content-type');
  next();
});

app.get('/api/messages', (req, res) => {
  res.json(getMessages())
});

app.post('/api/messages', bodyParser.json(), (req, res) => {
  addMessage(req.body.text, req.body.name);
  const messages = getMessages();

  res.json(messages.length - 1);
});

app.use(express.static('build'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
