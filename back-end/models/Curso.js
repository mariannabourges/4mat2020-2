const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome: {
        type: String,
        required: true // atributo obrigatório
    }, // smp que for descrever um novo atributo tem que colocar uma vírgula
    carga_horaria:{
        type: Number,
        required: true,
        min: 4, //valor mínimo de 4 horas de duração para os cursos
        max: 240, // valor máximo de horas de curso
        default: 100 // valor padrão de horas, cadastrar curso sem mencionar carga horária
    },
    nivel: {
        type: String,
        required: true,
        // Conjunto dos valores válidos
        enum: ['Básico', 'Intermediário', 'Avançado']
    },
    valor_curso: {
        type: Number,
        required: true,
        min: 50 // mínimo de 50 reais por curso, não coloca máximo pq o céu é o limite de valor de curso
    }
})

//Parâmetros do mongoose.model()
//1º -> Nome do model (inicial maiúscula, igual ao nome do arquivo)
//2º -> a constante esquema, montada anteriormente
// 3º -> o nome da COLEÇÃO no BD que irá receber os objetos que serão
// criados a partir deste model ( inicial minúscula, plural do 
// nome model)
module.exports = mongoose.model('Curso', esquema, 'cursos')