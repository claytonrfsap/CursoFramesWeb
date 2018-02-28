const port = 3003

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


server.use(function (req, res, next) {
  console.log('meu middleware 1');
  next()
})

server.use(function (req, res, next) {
  console.log('meu middleware 2');
  res.send('funcionou novamente')
})
