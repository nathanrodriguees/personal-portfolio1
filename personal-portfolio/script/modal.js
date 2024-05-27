// Seleciona o elemento de abertura da modal
var curriculoLink = document.querySelector("#curriculo-link");

// Seleciona a modal e o botão de fechar
var modal = document.querySelector(".modal");
var closeModal = document.querySelector(".close");

// Função para abrir a modal
function openModal() {
  modal.style.display = "block";
  // Bloqueia a rolagem da página
  document.body.style.overflow = "hidden";
}

// Função para fechar a modal
function closeModalFunc() {
  modal.style.display = "none";
  // Habilita a rolagem da página
  document.body.style.overflow = "auto";
}

// Evento de clique para abrir a modal quando clicar no link do currículo
curriculoLink.addEventListener("click", openModal);

// Evento de clique para fechar a modal quando clicar no botão de fechar
closeModal.addEventListener("click", closeModalFunc);

// Evento de clique fora da modal para fechar
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// Oculta a modal ao carregar a página
window.addEventListener("load", function() {
  modal.style.display = "none";
});
