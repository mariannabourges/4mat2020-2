const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    day_of_the_week: [{
        type: String,
        required: true,
        enum: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    }],
    hour_init: { type: String, required: true },
    hour_final: { type: String, required: true },
    course: { type: mongoose.ObjectId, ref: 'Course', required: true },
    teacher: { type: mongoose.ObjectId, ref: 'Teacher', required: true }
})

// PARÂMETROS DO mongoose.model()
// 1º -> Nome do model (inicial maiúscula, igual ao nome do arquivo)
// 2º -> a constante esquema, montada anteriormente
// 3º -> o nome da COLEÇÃO no BD que irá receber os objetos que serão
//       criados a partir deste model (inicial minúscula, plural do
//       nome do model)
module.exports = mongoose.model('Hour', esquema, 'hours')