/*

    QUATRO OPERAÇÕES BÁSICAS SOBRE DADOS

    1) CREATE (criação ou inserção)
        Cria um novo objeto dentro da coleção

    2) RETRIEVE (recuperação ou listagem)
        Permite recuperar os objetos a partirdo banco de dados (BD)
   
    3) UPDATE (atualização)
        Altera os dados de um objeto que JÁ EXISTE no Banco de Dados (BD)
    
    4) DELETE (exclusão)
        Elimina um objeto do Banco de Dados (BD)

    (C)reate + (R)etrieve + (U)pdate + (D)elete = CRUD

    VERBOS HTTP ASSOCIADOS ÀS OPERAÇÕES CRUD

    Verbo       Operação
    POST        Create
    GET         Retrieve
    PUT         Update
    DELETE      Delete

*/

// Importar o model para dentro do controller
const Curso = require('../models/Curso')

const controller = {}       // Objeto vazio

// Método novo(), implementando a operação CREATE
controller.novo = async (req, res) => {
    try {
        // Envia os dados dentro de req.body para o BD para criação
        await Curso.create(req.body)
        // HTTP 201: Created
        res.status(201).end()
    }
    catch(erro) {
        console.error(erro)
        // HTTP 500: Internal Server Error
        res.status(500).send(erro)
    }
}

module.exports = controller