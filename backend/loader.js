//Arquivo loader é que vai carregar todas osmodulos para começar a aplicação
const server = require('./config/server')
require('./config/database')
require('.config/routes')(server)
