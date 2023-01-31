const express = require('express');
const bodyParser = require('body-parser');
const response = require('./network/response');
const db = require('./config/database');
const {Config} = require('./config/config');

const router = require('./network/routes');
const url = Config.uri;

//const url = "mongodb+srv://amilcar:amilcar132@cursonodejs.w5ypf2t.mongodb.net/social_network_db?retryWrites=true&w=majority";
db(url);

var app = express();

app.use(bodyParser.json());

//app.use(router);
router(app);



//-- modulo server
app.listen(3000);
console.log("servidor levantado o escuchando desde el puerto 3k");
