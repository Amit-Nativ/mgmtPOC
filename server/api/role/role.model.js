import { Schema, model } from 'mongoose'

const schema = new Schema({
    id: {
        type: String
    },
    name: {
        type: String
    },
    parent: {
        type: String
    }
})

export default model('Role', schema)