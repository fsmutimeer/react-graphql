const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    name: {
        type:String
    },
    genre:{
        type:String
    },
    author_id:{
        // type:Schema.Types.ObjectId,
        // ref:'Author'
        type:String
    }
})

module.exports = mongoose.model('Book', BookSchema)