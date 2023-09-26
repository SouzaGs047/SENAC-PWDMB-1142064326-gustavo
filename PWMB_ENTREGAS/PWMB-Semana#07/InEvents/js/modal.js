const modal = document.getElementById("modal");
const nomeEventoModalElement = document.getElementById("nomeEventoModal");
const confirmarCompraButton = modal.querySelector("button:nth-of-type(1)");
let eventoSelecionado = null;

const comprarIngressoButtons = document.querySelectorAll(".comprar-ingresso-button");
comprarIngressoButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
        abrirModal(event);
    });
});

confirmarCompraButton.addEventListener("click", function () {
    comprarIngresso();
});

function abrirModal(event) {
    eventoSelecionado = event.target.closest(".event");

    if (eventoSelecionado) {
        const nomeEvento = eventoSelecionado.getAttribute("data-evento");
        nomeEventoModalElement.textContent = nomeEvento;
        modal.style.display = "block";
    }
}

function fecharModal() {
    modal.style.display = "none";
    eventoSelecionado = null;
}

function comprarIngresso() {
    if (eventoSelecionado) {
        const quantidade = parseInt(document.getElementById("quantidadeIngressos").value);

        let podeComprar = true;

        if (quantidade <= 0) {
            podeComprar = false;
            alert("A quantidade de ingressos deve ser maior que zero.");
        }

        const ingressosRestantesElement = eventoSelecionado.querySelector(".ingressosRestantes");
        const ingressosRestantes = parseInt(ingressosRestantesElement.textContent);

        if (quantidade > ingressosRestantes) {
            podeComprar = false;
            alert("Desculpe, não é possível comprar essa quantidade de ingressos.");
        }

        if (isNaN(quantidade)) {
            podeComprar = false;
            alert("Você deve digitar um valor válido para a quantidade de ingressos.");
        }

        if (podeComprar) {
            ingressosRestantesElement.textContent = ingressosRestantes - quantidade; 

            alert("Compra realizada com sucesso!"); 
            fecharModal();
        }
    }
}
