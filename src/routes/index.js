const express = require('express');
const router = express.Router(); 
const Count = require('../model/counts'); 
const Asiento = require('../model/asientos');


router.get('/', (req, res) => {
    res.render('index');
});


router.get('/addCount', async (req, res) => {
    const counts = await Count.find(); 
    res.render('addCount', {
        counts
    });
});

router.post('/addCount', async (req, res, next) => {
    const count = new Count(req.body);
    await count.save();
    res.redirect('/addCount');
});


router.get('/crear-asiento', async (req, res) => {
    const asientos = await Count.find();
    const nvo_asiento = await Asiento.find();
    res.render('crear-asiento', {   
        asientos, nvo_asiento 
    });
});

router.post('/crear-asiento', async (req, res, next) => {
    const nvo_asiento = new Asiento();
    nvo_asiento.fecha = req.body.fecha;
    cuentaJSON = req.body.cuenta;
    nvo_asiento.cuenta = JSON.parse(cuentaJSON);
    await nvo_asiento.save();
    res.redirect('/crear-asiento');
});


router.get('/edit/:id', async (req, res, next) => {
    let { id } = req.params;
    const count = await Count.findById(id);
    res.render('edit', { count });
});

router.post('/edit/:id', async (req, res, next) => { 
    const { id } = req.params;
    await Count.update({ _id: id }, req.body); 
    res.redirect('/addCount');
});


router.get('/delete/:id', async (req, res, next) => {
    const { id } = req.params;
    await Count.remove({ _id: id });
    res.redirect('/addCount')
});

router.get('/libro-mayor', async (req, res, next) => {
    // const asientos = await Count.find();
    const nvo_asiento = await Asiento.find();
    res.render('libro-mayor', {
        nvo_asiento
    });
});

router.get('/libro-mayor-ctas/:name', async (req, res, next) => {
    const { name } = req.params;
    // const lmayorAll = await Asiento.find();

    const lmayor = await Asiento.find({ "cuenta.nombre": name });
    const count_name = name

    // const lmayor = await Asiento.find({cuenta:{$elemMatch:{nombre:name}}})
    // const lmayor = await Asiento.find({}, { cuenta: { $elemMatch: { nombre: name } } })


    // for (var i = 0; i < lmayor.length; i++){
    //     for (var j = 0; j < lmayor[i].cuenta.length; j++){
    //         if (lmayor[i].cuenta[j].nombre == name){
    //             lma = await Asiento.find({ "nombre": name})
    //             // lm = lmayor[i]._id
                
    //         }
    //         // lma = await Asiento.find({ "_id": lm})
            
    //     }
    // }

    // res.redirect('/libro-mayo')

    res.render('libro-mayor-ctas', {
        lmayor, count_name
    })
});



module.exports = router;