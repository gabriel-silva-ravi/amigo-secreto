const listaNomes = [];

function adicionarNome() {
    const inputNome = document.getElementById("nome");
    const nome = inputNome.value.trim();
    
    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }
    
    listaNomes.push(nome);
    atualizarLista();
    inputNome.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("lista-nomes");
    lista.innerHTML = "";
    listaNomes.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaNomes.length === 0) {
        alert("A lista está vazia! Adicione nomes antes de sortear.");
        return;
    }
    
    const sorteado = listaNomes[Math.floor(Math.random() * listaNomes.length)];
    document.getElementById("resultado").textContent = `O amigo secreto é: ${sorteado}!`;
}

document.getElementById("botao-adicionar").addEventListener("click", adicionarNome);
document.getElementById("botao-sortear").addEventListener("click", sortearAmigo);
