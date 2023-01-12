const User = require('../modules/userModule');

const addUser = async (req, res) => {
  var newUser = new User(req.body);
  newUser.save();
  res.send({message: "inserted new User"})
}

const deleteUser = async (req, res) => {
  await User.deleteOne({_id: req.params.id})
  res.send({message: "deleted user"})
}

const updateUser = async (req, res) => {
  await User.updateOne({_id: req.params.id}, req.body);
  res.send({message: "updated user"})
}

module.exports = {
  addUser,
  deleteUser,
  updateUser,
}