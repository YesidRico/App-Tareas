const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Tarea = Schema({
    name: String,
    priority: { type: String, enum: ['Muy Alta', 'Alta', 'Media', 'Baja'] },
    state: { type: String, enum: ['Realizada', 'No Realizada'], default: 'No Realizada' },
    category: String,
    description: String

})

const TareaModel = mongoose.model('Tarea', Tarea);


module.exports = TareaModel;