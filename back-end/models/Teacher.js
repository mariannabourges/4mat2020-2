const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    name: {type: String, required: true},
    education: {type: String, required: true},
    birthdate: {type: Date, required: true},
    hourly_rate: {type: Number, required: true, default: 50},
    email: {type: String, required: true, index: { unique: true}}
})

//Parâmetros do mongoose.model()
//1º -> Nome do model (inicial maiúscula, igual ao nome do arquivo)
//2º -> a constante esquema, montada anteriormente
// 3º -> o nome da COLEÇÃO no BD que irá receber os objetos que serão
// criados a partir deste model ( inicial minúscula, plural do 
// nome model)
module.exports = mongoose.model('Teacher', esquema, 'teachers')