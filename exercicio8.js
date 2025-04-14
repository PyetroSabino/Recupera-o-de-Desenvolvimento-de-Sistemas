
let biblioteca = ["Assassinato no Expresso Oriente - Agatha Christie", "Eu, Robô - Isaac Asimov", "Como enfretar o Dio- Felipe Neto"]

function verificarLivro(livro, pos) {
       pos = biblioteca.indexOf(livro)
    if (pos != -1) {
        console.log(`A posição é ${pos}`);
    }
    else{
        console.log("Livro não encontrado")
    }
}

verificarLivro("Além do bem e do mal - Friedrich Nietzsche");

verificarLivro("Eu, Robô - Isaac Asimov")
