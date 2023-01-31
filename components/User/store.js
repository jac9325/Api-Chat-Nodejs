
const ModelUser = require('./modelUser');

addUser = async (name) => {
  const myUser = new ModelUser(name);
  await myUser.save();
}

getUsers = async () => {

  const myUsers = await ModelUser.find();
  return myUsers;
}

getUser = async (id) => {
  const MyUser = await ModelUser.findOne({
    _id:id
  });
  return MyUser;
}

updateUser = async (id, name) => {
  const foundUser = await ModelUser.findOne({
    _id:id
  });
  foundUser.name = name;
  const newUser = await foundUser.save();
  return newUser;
}

deleteUser = async (id) =>{
  return ModelUser.deleteOne({
    _id:id
  });
}
module.exports = {
  add: addUser,
  list: getUsers,
  update: updateUser,
  getOne: getUser,
  remove: deleteUser
};
