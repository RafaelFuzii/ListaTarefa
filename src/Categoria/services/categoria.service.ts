import categoriaModel from "../schemas/categoria.schema";
import { CategoriaType } from "../../types/categoria.type";

class CategoriaService {
    async create(categoria: CategoriaType) {
        const createdCategoria = await categoriaModel.create(categoria)
        return createdCategoria
    }

    async findAll() {
        const findedCategorias = await categoriaModel.find()
        return findedCategorias
    }

    async findById(id: string) {
        const findedCategoria = await categoriaModel.findById(id)
        return findedCategoria
    }

    async update(id: string, categoria: CategoriaType) {
        const updateCategoria = await categoriaModel.findByIdAndUpdate(id, {
            nome: categoria.nome, 
            cor: categoria.cor,
        }, { new: true })
        return updateCategoria
    }

    async delete(id: string) {
        try {
            await categoriaModel.findByIdAndDelete(id)
            return "Categoria Removido"
        } catch (error) {
            throw new Error(`Erro ao remover User: ${error}`)
        }
    }
}


export default new CategoriaService()