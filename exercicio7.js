
let jogadores = ["70correr", "100nocao", "Kemell789", "SiIvaGunner420"]
console.log(jogadores)
for (let i = 0; i < 4; i++) {
    comecarPartida(jogadores.length)
    console.log(jogadores)
}

function comecarPartida(indexJogadores) {
    if (indexJogadores >= 3) {
        jogadores.shift()
    } else {
        jogadores.push("slanaosei69")
    }
}
