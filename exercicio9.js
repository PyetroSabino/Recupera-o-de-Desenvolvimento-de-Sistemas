
let contatos = ['Pyetro Sabitudo', 'Kemell', 'Nicolas']
let contato = encontrarContato(contatos);

function encontrarContato(contatos) {
    return contatos.find(contato => contato.length > 10);
}

console.log(contato);
