
let chamada = ["Pyetro","Nicolas","Renan"];
function inserirAluno(posicao, aluno)
{
    chamada.splice(posicao,0, aluno)
}

function removerAluno(aluno, posicao) {
    chamada.indexOf(aluno)
    if (posicao != -1){
    chamada.splice(posicao, 1)
    }
}
console.log(chamada)
removerAluno("Renan")
console.log(chamada)
inserirAluno(2, "Felipe")
console.log(chamada)
