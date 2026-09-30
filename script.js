// =============================
// MODAL
// =============================

function abrirModal() {
    document.getElementById("modal").classList.add("active");
}

function fecharModal() {
    document.getElementById("modal").classList.remove("active");
}


// =============================
// NOTIFICAÇÕES
// =============================

function mostrarNotificacoes() {

    const painel = document.getElementById("notifications");

    painel.classList.toggle("active");

}


// =============================
// IR PARA TAREFAS
// =============================

function irParaTarefas() {

    document.getElementById("tarefas").scrollIntoView({
        behavior: "smooth"
    });

}


// =============================
// CONCLUIR TAREFA
// =============================

function concluirTarefa(checkbox) {

    const tarefa = checkbox.closest(".task");

    tarefa.classList.toggle("completed", checkbox.checked);

    atualizarContadores();

}


// =============================
// CONTADORES
// =============================

function atualizarContadores() {

    const tarefas = document.querySelectorAll(".task");

    const concluidas = document.querySelectorAll(
        ".task input[type='checkbox']:checked"
    );

    document.getElementById("totalTarefas").textContent = tarefas.length;

    document.getElementById("concluidas").textContent =
        concluidas.length;

    document.getElementById("pendentes").textContent =
        tarefas.length - concluidas.length;

}


// =============================
// ADICIONAR TAREFA
// =============================

function adicionarTarefa() {

    const nome = document.getElementById("nomeTarefa").value.trim();

    const materia =
        document.getElementById("materiaTarefa").value.trim();

    if (nome === "" || materia === "") {

        alert("Preencha todos os campos!");

        return;
    }

    const lista = document.getElementById("listaTarefas");

    const novaTarefa = document.createElement("div");

    novaTarefa.classList.add("task");

    novaTarefa.innerHTML = `
        <input type="checkbox" onchange="concluirTarefa(this)">

        <div>
            <h3>${nome}</h3>
            <p>${materia}</p>
        </div>

        <span class="date">Nova</span>
    `;

    lista.appendChild(novaTarefa);

    document.getElementById("nomeTarefa").value = "";
    document.getElementById("materiaTarefa").value = "";

    fecharModal();

    atualizarContadores();

}


// =============================
// MATERIAIS
// =============================

function abrirMaterial(materia) {

    alert(
        "📚 Material de " +
        materia +
        "\n\nO conteúdo será disponibilizado aqui."
    );

}


// =============================
// FECHAR MODAL CLICANDO FORA
// =============================

window.addEventListener("click", function(event) {

    const modal = document.getElementById("modal");

    if (event.target === modal) {

        fecharModal();

    }

});


// =============================
// INICIALIZAÇÃO
// =============================

atualizarContadores();
