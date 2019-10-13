// const mongoose = require('mongoose');
// const Asiento = require('../model/asientos');

const allInfo = [];

function test() {

    // var allInfo = [];
    let cuentas = {};//create an empty object
    cuentas.nombre = document.getElementById('nombre').value;
    cuentas.debe = document.getElementById('debe').value;
    cuentas.haber = document.getElementById('haber').value;
    cuentas.importe = document.getElementById('importe').value;
    allInfo.push(cuentas);//you had to initialize the array before
    // Asiento.updateOne({ "numero_asiento": 1 }, { $set: { "cuenta": allInfo } });
    // document.getElementById("demo").innerHTML = document.getElementById('importe').value;
    // return cuentas;
    // <pre>cuentas</pre>
    // return allInfo;
}

        // document.getElementById("demo").innerHTML = test();
        // test();
        // const allInfo = [];

        // function insertar(){
        // User.insertOne({ cuentas: allInfo });
        // }
