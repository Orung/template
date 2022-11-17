const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const { errorHandler, notFound } = require('./middlewares/errorMiddleware');
const session = require('express-session');
const dbConnect = require('./config/db');
const multer = require('multer');

const app = express();
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
};
dotenv.config();
app.use(express.json());
app.use(multer({ storage: fileStorage }).single('image'));
app.use(cors());

app.use(errorHandler);
app.use(notFound);
app.use(session({ secret: 'notagoodsecret' }));

// Routes imports
const testRoute = require('./routes/testRoutes');

// Routes configurations
app.use('/api/test', testRoute);

// morgan logging configuration
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const PORT = process.env.PORT || 8000;
dbConnect();
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
