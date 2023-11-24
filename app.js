const express = require('express');
const path = require('path');
const app = express();

// Set public folder as static
app.use(express.static(path.join(__dirname)));

// Custom route handling
app.get('/custom-route', (req, res, next) => {
    // Simulate a 404 error for demonstration purposes
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Error handling middleware
app.use((err, req, res, next) => {
  if (err) {
      console.error(err.stack);
      if (err.status === 404) {
          res.status(404).sendFile(path.join(__dirname, '404', '404.html'));
      }
  
  } else {
      next();
  }
});

// Not found in static files, so default to index.html
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});