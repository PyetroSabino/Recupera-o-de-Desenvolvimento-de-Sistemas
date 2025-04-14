
let pecas = ['Chave de Fenda', 'Martelo', '', 'Parafusos', 'Pregos'];

estoque()

function estoque() {
    pecas.unshift('Serra')
    pecas.pop()
    console.log(pecas)
}
