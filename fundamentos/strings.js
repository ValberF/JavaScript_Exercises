const escola = "Cod3r"

console.log(escola.charAt(4)) // retona o valor na posicao escolhida da string
console.log(escola.charAt(5)) // retorna nada e sem erros
console.log(escola.charCodeAt(3)) // retona o valor da tabela Ascii da posicao da string
console.log(escola.indexOf('3')) // retona a posicao do valor
console.log(escola.substring(1)) // delimita de onde vai se iniciar a string
console.log(escola.substring(0, 3)) // mostra os valores da string num determinado intervalo
console.log('Escola ' .concat(escola).concat("!")) // concatena strings
console.log('Escola ' +escola + "!") // concatena strings
console.log(escola.replace(3 , 'e')) // substitui um valor por outros
console.log('Ana, Maria, Pedro'.split(',')) // split converte string em um array
