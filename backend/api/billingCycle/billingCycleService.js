//arquivo que cria os servicos da api rest
const BillingCycle = require('./billingCycle');

BillingCycle.methods(['get', 'post', 'put', 'delete'])

module.exports = BillingCycle
