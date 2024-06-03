// src/server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
// app.use('/api/auth', require('./src/routes/auth'));
// app.use('/api/pdf', require('./src/routes/pdf'));
app.use('/api/auth', require('./src/routes/auth'));
app.use('/api/pdf', require('./src/routes/pdf'));


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
