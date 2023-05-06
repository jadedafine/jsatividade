let palavra = prompt("Digite uma palavra:");

let palavraInver = palavra.split("").reverse().join("");

if (palavraInver === palavra) {
  console.log(`${palavra} é um palíndromo.`);
} else {
  console.log(`${palavra} não é um palíndromo.`);
}
