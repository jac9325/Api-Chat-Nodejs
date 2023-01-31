const express = require('express');
const message = require('../components/messages/network');
const user = require('../components/User/network');
const chat = require('../components/chats/network');

const routes = (server) =>{
    server.use('/message', message);
    server.use('/user', user);
    server.use('/chat', chat);

}

module.exports = routes;