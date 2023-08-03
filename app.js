const express = require('express');
const bodyparser = require('body-parser');
const { render } = require('ejs');
const port = 3001;
const app = express();

app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Home route
app.get('/', (req, res) => {
  res.render('form');
});

app.post('/',(req,res)=>{
  
});

app.get('/login', (req, res) => {
  res.render('form_login');
});
  
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
