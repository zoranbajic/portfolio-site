const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const PORT = process.env.PORT || 4040;

const createApp = () => {
  // Only use morgan logging middleware when not running tests
  app.use(morgan('dev'));

  // Middleware to parse out the body using the body-parser package in express
  app.use(express.json());
  // Middleware to parse URL-encoded bodies
  app.use(express.urlencoded({ extended: false }));

  // Serve up our static assets
  app.use(express.static(path.join(__dirname, '../dist')));
  app.use(express.static(path.join(__dirname, '../public')));

  // Send index.html for any request
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  // If something created an error with any of the above, we need to handle it
  app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error');
  });
};

// Create a server object representing our server and start listening
const startListening = () => {
  app.listen(PORT, () =>
    console.log(`Success! Your app is running on port ${PORT}.`)
  );
};

const bootApp = () => {
  createApp();
  startListening();
};

bootApp();

module.exports = app;
