
const ModelChats = require('./modelChats');

addChat = async (chat) => {
  const MyChat = new ModelChats(chat);
  await MyChat.save();
}

getChats = async (userId) => {
  return new Promise((resolve, reject) =>{
    let filter = {};
    if (userId){
        filter = {
            users: userId
        }
    }

    ModelChats.find(filter)
        .populate('users')
        .exec((error, populated)=>{
            if (error){
                reject(error);
                return false;
            }
            resolve(populated);
        });
  });
}

module.exports = {
  add: addChat,
  list: getChats,
};
