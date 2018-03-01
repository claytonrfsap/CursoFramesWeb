const port = 3003

<<<<<<< HEAD
const bodyParser = require('body-parser')
=======
// midleware parser do body da requisição, pega dados dos formulario
const bodyParser = require('body-parser');
const express = require('express');
const server = express()

//urlenconded é o formato dos dados do forumario, ou seja faz o tratamento dos dados na submissao
// USE - toda requisiçao vai passar por esse middleware
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

//Se fez o biding direitinho
server.listen(port, function () {
  console.log(`BACKEND  is running on port ${port}.`);
})
>>>>>>> 1c06d14bcb4891be7d071565609e3667c2e3b6bf
