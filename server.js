const express = require('express'),
  app = express(),
  path = require('path'),
  port = process.env.PORT || 3333,
  chalk = require('chalk'),
  // cors = require('cors'),
  data = require('./data');

// app.use(cors())
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
app.use('/src', express.static(path.join(__dirname, 'src')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(port, () => {
  console.log(chalk.yellow(`server listening on port ${port}...`));
})


