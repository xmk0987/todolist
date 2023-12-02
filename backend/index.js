const express = require('express');
const path = require('path');
require('dotenv').config();
const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');
const todoRoutes = require('./routes/todos');
const errorController = require('./controllers/error');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Set up CORS headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, X-Custom-Header, Authorization');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

// Serve static files from the 'frontend/dist/frontend/browser' directory
const path2 = express.static(path.join(__dirname, '..', 'frontend', 'dist', 'frontend', 'browser'));
app.use(path2);

// Api routes
app.use('/auth', authRoutes);
app.use('/todos', todoRoutes);

// Error handling routes
app.use(errorController.get404);
app.use(errorController.get500);

// Serve Angular app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(path2, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
