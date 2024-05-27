const express = require('express');
const bodyParser = require('body-parser');
// const connectDB = require('./config/db');
const mongoose = require('mongoose');
require('dotenv').config();  // Load environment variables
require('./config/db')
const app = express();

// Connect Database
// connectDB();

// Init Middleware
app.use(bodyParser.json());

// Define Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/activity', require('./routes/activityRoutes'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
