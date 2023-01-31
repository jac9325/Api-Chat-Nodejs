const express = require('express');
const router = express.Router();
const controller = require('./controller')

const response = require('../../network/response');

//peticiones http

router.get('/:id', (req, res)=>{
    const { id } = req.params;
    controller.getUser(id)
    .then((data) => {
        response.success(req, res, data, 201);
    })
    .catch((e) => {
        response.error(req, res, 'Error al hacer la peticion', 404);
    })
})

router.get('/', (req, res)=>{

    controller.getUsers()
    .then((list) => {
        response.success(req, res, list, 201);
    })
    .catch((e)=>{
        response.error(req,res, e, 404);
    })
    
});


//
router.post('/', (req,res)=>{
    const {body} = req;
    controller.addUser(body.name)
    .then((user)=>{
        response.success(req, res, user, 201);
    })
    .catch((e)=>{
        response.error(req, res, e, 500);
    })
    
});

router.patch('/:id', (req, res) =>{
    const {name} = req.body;
    controller.updateUsers(req.params.id, name)
    .then((data) =>{
        response.success(req, res, data, 200);
    })
    .catch((e) =>{
        response.error(req,res, 'error interno0, 500');
    })
})

router.delete('/:id', (req, res) =>{
    const { id } = req.params;
    controller.deleteUser(id)
    .then(() => {
        response.success(req, res, `Usuario ${id} eliminado correctamente`, 200);
    })
    .catch(e => {
        response.error(req, res, `[Error interno] ${e}`, 500);
    })
})

module.exports = router;