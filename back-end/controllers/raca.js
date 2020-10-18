
/*
 
    QUATRO OPERAÇÕES BÁSICAS SOBRE DADOS
 
    1) CREATE (criação ou inserção)
       Cria um novo objeto dentro da coleção
       
    2) RETRIEVE (recuperação ou listagem)
        Permite recuperar os objetos a partir do BD
 
    3) UPDATE (atualização)
        Altera os dados de um objeto que JÁ EXISTE no BD
    
    4) DELETE (exclusão)
        Elimina um objeto do DB
 
    (C)reate + (R)etrieve + (U)pdate + (D)elete = CRUD    
 
    VERBOS HTTP ASSOCIADOS ÀS OPERAÇÕES CRUD
 
    Verbo       Operação
    POST        Create
    GET         Retrieve
    PUT         Update
    DELETE      Delete
 
*/
 
// Importar o model para dentro do controller
const Raca = require('../models/Raca')
 
const controller = {}   // Objeto vazio
 
// Método novo(), implementando a operação CREATE
controller.novo = async (req, res) => {
    try{
        // Envia os dados dentro de req.body para o BD para criação
        await Raca.create(req.body)
        // HTTP 201: Created
        res.status(201).end()
    }
    catch(erro){
        console.error(erro)
        // HTTP 500: Internal Server Error
        res.status(500).send(erro)
    }
}
 
// Método listar(), implementando a operação RETRIEVE (all)
controller.listar = async (req, res) => {
    try{
    //find() sem parâmetros é para trazer tudo 
    let dados = await Raca.find().populate("especie")
    res.send(dados)// Vai com status HTTP 200: OK
    }
    catch(erro){
        console.error(erro)
        res.status(500).send(erro)
    }
}
 
// Método obterUm(), implementando a operação RETRIEVE (one)
controller.obterUm = (req, res) => {
    const id = req.params.id // Capturandoo parâmetro id
    let obj = Raca.findById(id)
 
    // Se o objeto vier preenchido (achou), então o retornamos
    if(obj) res.send(obj)
    // Senão (objeto vazio), enviamos o status HTTP 404: Not found
    else res.status(404).end()
}

// Método atualizar(), implementado a operação UPDATE
controller.atualizar = async (req, res) => {
    try{
    // Isolar o id do objeto para fins de busca
    const id = req.body._id
    // Busca o objeto pelo id e, encontrando-o, substitui o conteúdo por req.body
    let obj = await Raca.findByIdAndUpdate(id, req.body)
 
    // Se encontrou e substituiu, retornamos HTTP 204: No content
    if(obj) res.status(204).end()
    // Caso contrário, retorna HTTP 404: Not found
    else res.status(404).end()
    }
    catch(erro){
        console.error(erro)
        res.status(500).end()
    }
} 

//Método excluir(), implementando a operação DELETE
controller.excluir = async (req, res) => {
    try{
        // Isolando o id para exclusão
        const id = req.body._id
        let obj = await Raca.findByIdAndDelete(id)
        
        //Encontrou e excluiu
        if(obj) res.status(204).end()
        // Objeto não foi encontrado para a exclusão
        else res.status(404).end()
    }
    catch(erro){
        console.error(erro)
        res.status(500).send(erro)
    }
}

module.exports = controller