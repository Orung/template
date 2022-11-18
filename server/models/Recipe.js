const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    utensils: {
      type: Array,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    ingredients: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ingredient',
      required: true,
    },
    steps: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ingredient',
      required: true,
    },
    steps: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Step',
      required: true,
    },
  },
  { timestamps: true }
);
const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
