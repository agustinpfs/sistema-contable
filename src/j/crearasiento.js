// const mongoose = require('mongoose');
// const Asiento = require('../model/asientos');

const cuenta = [];

function test() {

    // var allInfo = [];
    let cuentas = {};//create an empty object
    cuentas.nombre = document.getElementById('nombre').value;
    var ele = document.getElementsByName('debehaber'); 
    if(ele[0].checked){
        cuentas.debe = document.getElementById('debe').value;
    }
    else if(ele[1].checked){
        cuentas.haber = document.getElementById('haber').value;
    }
    cuentas.importe = document.getElementById('importe').value;
    cuenta.push(cuentas);//you had to initialize the array before
    document.getElementById("ctas").value = JSON.stringify(cuenta);



    let pos = cuenta.length - 1
    var table = document.getElementById("tablaCuentas")
    var row = table.insertRow(pos)
    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(1)
    var cell3 = row.insertCell(2)
    cell1.innerHTML = cuenta[pos].nombre
    if (cuenta[pos].debe) {
        cell2.innerHTML = cuenta[pos].debe
    }
    else if (cuenta[pos].haber) {
        cell2.innerHTML = cuenta[pos].haber
    }
    cell3.innerHTML = cuenta[pos].importe
    table.style.border = "1px solid #000"


    // document.nombre.focus();
    document.getElementById("nombre").value = ""
    document.getElementById("debe").checked = false
    document.getElementById("haber").checked = false
    document.getElementById("importe").value = ""
    document.getElementById("nombre").focus();

}

// let asientoSubmit = () => {

// function submitform() {
//     var f = document.getElementsByTagName('form')[0];
//     if (f.checkValidity()) {
//         f.submit();
//     } else {
//         alert(document.getElementById('example').validationMessage);
//     }
// }

function asientoSubmit() {
    sumD = 0;
    sumH = 0;
    for (let i = 0; i < cuenta.length; i++) {
        if (cuenta[i].debe) {
            sumD = sumD + cuenta[i].importe;
        }
        if (cuenta[i].haber) {
            sumH = sumH + cuenta[i].importe;
        }
        
    }

    if (sumD == sumH) {
        // alert('asiento correcto!!!!!!!!')
        var f = document.crearAsientoForm
        if (f.checkValidity()) {
            f.submit();
        } 

    } else {
        alert('respete el principio de la partida doble!!!!!!!!')
        location.reload()
    }

    document.getElementById("fecha").value = ""



    // var count = cuenta.reduce(function (prevVal, currVal) {
    // // return {
    // //     adults: previousValue.adults + currentValue.adults,
    // //     children: previousValue.children + currentValue.children
    // // }

    // return {
    //     sumDebe: prevVal.importeDebe + currVal.importeDebe,
    //     sumHaber: prevVal.importeHaber + currVal.importeHaber
    // }
    // sumD = count.sumDebe
    // sumH = count.sumHaber

    // })

    // if (sumD == sumH) {
    //     alert('asiento correcto!!!!!!!!')
    // } else {
    //     alert('respete el principio de la partida doble!!!!!!!!')
    // }

};

    

