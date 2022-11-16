const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require ('bcrypt')



const userSchema = new Schema({
	fullname: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true,
		unique: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	}
}, {timestamps: true });

userSchema.pre('save', async function(next){
    try{
        console.log('Called Before Saving a User')
        if(!this.isModified('password')) return next();
        this.password = await bcrypt.hash(this.password, 12);
    } catch(e){
    next(e)
    }
})

const User = mongoose.model('User', userSchema);
module.exports = User;


