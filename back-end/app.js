var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/teste');

const db = require ('./config/database')
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS
const dbName = process.env.DB_NAME
db(`mongodb+srv://${dbUser}:${dbPass}@cluster0.7idnc.gcp.mongodb.net/${dbName}?retryWrites=true&w=majority`)

var app = express();

const cors = require('cors');
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//criação de uma nova rota
const teste = require('./routes/teste')
app.use('/teste', teste)

// Rota para curso
const curso = require('./routes/curso')
app.use('/curso', curso)

//Rota para professor
const professor = require('./routes/professor')
app.use('/professor', professor)

//Rota para sala-aula
const sala_aula = require('./routes/sala_aula')
app.use('/sala-aula', sala_aula) // no app pode usar hífen

// Rota para turma
const turma = require('./routes/turma')
app.use('/turma', turma)

//Rota para veterinario
const veterinario = require('./routes/veterinario')
app.use('/veterinario', veterinario)


//Rota para secretaria
const secretaria = require('./routes/secretaria')
app.use('/secretaria', secretaria)


//Rota para cliente
const cliente = require('./routes/cliente')
app.use('/cliente', cliente)


//Rota para animal
const animal = require('./routes/animal')
app.use('/animal', animal)


//Rota para consulta
const consulta = require('./routes/consulta')
app.use('/consulta', consulta)


//Rota para ESPECIE
const especie = require('./routes/especie')
app.use('/especie', especie)


//Rota para RAÇA
const raca = require('./routes/raca')
app.use('/raca', raca)


//Rota para COURSE
const course = require('./routes/course')
app.use('/course', course)


//Rota para TEACHER
const teacher = require('./routes/teacher')
app.use('/teacher', teacher)

//Rota para HOUR
const hour = require('./routes/hour')
app.use('/hour', hour)

//Rota para STUDENT
const student = require('./routes/student')
app.use('/student', student)

module.exports = app;
