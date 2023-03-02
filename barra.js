let progresso = document.querySelector(".barra div");
let input = document.querySelector("input");

function alterarProgresso() {
    progresso.setAttribute("style", "width: " + input.value + "%");
}