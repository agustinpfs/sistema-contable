const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// var Cuenta = mongoose.model('counts');



const AsientoSchema = new Schema({
    numero_asiento: Number,
    fecha: Date,
    importe: Number,
    cuenta: String,
    dh: String

    // name: { type: Schema.ObjectId, ref: "Cuenta" }
    
    // type: String,
    // type: [{ type: Schema.Types.ObjectId, ref: 'counts' }]
})


module.exports = mongoose.model('asientos', AsientoSchema);
