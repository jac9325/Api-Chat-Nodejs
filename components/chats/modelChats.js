const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//constructor de nuestro modelo Messages
const mySchema = new Schema({
    users: [
        {
            type: Schema.ObjectId,
            ref: 'User'
        },
    ]
   
});

const modelChat = mongoose.model('Chat', mySchema);
module.exports = modelChat;
