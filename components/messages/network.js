const express = require('express');
const router = express.Router();
const controller = require('./controller')

const response = require('../../network/response');

//peticiones http

router.get('/:id', (req, res)=>{
    const { id } = req.params;
    controller.getMessage(id)
    .then((data) => {
        response.success(req, res, data, 201);
    })
    .catch((e) => {
        response.error(req, res, 'Error al hacer la peticion', 404);
    })
})

router.get('/', (req, res)=>{

    const filterMessage = req.query.user || null;
    controller.getMessages(filterMessage)
    .then((list) => {
        response.success(req, res, list, 201);
    })
    .catch((e)=>{
        response.error(req,res, e, 404);
    })
    
});

router.post('/', (req,res)=>{
    const {body} = req;
    controller.addMessage(body.chat ,body.user, body.message)
    .then((fullMessage)=>{
        response.success(req, res, fullMessage, 200);
    })
    .catch((e)=>{
        response.error(req, res, e, 500);
    })
    
});

router.patch('/:id', (req, res) =>{
    const {message, message2} = req.body;
    controller.updateMessage(req.params.id, message, message2)
    .then((data) =>{
        response.success(req, res, data, 200);
    })
    .catch((e) =>{
        response.error(req,res, 'error interno0, 500');
    })
})

router.delete('/:id', (req, res) =>{
    const { id } = req.params;
    controller.deleteMessage(id)
    .then(() => {
        response.success(req, res, `Mensaje ${id} eliminado correctamente`, 200);
    })
    .catch(e => {
        response.error(req, res, `[Error interno] ${e}`, 500);
    })
})

module.exports = router;