const express = require('express');

module.exports = function (server) {

  //API Rotas
  const router = express.Router()
  server.use('/api', router)

}
