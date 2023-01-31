const store = require('./store');

//Agregar nuevos mensajes
function addUser(name){
    return new Promise((resolve, reject ) =>{
        if (!name)
        {
            console.error('[MessageController] : theres user or message');
            return reject('los datos son incorrectos');

        }
        const user = {
            name: name
        }
        store.add(user);
        return resolve(user);

        
    })
    
}

//Listar todos los mensajes
function getUsers(){
    return new Promise((resolve, reject)=>{
        resolve(store.list())
    });
}

//Actualizar los mensajes
function updateUsers(id, name){
    return new Promise(async (resolve, reject) =>{
        if (!id || !name){
            reject('invalid Data');
            return false;
        }
        const result = await store.update(id, name);
        resolve(result);
    });

}

//Traer un documento por su id
function getUser(id){
    return new Promise(async (resolve, reject) =>{
        resolve(store.getOne(id));
    })
}

//Delete message
function deleteUser(id){
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
    addUser,
    getUsers,
    updateUsers,
    getUser,
    deleteUser
}