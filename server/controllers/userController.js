const asyncHandler = require("express-async-handler");
const User = require("../models/User");

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
