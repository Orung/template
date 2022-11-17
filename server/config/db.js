const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    const url = 'mongodb://127.0.0.1:27017';
    await mongoose.connect(url);
    console.log(`dbconnected on ${url}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnect;
