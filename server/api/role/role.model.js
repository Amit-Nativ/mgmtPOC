import { Schema, model } from 'mongoose'

const schema = new Schema({
    id: {
        type: String
    },
    name: {
        type: String
    },
    hierarchy: {
        type: [String]
    }
})

export default model('Role', schema)