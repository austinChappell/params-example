const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const data = require('./data');

let port = process.env.PORT || 3000;

app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', data);
});

app.get('/detail/:id', (req, res) => {
  let id = req.params.id;
  let person = data.people.find(function(item) {
    return item.id == id;
  });
  res.render('detail', person);
});

app.listen(port, () => {
  console.log(`Your app is running on port ${ port }.`);
});
