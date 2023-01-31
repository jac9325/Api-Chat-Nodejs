
const ModelMessage = require('./modelMessage');

addMessage = async (message) => {
  const MyMessage = new ModelMessage(message);
  await MyMessage.save();
}

getMessages =  (filterUser) => {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (filterUser !== null ){
      //crear el filtro por defecto
      filter = {user: filterUser}
    }
    const MyMessage =  ModelMessage.find(filter)
    .populate('user')
    .exec((error, populated) =>{
      if(error){
        reject(error);
        return false;
      }
      resolve(populated);
    })   
  })
 
}

getMessage = async (id) => {
  const MyMessage = await ModelMessage.findOne({
    _id:id
  });
  return MyMessage;
}

updateMessage = async (id, message, message2) => {
  const foundMessage = await ModelMessage.findOne({
    _id:id
  });
  foundMessage.message = message;
  foundMessage.message2 = message2;
  const newMessage = await foundMessage.save();
  return newMessage;
}

deleteMessage = async (id) =>{
  return ModelMessage.deleteOne({
    _id:id
  });
}
module.exports = {
  add: addMessage,
  list: getMessages,
  update: updateMessage,
  getOne: getMessage,
  remove: deleteMessage
};
