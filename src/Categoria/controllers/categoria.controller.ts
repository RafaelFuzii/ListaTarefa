import { Request, Response } from 'express'
import CategoriaService from "../services/categoria.service";


class TarefaController {
    async create(req: Request, res: Response) {
        const createdCategoria = await CategoriaService.create(req.body)
        res.status(201)
        return res.json(createdCategoria)
    }

    async findAll(req: Request, res: Response) {
        const findedCategorias = await CategoriaService.findAll()
        return res.json(findedCategorias)
    }

    async findById(req: Request, res: Response) {
        const findedCategoria = await CategoriaService.findById(req.params.id)
        return res.json(findedCategoria)
    }

    async update(req: Request, res: Response) {
        const updatedCategoria = await CategoriaService.update(req.params.id, req.body)
        return res.json(updatedCategoria)
    }

    async delete(req: Request, res: Response) {
        const deleteMessage = await CategoriaService.delete(req.params.id)
        return res.json(deleteMessage)
    }
}

export default new TarefaController()