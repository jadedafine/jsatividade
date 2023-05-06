let frase = prompt('Insira uma frase:')
let contagemA = 0
for (let i = 0; i < frase.length; i++) {
  if (frase[i] === 'a' || frase[i] === 'A') {
    contagemA++
  }
}
console.log(`A letra 'a' aparece ${contagemA} vezes na frase.`)
