const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AsientoSchema = new Schema({
    fecha: Date,
    name: String,
    type: String,
    // type: [{ type: Schema.Types.ObjectId, ref: 'counts' }]
})


module.exports = mongoose.model('asientos', AsientoSchema);
