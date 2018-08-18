const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/api/requestData', (req, res) => {
  let data = [{key: "first", value: "I came first"}, {key: "second", value: "I came second"}];
  res.json(data);
  console.log(`Sent ${JSON.stringify(data)}`);
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Express app is listening on ${port}`);
