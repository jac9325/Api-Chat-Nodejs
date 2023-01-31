const express = require('express');
const router = express.Router();
const controller = require('./controller')

const response = require('../../network/response');

//peticiones http
//Traer chats de un usuario
router.get('/:Userid', (req, res)=>{
    const { Userid } = req.params;
    console.log(Userid);
    controller.getChats(Userid)
    .then((users) => {
        response.success(req, res, users, 201);
    })
    .catch((e) => {
        response.error(req, res, e, 404);
    })
})


//-- Insertar chat
router.post('/', (req,res)=>{
    const {body} = req;
    controller.addChat(body.users)
    .then((chat)=>{
        console.log(chat);
        response.success(req, res, chat, 201);
    })
    .catch((e)=>{
        response.error(req, res, e, 500);
    })
    
});


module.exports = router;