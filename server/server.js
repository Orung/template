// IMPORT ALL NECCESSARY MODULES
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const morgan = require('morgan');
// const session = require('express-session');
require('dotenv').config();
const { errorHandler, notFound } = require('./middlewares/errorMiddleware');
const dbConnect = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const recipeRoutes = require('./routes/recipeRoutes')

const app = express(); // CREATE APP

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, `${new Date().toISOString()}-${file.originalname}`);
  },
});
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(nul, true);
  } else {
    cb(null, false);
  }
}

app.use(express.json());
app.use(multer({ storage: fileStorage }).single('image'));
app.use(cors());

// app.use(session({ secret: 'notagoodsecret' }));

// ROUTES CONFIGURATION: GLOBAL
app.use('/api/v1/recipes', recipeRoutes);
app.use('/api/v1/users', userRoutes)

// MORGAN LOGGING
if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(errorHandler);
app.use(notFound);

const PORT = process.env.PORT || 8000;
dbConnect();
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
