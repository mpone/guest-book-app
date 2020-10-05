const express = require('express')
const app = express();
const port = 5000;

app.get('/api', (req, res) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.json([
    {
      "messageId": "1",
      "name": "Bill",
      "text": "That's my first message."
    },
    {
      "messageId": "2",
      "name": "John",
      "text": "That's my first message after Bill."
    },
    {
      "messageId": "3",
      "name": "John",
      "text": "That's my first message after Bill."
    },
    {
      "messageId": "4",
      "name": "John",
      "text": "That's my first message after Bill."
    },
    {
      "messageId": "5",
      "name": "John",
      "text": "That's my first message after Bill."
    },
    {
      "messageId": "6",
      "name": "John",
      "text": "That's my first message after Bill."
    },
    {
      "messageId": "7",
      "name": "John",
      "text": "That's my first message after Bill."
    },
    {
      "messageId": "8",
      "name": "John",
      "text": "That's my first message after Bill."
    },  {
      "messageId": "9",
      "name": "John",
      "text": "That's my first message after Bill."
    },
    {
      "messageId": "10",
      "name": "John",
      "text": "That's my first message after Bill."
    },
    {
      "messageId": "11",
      "name": "John",
      "text": "That's my first message after Bill."
    },
    {
      "messageId": "12",
      "name": "John",
      "text": "That's my first message after Bill."
    },
  ])
});

app.use(express.static('build'));

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
  );
})
