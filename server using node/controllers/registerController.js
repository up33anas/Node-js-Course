const usersDB = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};
const fsPromises = require("fs").promises;
const path = require("path");
const bcrypt = require("bcrypt");

const handleNewUser = async (req, res) => {
  const { user, pwd } = req.body;
  if (!user || !pwd)
    return res.json({ message: "Username and password are required." });
  // check for duplicate usernames in the DB
  const duplicate = usersDB.users.find((person) => person.username === user);
  if (duplicate)
    return res.status(409).json({ message: "Username already exists." });
  try {
    // encrypt the password
    const hashedPwd = await bcrypt.hash(pwd, 10);
    // add the new user
    const newUser = { username: user, pwd: hashedPwd };
    usersDB.setUsers([...usersDB.users, newUser]);
    await fsPromises.writeFile(
      path.join(__dirname, "..", "model", "users.json"),
      JSON.stringify(usersDB.users)
    );
    console.log(usersDB.users);
    res.status(201).json({ success: `User ${user} created!` });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { handleNewUser };
