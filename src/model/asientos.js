const mongoose = require('mongoose');
var AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;



const AsientoSchema = new Schema({
    numero_asiento: Number,
    fecha: Date,
    cuenta: Array,
})


AsientoSchema.plugin(AutoIncrement, { inc_field: 'numero_asiento'});
// AsientoSchema.plugin(AutoIncrement, { id: 'order_seq', inc_field: 'numero_asiento' });


module.exports = mongoose.model('asientos', AsientoSchema);
