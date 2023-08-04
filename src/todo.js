import crypto from 'node:crypto'

export default class Todo {
    constructor({ text, when }) {
        this.text = text
        this.when = when

        this.status = ''
        this.id = crypto.randomUUID()
    }

    isValid() {
        //  - !!
        return !!this.text && !isNaN(this.when.valueOf())
    }

}

