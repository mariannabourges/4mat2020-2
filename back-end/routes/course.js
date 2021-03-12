const controller = require('../controllers/course')
const express = require('express')

const router = express.Router()

router.post('/', controller.novo) // Create
router.get('/', controller.listar)      // Retrieve
router.get('/:id', controller.obterUm)  //Retrieve (one)
router.put('/', controller.atualizar) // Update
router.delete('/', controller.excluir) // Deletes

module.exports = router