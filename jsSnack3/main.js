// creo lista numeri interi
const numbers = [0, 1, 2, 3, 4, 5, 6, 7];

//creo una somma a 0
let sum = 0;

//seleziono gli elementi in posizione dispari
for (let i = 0; i < numbers.length; i++) {
  const oddNumbers = numbers[i];
  console.log(oddNumbers);

  if (i % 2 != 0) {
    sum += oddNumbers;
  }
}
console.log("somma numeri dispari: " + sum);
