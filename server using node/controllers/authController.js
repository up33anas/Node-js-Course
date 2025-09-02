const usersDB = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};
const bcrypt = require("bcrypt");

const handleLogin = async (req, res) => {
  const { user, pwd } = req.body;
  if (!user || !pwd) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  const foundUser = usersDB.users.find((u) => u.username === user);
  if (!foundUser) return res.sendStatus(401); // Unauthorized

  const correctPassword = await bcrypt.compare(pwd, foundUser.pwd); // or foundUser.password depending on your file
  if (correctPassword) {
    // TODO: Create JWT here
    res.json({ success: `${foundUser.username} logged in successfully!` });
  } else {
    res.sendStatus(401); // Unauthorized
  }
};

module.exports = { handleLogin };
