
let eventos = ["08:00 - Ir as compras","13:00 - Almoço","14:00 - Estudar"];
function inserirEvento(posicao, evento)
{
    eventos.splice(posicao,0, evento)
}

function removerEvento(Evento, pos) {
    pos = eventos.indexOf(Evento)
    if (pos != -1){
    eventos.splice(pos, 1)
    }
}
console.log(eventos)
removerEvento("08:00 - Ir as compras")
console.log(eventos)
inserirEvento(2, "18:00 Jantar")
console.log(eventos)
