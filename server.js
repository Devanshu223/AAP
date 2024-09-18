const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the root folder (index.html, style.css, and aap.jpeg)
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // This will serve your HTML file
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
