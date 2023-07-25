// stampa un numero
const number = parseInt(prompt("seleziona un numero "));

// dividiamo i numeri pari da quelli dispari
const numberEven = number % 2 == 0;

// SE il numero è pari stampiamo il numero
if (numberEven == true) {
  console.log(number);
}

// Altrimenti stampiamo il numero + 1
else {
  console.log(number + 1);
}
