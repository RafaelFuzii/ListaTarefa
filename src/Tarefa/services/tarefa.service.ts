import tarefaModel from "../schemas/tarefa.schema";
import { TarefaType } from "../../types/tarefa.type";

class TarefaService {
    async create(tarefa: TarefaType) {
        const createdTarefa = await tarefaModel.create(tarefa)
        return createdTarefa
    }

    async findAll() {
        const findedTarefas = await tarefaModel.find()
        return findedTarefas
    }

    async findById(id: string) {
        const findedTarefa = await tarefaModel.findById(id)
        return findedTarefa
    }

    async update(id: string, tarefa: TarefaType) {
        const updateTarefa = await tarefaModel.findByIdAndUpdate(id, {
            titulo: tarefa.titulo, 
            descricao: tarefa.descricao,
            data_criacao: tarefa.data_criacao,
            data_conclusao: tarefa.data_conclusao,
            tipo: tarefa.tipo,
            categoria: tarefa.categoria,
            status: tarefa.status,
            user: tarefa.user,
        }, { new: true })
        return updateTarefa
    }

    async delete(id: string) {
        try {
            await tarefaModel.findByIdAndDelete(id)
            return "Tarefa Removido"
        } catch (error) {
            throw new Error(`Erro ao remover User: ${error}`)
        }
    }

    async listarPorCategoria(categoria: String) {
        const find = await tarefaModel.find({categoria: categoria})
        return find
    }

    async listarConcluidos(){
        try{
            const findAllTarefa = await tarefaModel.find()
            const filter = findAllTarefa.filter(tarefas => tarefas.status == "concluido")
            return filter
        } catch (error) {
            throw new Error(`Erro ao Achar Tarefa Concluídas`)
        }
    }

    async pendentes(){
        try{
            const findAllTarefa = await tarefaModel.find()
            const filter = findAllTarefa.filter(tarefas => tarefas.status == "pendente")
            return filter
        } catch (error) {
            throw new Error(`Erro ao Achar Tarefa Pendente`)
        }
    }

    async contarTarefas(user: String){
        try{
            const findTarefa = await tarefaModel.find({user: user})
            const contarPorStatus = findTarefa.map(tarefa => {
                return { status: tarefa.status };
            });
            return contarPorStatus.length
        } catch (error) {
            throw new Error(`Erro ao Achar Tarefa`)
        }
    }
    

    async mediaTarefasConcluido(){
        const findAll= await tarefaModel.find()
        const filters = findAll.filter(tarefas => tarefas.status == "concluido").length
        const tarefaAll = findAll.filter(tarefas => tarefas.status).length
        let concluido = filters
        const media = concluido / tarefaAll

        return media.toFixed(2)
    }
    
    async descriptionLonger() {
        const result = await tarefaModel.aggregate([
            {
                $project: {
                    descricao: 1,
                    length: { $strLenCP: "$descricao" } 
                }
            },
            {
                $sort: { length: -1 }
            },
            {
                $limit: 1 
            }
        ]);
        return result
    }



}


export default new TarefaService()