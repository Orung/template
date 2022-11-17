const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Steps = require('Steps');
const Ingredients = require('Ingredients');
const User = require('User')

const recipeSchema = new Schema({
	
	title: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
    utensils: {
		type: Array,
		required: true
	},
<<<<<<< HEAD
    description:String,
=======
   

>>>>>>> 21d11fd3840cd0ec6938295b8cc688d6462b9fa8
    author: {
        type: mongoose.Types.objectId,
        ref: "User",
	required: true
    },
   ingredients: {
<<<<<<< HEAD
        type: mongoose.Types.objectId,
        ref: "Ingredient",
	   required: true
    },
  steps: {
        type: mongoose.Types.objectId,
=======
        type: mongoose.Types.objectId,
        ref: "Ingredient",
	   required: true
    },
  steps: {
        type: mongoose.Types.objectId,
>>>>>>> 21d11fd3840cd0ec6938295b8cc688d6462b9fa8
        ref: "Step",
	required: true
    }
}, {timestamps: true });
const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
