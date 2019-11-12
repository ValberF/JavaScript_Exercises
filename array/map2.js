const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
]

const converte = e => JSON.parse(e)
const pegaPreco = e => e.preco
let resultado = carrinho.map(converte).map(pegaPreco)

console.log(resultado)