const express = require('express');
const router = express.Router(); 
const Count = require('../model/counts'); 
const Asiento = require('../model/asientos'); 


router.get('/', (req, res) => {
    res.render('index');
});

// router.get('/addCount', (req, res) => {
//     res.render('addCount');
// });

router.get('/addCount', async (req, res) => {
    const counts = await Count.find(); 
    // console.log(counts);
    res.render('addCount', {    //en settings está configurado en app.js
        counts   // lo mismo que countss:countss  // paso las tareas para mostrarse en pantalla
    });
});

router.get('/crear-asiento', async (req, res) => {
    const asientos = await Count.find();//.populate("name");
    // console.log(counts);
    res.render('crear-asiento', {    //en settings está configurado en app.js
        asientos   // lo mismo que countss:countss  // paso las tareas para mostrarse en pantalla
    });
});


// app.get("/crear-asiento", function (req, res) {
//     Asiento.find({}, function (err, crear-asiento) {
//         Count.populate(crear-asiento, { path: "name" }, function (err, crear-asiento) {
//             res.status(200).send(crear-asiento);
//         });
//     });
// });








router.post('/addCount', async (req, res, next) => {
    const count = new Count(req.body);
    // const asiento = new Asiento(req.body);
    // //console.log(counts);
    await count.save(); //para que se almacene en la db con async await 
    // await asiento.save(); //para que se almacene en la db con async await 
    res.redirect('/addCount');  // redirecciona a la ruta inicial del servidor
});


router.get('/edit/:id', async (req, res, next) => {
    let { id } = req.params;
    const count = await Count.findById(id);
    // res.redirect('/addCount');
    res.render('edit', { count });
});

router.post('/edit/:id', async (req, res, next) => { 
    const { id } = req.params;
    await Count.update({ _id: id }, req.body); 
    res.redirect('/addCount');
    // res.render('addCount', { count });
});


router.get('/delete/:id', async (req, res, next) => { //:id(puede ser cualquier nombre) irá el nº de la tarea y lo recibo
    // console.log(req.params.id); 
    //res.send(recivido);  
    // req.params 
    const { id } = req.params;
    await Count.remove({ _id: id }); //lo borra de la db
    res.redirect('/addCount')
});




module.exports = router;