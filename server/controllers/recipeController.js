// IMPORT MODULES
const asyncHandler = require('express-async-handler');
const Recipe = require('../models/Recipe');
/**
 * @desc Get Recepi list
 * @route GET
 * @route /api/getAllRecipes
 * @access Public
 */

 // ENDPOINT => GET ALL RECIPE
const getAllRecipes = asyncHandler(async (req, res) => {
  const recipes = await Recipe.find().sort('createdAt');
  if (!recipes) {
    res.status(404);
    throw new Error(`No Recepies found`);
  }

  return res.status(200).json({ recipes });
});

 // ENDPOINT => GET ALL RECIPE
const getSingleRecipe = asyncHandler(async (req, res) => {
    const { id: recipeID } = req.params
    const recipe = await Recipe.findOne({ _id: recipeID })
    if (!recipe) {
        res.status(404)
      throw new Error (`No recipe with id : ${recipeID}`);
    }

    return res.status(200).json({ recipe })
  });

// ENDPOINT => CREATE RECIPE
const createRecipe = async (req, res) => {
    const { title, description, utensils } = req.body;
    const imageUrl = req.file;
    if (!imageUrl) {
      res.status(422).json({
        message: 'invalid input data',
      });
    }
    const image = imageUrl.path;
    const recipe = await Recipe.create({
      title: title,
      image: image,
      description: description,
      utensils: utensils,
    });

    const createdRecipe = await recipe.save();
    res.status(200).json({ createdRecipe });
  };

  // ENDPOINT => UPDATE A RECIPE
  const updateRecipe = async (req, res) => {
    // take the id of the recipe from the api route of the request
    const { id } = req.params;

    if (!id) {
      res.status(400);
      throw new Error(`there is no id present in the route `);
    }

    // the items to update are present in the body
    const recipe = await Recipe.findOneAndUpdate({ id }, body, {
      new: true,
      runValidators: true,
    });

    if (!recipe) {
      res.status(400);
      throw new Error(`couldn't update recipe with id : ${id}`);
    }

    return res.status(200).json({ recipe });
  };


// EXPORT ALL ENDPOINT HERE
module.exports = {
  getAllRecipes,
  getSingleRecipe,
  createRecipe,
  updateRecipe
};
