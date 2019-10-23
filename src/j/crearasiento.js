const cuenta = [];

function test() {

    let cuentas = {};
    cuentas.nombre = document.getElementById('nombre').value;
    var ele = document.getElementsByName('debehaber'); 
    if(ele[0].checked){
        cuentas.debe = document.getElementById('debe').value;
    }
    else if(ele[1].checked){
        cuentas.haber = document.getElementById('haber').value;
    }
    cuentas.importe = document.getElementById('importe').value;
    // cuentas.tipo = document.getElementById('tipo').value;
    pepe = cuentas.nombre;
    if (pepe == "Inmuebles" || "Mercaderías" || "Muebles y útiles" ||
    "Documentos a cobrar" || "Caja" || "Bancos") {
        cuentas.tipo = "ACTIVO"
    }
    if (pepe == "Proveedores" || "Sueldos a pagar" || "Anticipo a clientes" ||
    "Documentos a pagar") {
        cuentas.tipo = "PASIVO"
    }
    if (pepe == "Capital social") {
        cuentas.tipo = "PN"
    }
    if (pepe == "Ventas") {
        cuentas.tipo = "RESULTADO"
    }
    

    cuenta.push(cuentas);
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


    document.getElementById("nombre").value = ""
    document.getElementById("debe").checked = false
    document.getElementById("haber").checked = false
    document.getElementById("importe").value = ""
    document.getElementById("nombre").focus();

}

function asientoSubmit() {
    const sumD = 0;
    const sumH = 0;
    console.log(sumD)
    console.log(sumH)
    for (let i = 0; i < cuenta.length; i++) {
        if (cuenta[i].debe) {
            sumD = sumD + cuenta[i].importe;
        }
        if (cuenta[i].haber) {
            sumH = sumH + cuenta[i].importe;
        }        
    }

    if (sumD == sumH) {
        var f = document.crearAsientoForm
        if (f.checkValidity()) {
            f.submit();
        } 

    } else {
        alert('respete el principio de la partida doble!!!!!!!!')
        location.reload()
    }

    document.getElementById("fecha").value = ""
};

    

