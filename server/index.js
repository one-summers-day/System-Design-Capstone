const express = require('express');
const app = express();
const routes = require('./router.js')

app.use(express.json());
app.use('/', routes);

app.listen(process.env.PORT, function () {
  console.log('Server listening on PORT: ', process.env.PORT);
});