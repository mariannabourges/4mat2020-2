const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    name: {type: String, required: true},
    phone:  {type: String, required: true},
    //e-mail com índice único para evitar duplicidades
    email: {type: String, required: true, index: { unique: true}},
    hour: { type: mongoose.ObjectId, ref: 'Hour', required: true },
    grade: { type: mongoose.ObjectId, ref: 'Grade', required: true }


})

//Parâmetros do mongoose.model()
//1º -> Nome do model (inicial maiúscula, igual ao nome do arquivo)
//2º -> a constante esquema, montada anteriormente
// 3º -> o nome da COLEÇÃO no BD que irá receber os objetos que serão
// criados a partir deste model ( inicial minúscula, plural do 
// nome model)
module.exports = mongoose.model('Student', esquema, 'students')