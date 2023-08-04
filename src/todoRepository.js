
export default class TodoRepository {
    #schedule
    constructor({ db }) {
        this.#schedule = db.addCollection('schedule')
    }

    async list() {
        // deveria ser um .project() mas não temos no lokijs
        return this.#schedule.find().map(({ meta, $loki, ...result }) => result)
    }

    async create(data) {
        return this.#schedule.insertOne(data)
    }
}



// const c = new TodoRepository()

// c.create({ name: 'XuxaDaSilva', age: 90})
// c.create({ name: 'Joaozinho', age: 90})

// console.log('list', c.list())