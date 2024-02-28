const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const fs = require('fs');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.post('/contact', (req, res) => {
  const output = `
    Name: ${req.body.name}
    Email: ${req.body.email}
    Phone: ${req.body.phone}
    Message: ${req.body.message}
  `;

  fs.writeFile(`./messages/${Date.now() + req.body.name}.txt`, output, (err) => {
    if (err) {
      console.log(err);
      res.send('Error');
    } else {
      res.send('Success');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});