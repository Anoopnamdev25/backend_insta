const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const postRoutes = require('./routes/postRoutes');

// Load environment variables
dotenv.config();

// Initialize app and database
const app = express();
connectDB();

// Middleware
app.use(cors(
    {
        origin: 'http://localhost:3000', // Allow requests from your React app
      }
));
app.use(express.json());
app.use('/uploads', express.static('uploads')); // Serve uploaded images

// Routes
app.use('/api/posts', postRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT,"0.0.0.0", () => console.log(`Server running on port ${PORT}`));
