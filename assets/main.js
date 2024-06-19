// Script para controlar o modo escuro

// Seleciona o elemento de troca de modo escuro
const toggleSwitch = document.querySelector("#toggleDarkMode");

// Adiciona um ouvinte de eventos ao elemento de troca
toggleSwitch.addEventListener("change", switchTheme, false);

// Função para alternar entre os temas claro e escuro
function switchTheme(e) {
  if (e.target.checked) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}
