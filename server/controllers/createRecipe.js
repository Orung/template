const Recipe = require('../models/Recipe');

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
module.exports = {
  createRecipe,
};
