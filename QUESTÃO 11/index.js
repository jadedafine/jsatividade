const numeros = prompt("Digite uma lista de números separados por vírgula:");

const numerosArray = numeros.split(",").map(numero => parseFloat(numero));

function encontrarSegundoMaior(lista) {
  let maior = -Infinity;
  let segMaior = -Infinity;

  for (let i = 0; i < lista.length; i++) {
    if (lista[i] > maior) {
      segMaior = maior;
      maior = lista[i];
    } else if (lista[i] > segMaior && lista[i] !== maior) {
      segMaior = lista[i];
    }
  }

  return segMaior;
}

const segMaior = encontrarSegundoMaior(numerosArray);

console.log(`O segundo maior número é: ${segMaior}`);