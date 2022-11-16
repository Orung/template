const asyncHandler = require("express-async-handler");
const User = require("../models/User");




exports.register = asyncHandler(async (req, res) => {
  try {
    const { fullname, username, email, password } = req.body
    // hash = await bcrypt.hash(password, 12)
    const user = new User({ fullname, username, email, password })
    await user.save();
    req.session.user_id = user._id;
    console.log(user)
    res.send(`Welcome ${username},Your Registration Was Successful`)
  } catch(error){
    res.status(404);
    throw new Error(error);
  }
})


exports.updateProfile = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.findById(req.user._id);

    if (user) {
      user.name = name || user.name;
      user.email = email || user.email;
      user.password = password || user.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
    });
  } catch (error) {
    res.status(404);
    throw new Error("User not found");
  }
});


