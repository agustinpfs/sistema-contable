const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// var Cuenta = mongoose.model('counts');



// const AsientoSchema = new Schema({
//     numero_asiento: Number,
//     fecha: Date,
//     cuentas: [{
//         nombre: String,
//         debe: String,
//         haber: String,
//         importe: Number
//     }],

// const 



const AsientoSchema = new Schema({
    numero_asiento: Number,
    fecha: Date,
    // cuenta: JSON.parse({ type: String }),
    cuenta: Array,
    // cuenta: [{
    //             nombre: String,
    //             debe: String,
    //             haber: String,
    //             importe: Number
    //         }],
    // dh: String,
    // importe: Number
    // name: { type: Schema.ObjectId, ref: "Cuenta" }  
    // type: String,
    // type: [{ type: Schema.Types.ObjectId, ref: 'counts' }]
})


// const Up = mongoose.model('asientos', AsientoSchema);
// const user = await Up.findOne({ name: 'leo' });

module.exports = mongoose.model('asientos', AsientoSchema);
