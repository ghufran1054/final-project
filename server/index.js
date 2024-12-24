const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const path = require('path');

const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/task');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());


// Routes
app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);

// MongoDB Connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
