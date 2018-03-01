//dependencias
const restful = require('node-restful');
const mongoose = restful.mongoose

//O esquema é como se fosse a modelagem do banco de dados
//Modelagem do credito
const creditSchema = new mongoose.schema({
  name: { type: String, required: true},
  value: {type: Number, min: 0, required: true}
})
//Modelagem do Debito
const debtSchema = new mongoose.schema({
  name: { type: String,required: true},
  value: { type: Number, min: 0, required: true },
  status: { type: String, required: false, uppercase:true,
    enum: ['PAGO','PENDENTE','AGENDADO']}
})

//Modelagem do ciclo de pagamento
const billingCycleSchema =  new mongoose.schema({
  name:{ type: String, required: true},
  month:{ type: Number, min:1, max:12, required: true},
  year:{ type: Number, min:1970, max:2100,required:true},
  credits:[creditSchema],
  debts:[debtSchema]
})

//Exportou o modelo =model
module.exports = restful.model('billingCycle',billingCycleSchema)
