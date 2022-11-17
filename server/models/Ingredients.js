const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientsSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true,
		unique: true
	}
}, {timestamps: true });

const Ingredients = mongoose.model('User', ingredientsSchema);
module.exports = Ingredients;


