const mongoose = require('mongoose');
const Schema = mongoose.Schema;

<<<<<<< HEAD
const ingredientsSchema = new Schema({
=======
const ingredientSchema = new Schema({
>>>>>>> 21d11fd3840cd0ec6938295b8cc688d6462b9fa8
	title: {
		type: String,
		required: true
	},
	image: {
		type: String,
<<<<<<< HEAD
		required: true,
		unique: true
	}
}, {timestamps: true });

const Ingredients = mongoose.model('User', ingredientsSchema);
module.exports = Ingredients;


=======
		required: true
    }
},
                                    {timestamps: true });

const Ingredient = mongoose.model('Ingredient', ingredientSchema);
module.exports = Ingredient;
>>>>>>> 21d11fd3840cd0ec6938295b8cc688d6462b9fa8
