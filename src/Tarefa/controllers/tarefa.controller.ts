import { Request, Response } from 'express'
import TarefaService from "../services/tarefa.service";


class TarefaController {
    async create(req: Request, res: Response) {
        const createdTarefa = await TarefaService.create(req.body)
        res.status(201)
        return res.json(createdTarefa)
    }

    async findAll(req: Request, res: Response) {
        const findedTarefas = await TarefaService.findAll()
        return res.json(findedTarefas)
    }

    async findById(req: Request, res: Response) {
        const findedTarefa = await TarefaService.findById(req.params.id)
        return res.json(findedTarefa)
    }

    async update(req: Request, res: Response) {
        const updatedTarefa = await TarefaService.update(req.params.id, req.body)
        return res.json(updatedTarefa)
    }

    async delete(req: Request, res: Response) {
        const deleteMessage = await TarefaService.delete(req.params.id)
        return res.json(deleteMessage)
    }

    async listarPorCategoria(req: Request, res: Response) {
        const categoria = req.params.categoria
        const tarefa = await TarefaService.listarPorCategoria(categoria)
        return res.json(tarefa)
    }

    async listarConcluidos(req: Request, res: Response) {
        const concluidos = await TarefaService.listarConcluidos()
        return res.json(concluidos)
    }

    async pendentes(req: Request, res: Response) {
        const pendente = await TarefaService.pendentes()
        return res.json(pendente)
    }

    async contarTarefas(req: Request, res: Response) {
        const user = req.params.user
        const tarefa = await TarefaService.contarTarefas(user)
        return res.json(tarefa)
    }

    async mediaTarefasConcluido(req: Request, res: Response) {
        const tarefa = await TarefaService.mediaTarefasConcluido()
        return res.json(tarefa)
    }

    async descriptionLonger(req: Request, res: Response) {
        const tarefa = await TarefaService.descriptionLonger()
        return res.json(tarefa)
    }
}

export default new TarefaController()