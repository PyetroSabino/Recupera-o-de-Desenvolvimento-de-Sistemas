
let lista = ["Mario", "Luigi", "Kemell", "Pyetro", "Nicolas"];
lista.unshift('Maria')

function deletar() {
    const index = lista.indexOf('Kemell');
    if (index > -1) {
        lista.splice(index, 1)
    }
}

console.log(deletar())
console.log(lista)
