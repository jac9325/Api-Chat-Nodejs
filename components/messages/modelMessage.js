const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//constructor de nuestro modelo Messages
const mySchema = new Schema({
    chat:{
        type: Schema.ObjectId,
        ref: 'Chat'
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    message: {
        type: String,
        required: true,
    },
    date: Date,
});

const modelMessage = mongoose.model('Message', mySchema);
module.exports = modelMessage;
