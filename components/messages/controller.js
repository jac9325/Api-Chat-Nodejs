const store = require('./store');

//Agregar nuevos mensajes
function addMessage(chat, user, message){
    return new Promise((resolve, reject ) =>{
        if (!user || !message || !chat)
        {
            console.error('[MessageController] : theres user or message');
            return reject('los datos son incorrectos');

        }
        const fullMessage = {
            chat: chat,
            user: user,
            message: message,
            date: new Date(),
        }

        store.add(fullMessage);
        return resolve(fullMessage);

        
    })
    
}

//Listar todos los mensajes
function getMessages(filterUser){
    return new Promise((resolve, reject)=>{
        resolve(store.list(filterUser))
    });
}

//Actualizar los mensajes
function updateMessage(id, message){
    return new Promise(async (resolve, reject) =>{
        if (!id || !message){
            reject('invalid Data');
            return false;
        }
        const result = await store.update(id, message);
        resolve(result);
    });

}

//Traer un documento por su id
function getMessage(id){
    return new Promise(async (resolve, reject) =>{
        resolve(store.getOne(id));
    })
}

//Delete message
function deleteMessage(id){
    return new Promise(async (resolve, reject) =>{
        if (!id){
            reject('Id invalido');
            return false;
        }
        store.remove(id)
        .then(() =>{
            resolve();
        })
        .then(e =>{
            reject(e);
        })
    })
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    getMessage,
    deleteMessage
}