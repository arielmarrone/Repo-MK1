const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Heeeey muy buenas a todosss guaapisimooos');
});
app.listen(3000);
