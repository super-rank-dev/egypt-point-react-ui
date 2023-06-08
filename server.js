const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'build')));
// This route serves your React app
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
  

// This route handles refreshing the page on the client-side
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'), function(err) {
      if (err) {
        res.status(500).send(err);
      }
    });
  });
  

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
