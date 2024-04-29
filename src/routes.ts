import { Router } from 'express'
import userController from './User/controllers/user.controller'
import tarefaController from './Tarefa/controllers/tarefa.controller'
import categoriaController from './Categoria/controllers/categoria.controller'

const routes = Router()

// Rota de Users

routes.post('/users', userController.create)
routes.get('/users', userController.findAll)
routes.get('/user/:id', userController.findById)
routes.put('/user/:id', userController.update)
routes.delete('/user/:id', userController.delete)

// Rota de Tarefas

routes.post('/tarefas', tarefaController.create)
routes.get('/tarefas', tarefaController.findAll)
routes.get('/tarefa/:id', tarefaController.findById)
routes.put('/tarefa/:id', tarefaController.update)
routes.delete('/tarefa/:id', tarefaController.delete)

// Rotas Utilizando Array
routes.get('/tarefa/buscar/:categoria', tarefaController.listarPorCategoria)
routes.get('/tarefas/concluidos', tarefaController.listarConcluidos)
routes.get('/tarefas/pendete', tarefaController.pendentes)
routes.get('/tarefas/:user', tarefaController.contarTarefas)
routes.get('/media', tarefaController.mediaTarefasConcluido)
routes.get('/descricaoLonga/tarefa', tarefaController.descriptionLonger)

// Rota de Categoria

routes.post('/categorias', categoriaController.create)
routes.get('/categorias', categoriaController.findAll)
routes.get('/categoria/:id', categoriaController.findById)
routes.put('/categoria/:id', categoriaController.update)
routes.delete('/categoria/:id', categoriaController.delete)

export {
    routes
}