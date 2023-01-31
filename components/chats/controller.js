const store = require("./store");

//Agregar nuevos mensajes
function addChat(users) {
  if (!users || !Array.isArray(users)){
    return Promise.reject('Invalid user list');
  }
  const chat = {
    users: users
  };

  return store.add(chat);
}

//Traer un documento por su id
function getChats(id) {
  return  store.list(id)
}

module.exports = {
  addChat,
  getChats,
};
