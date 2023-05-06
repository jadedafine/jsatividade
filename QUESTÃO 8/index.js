let numero = parseInt(prompt("Insira um número:"));

function ePrimo(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

for (let i = 2; i <= numero; i++) {
  if (ePrimo(i)) {
    console.log(i);
  }
}
