
const options = []

document.querySelectorAll('#nomLMyr > option').forEach((option) => {
    if (options.includes(option.value)) option.remove()
    else options.push(option.value)
})

// function saldoFunction() {
//     saldo = 0;
//     for (let i = 0; i < cuenta.length; i++) {
//         if (cuenta[i].debe) {
//             sumD = sumD + cuenta[i].importe;
//         }
//         if (cuenta[i].haber) {
//             sumH = sumH + cuenta[i].importe;
//         }
        
//     }