const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CountSchema = new Schema({ 
    name: String,
    type: String
    
});

// const AsientoSchema = new Schema({
//     fecha: Date,
//     name: String,
//     type: String,
//     // type: [{ type: Schema.Types.ObjectId, ref: 'counts' }]
// })

module.exports = mongoose.model('counts', CountSchema);


// module.exports = 
// const Cuenta = mongoose.model('counts', CountSchema);
// const Asiento = mongoose.model('asientos', AsientoSchema);

// const personSchema = Schema({
//     _id: Schema.Types.ObjectId,
//     name: String,
//     age: Number,
//     stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
// });

// const storySchema = Schema({
//     author: { type: Schema.Types.ObjectId, ref: 'Person' },
//     title: String,
//     fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
// });

// const Story = mongoose.model('Story', storySchema);
// const Person = mongoose.model('Person', personSchema);