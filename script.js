const resultado = document.getElementById("resultado");
const texto = document.getElementById("texto");
const icone = document.getElementById("copiar-colar");

texto.addEventListener("input", function() {
    resultado.textContent = texto.value.length;
});

function copiarValor() {
    const textArea = document.getElementById('texto');
    const textoDigitado = textArea.value;
    navigator.clipboard.writeText(textoDigitado);
  icone.className = "fas fa-check";
  setTimeout(function() {
    icone.className = "fa-solid fa-copy";
  }, 2000);
}

icone.addEventListener("click", copiarValor);

const checkNoturno = document.getElementById("check-noturno");

checkNoturno.addEventListener("change", function() {
    if (checkNoturno.checked === true)  {
        document.body.classList.add("modo-noturno");
    }
    else {
        document.body.classList.remove("modo-noturno");
    }
});