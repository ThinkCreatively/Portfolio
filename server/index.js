const express = require('express');
const Axios = require('axios');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Listening to port: ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello World');
});
