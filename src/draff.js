


// // crear-asiento.ejs




// <% include partials/_header %>

// <!-- <pre>
//         <%= asientos %>
// </pre>

// <pre>
//         <%= nvo_asiento %>
// </pre> -->


// <div>
//     <a href="/addCount">Crear Cuenta</a>
//     <a href="/crear-asiento">Crear Asiento</a>
//     <a href="/ver-libros">Ver Libros</a>
// </div>
// <br>
// <br>
// <br>
// <br>
// <script src="/crearasiento.js"></script>


// <h1>crear asiento</h1>
// <form action="/crear-asiento" method="post">
//     <strong>Nª: </strong>
//     <!-- <input type="number" name="numero_asiento" value="<%= i + 1%>" placeholder="<%= i + 1 %>"> -->
//     <strong>Fecha: </strong>
//     <input type="date" name="fecha" required>
//     <br>
//     <br>
//     <input type="hidden" id = ctas name="cuenta" value= allInfo >
//     <input type="button" value="crear asiento" onClick="asientoSubmit()">
//     {/* <button type="submit" style = "position: absolute; bottom: 2em">crear asiento</button> */}
// </form>

// <form action="/crear-asiento" method="post">
//         <strong>Elija cuenta: </strong>
//         <select name='nombre' id='nombre'>
//                 <% for(var i=0; i < asientos.length; i++) { %>
//                 <option value="<%= asientos[i].name %>"><%= asientos[i].name %></option>
//                 <% } %>
//         </select>
//         <div class="form-group" id="dh">
//             <label ><input type="radio" name="debehaber" id='debe' value="debe"> Debe</label> 
//             <label ><input type="radio" name="debehaber"id='haber' value="haber"> Haber</label> 
//         </div>
//         <br>
//         <br>
//         <strong>Importe: </strong>
//         <input type="number" name="importe" id="importe">
//         <input type="button" value="añadir al asiento" onClick="test()">
// </form> 


// <table border="1">
//     <thead>
//         <tr>
//             <th style = "width: 5%">N°</th>
//             <th style = "width: 10%">fecha</th>
//             <th style = "width: 85%">
//                 <table border="1" style = "width: 100%">
//                 <thead>
//                     <th style = "width: 25%">Nombre Cuenta</th>
//                     <th style = "width: 25%">Debe</th>
//                     <th style = "width: 25%">Haber</th>
//                     <!-- <th style = "width: 25%">importe</th> -->
//                 </thead>
//                 </table>
//             </th>
//         </tr>
//     </thead>
//     <tbody>
//         <% for(var i=0; i < nvo_asiento.length; i++) { %>
//         <tr>
//             <!-- <td><%= i + 1%></td> -->
//             <td><%= nvo_asiento[i].numero_asiento %></td>
//             <!-- <td><strong><%= nvo_asiento[i].numero_asiento %></strong></td> -->
//             <td><strong><%=  nvo_asiento[i].fecha.getDate() + '/'+(nvo_asiento[i].fecha.getMonth()+1) +'/' +nvo_asiento[i].fecha.getFullYear() %></strong></td>


//             <td>  
//                 <table style="width: 100%">
//                     <% for(var j=0; j < nvo_asiento[i].cuenta.length; j++) { %> 
//                 <tr>
//                     <td style = "width: 25%"><strong><%= nvo_asiento[i].cuenta[j].nombre %></strong></td>
//                     <%if(nvo_asiento[i].cuenta[j].debe=="debe"){%>
//                     <td style = "width: 25%"><strong><%= nvo_asiento[i].cuenta[j].importe %></strong></td>
//                     <%}else {%>
//                     <td style = "width: 25%"><strong></strong></td>   
//                     <%}%>
//                     <%if(nvo_asiento[i].cuenta[j].haber=="haber"){%>
//                     <td style = "width: 25%"><strong><%= nvo_asiento[i].cuenta[j].importe %></strong></td>
//                     <%} else{%>
//                     <td style = "width: 25%"><strong></strong></td>
//                     <%}%>
//                     <!-- <td style = "width: 25%"><strong><%= nvo_asiento[i].cuenta[j].importe %></strong></td> -->
               
//                 </tr>
//                 <% } %>
//                 </table>
//             </td>
            


//         </tr>
//         <% } %>
//     </tbody>
// </table>














// crearasiento
// crearasiento
// crearasiento
// crearasiento
// crearasiento
// crearasiento
// crearasiento
// crearasiento
// crearasiento
// crearasiento
// crearasiento


// // const mongoose = require('mongoose');
// // const Asiento = require('../model/asientos');

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
}

let asientoSubmit = () => {
    
    

    let val = cuenta.reduce(function (prevVal, currVal) {
        // return {
        //     adults: previousValue.adults + currentValue.adults,
        //     children: previousValue.children + currentValue.children
        // }

        // return {
        //     sumDebe: prevVal.debe + currVal.debe,
        //     sumHaber: prevVal.haber + currVal.haber
        // }

        let sumDebe: prevVal.debe + currVal.debe
        let sumHaber: prevVal.haber + currVal.haber

        if (sumDebe != sumHaber) {
            alert('respete el principio de la partida doble!!!!!!!!')
        }else{
            alert('asiento correcto!!!!!!!!')
        }

    });
    
}