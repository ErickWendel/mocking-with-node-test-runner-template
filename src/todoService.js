export default class TodoService {
    #todoRepository

    constructor({ todoRepository }) {
        this.#todoRepository = todoRepository
    }

    create(todoItem) {
        if (!todoItem.isValid()) {
            return {
                error: {
                    message: 'invalid data',
                    data: todoItem
                }
            }
        }

        const { when } = todoItem
        const today = new Date()
        const todo = {
            ...todoItem,
            status: when > today ? 'pending' : 'late'
        }

        return this.#todoRepository.create(todo)
    }

    async list(query) {
        return (await this.#todoRepository.list())
            .map(({ text, ...result }) => ({ text: text.toUpperCase(), ...result }))
    }
}