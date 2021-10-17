const {Schema, model} = require('mongoose')

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        default: false
    },
    pictureUrl: {
        type: String,
        default: false
    },
    date: {
        type: Date,
        default: false
    },
    discription: {
        type: String,
        default: false
    },
    pictures: {
        type: String,
        default: false
    }
})

module.exports = model('Todo', schema)