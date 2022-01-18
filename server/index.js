const express = require('express');
const app = express();
const routes = require('./router.js')

app.use(express.json());
app.use('/', routes);

app.set('port', process.env.PORT || 3000);

app.listen(process.env.PORT || 3000, function () {
  console.log('Server listening on PORT: ', process.env.PORT || 3000);
});