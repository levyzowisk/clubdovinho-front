// for(let i = 1; i<=100; i++) {
//     document.write('Carro pancadao hey <br>');

// }

let i = 1

// while(i <= 100) {
//     document.write('Levy <br>')
//     i++
// }

const input_select_dia = document.getElementById("dia");
const input_select_mes = document.getElementById("mes");
const input_select_ano = document.getElementById("ano")

const meses = ['Jan', 'Fev', 'Mar', 'Abril', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

// ------------- Dia --------------------------
for(let i= 1; i <= 31; i++) {
    // input_select.write(`<option> ${i} </option>`);

    // A cada iteração ele incrementa no elemento do html.
    // Se utilizo o operador "=" ele atualiza sem manter o valor anterior.
    input_select_dia.innerHTML += `<option> ${i} </option>`;
}

// ----------- Mês ----------------- Existe duas formas -----------------

// for(let i = 0; i <= 11; i++) {
//     input_select_mes.innerHTML += `<option> ${meses[i]} </option>`;

// }

meses.map((value) => {
    input_select_mes.innerHTML += `<option> ${value} </option>`
})

// ------------- Ano ----------------
for(let i = 1950; i <= 2030; i++) {
    if(i % 2 != 0) {
        input_select_ano.innerHTML += `<option> ${i} </option>`;

    }
}




