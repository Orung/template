const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
	author: {
		type: String,
		required: true
	},
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
    description: [String],
    ingredients: [String]

    owner: {
        type: mongoose.Types.objectId,
        ref: "User"
    }

}, {timestamps: true });

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;

