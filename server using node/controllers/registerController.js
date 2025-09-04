const User = require("../models/User");
const bcrypt = require("bcrypt");

const handleNewUser = async (req, res) => {
  const { user, pwd } = req.body;
  if (!user || !pwd) {
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  }

  // check for duplicate usernames in the DB
  const duplicate = await User.findOne({ username: user }).exec();
  if (duplicate)
    return res.status(409).json({ message: "Username already exists." });

  try {
    // encrypt the password
    const hashedPwd = await bcrypt.hash(pwd, 10);

    // Create and store the new User
    const newUser = await User.create({
      username: user,
      password: hashedPwd,
    });

    console.log(newUser);

    res.status(201).json({ success: `User ${user} created!` });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { handleNewUser };
