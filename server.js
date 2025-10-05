var express = require('express');
var app = express();
const port = process.env.PORT || 8080;
const host = ('localhost')
const mongoDB = require('./db/mongoDB')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', require('./routes'));

mongoDB.initDb((err, mongoDB) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Server is running on http://${host}:${port}`);
  }
});