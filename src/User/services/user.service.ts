import userModel from "../schemas/user.schema";
import { Usertype } from "../../types/user.type";

class UserService {
    async create(user: Usertype) {
        const createdBook = await userModel.create(user)
        return createdBook
    }

    async findAll() {
        const findedBooks = await userModel.find()
        return findedBooks
    }

    async findById(id: string) {
        const findedBook = await userModel.findById(id)
        return findedBook
    }

    async update(id: string, user: Usertype) {
        const updateBook = await userModel.findByIdAndUpdate(id, {
            name: user.name,
            peso: user.peso,
            senha: user.senha,
            email: user.email
        }, { new: true })
        return updateBook
    }

    async delete(id: string) {
        try {
            await userModel.findByIdAndDelete(id)
            return "User Removido"
        } catch (error) {
            throw new Error(`Erro ao remover User: ${error}`)
        }
    }
}


export default new UserService()