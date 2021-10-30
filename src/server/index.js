const express = require('express');

const PORT = 3000;

const app = express();

app.get('/ping', (req, res) => res.json({ ping: 'pong' }));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
