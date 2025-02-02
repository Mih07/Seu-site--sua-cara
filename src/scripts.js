// Rodapé interativo - JavaScript para adicionar efeito de hover suave aos ícones das redes sociais//

document.addEventListener("DOMContentLoaded", function () {
  const socialIcons = document.querySelectorAll(".social-icons a");

  // Adiciona um event listener para cada ícone
  socialIcons.forEach((icon) => {
    // Adiciona transição suave à mudança de cor
    icon.style.transition = "filter 1.5s ease";

    icon.addEventListener("mouseenter", () => {
      // Muda a cor do ícone ao passar o mouse sobre ele
      icon.style.filter = "brightness(1.5)";
    });

    icon.addEventListener("mouseleave", () => {
      // Retorna ao estado original ao retirar o mouse do ícone
      icon.style.filter = "brightness(1)";
    });
  });
});

//rodapé
document.addEventListener("DOMContentLoaded", function () {
  // Cria o elemento de texto para o rodapé
  const text = document.createElement("h5");
  text.textContent = "© 2024 Seu site, sua cara | frontendMichele";

  // Insere o texto do rodapé no final do elemento de rodapé existente
  const footer = document.querySelector(".footer");
  footer.appendChild(text);

  // Adiciona um evento de rolagem para controlar a posição do footer
  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    var maxScroll = 500; // Defina a posição máxima da barra de rolagem em que o footer deve permanecer relativo

    if (scrollPosition > maxScroll) {
      footer.classList.add("fixed-footer");
    } else {
      footer.classList.remove("fixed-footer");
    }
  });
});

// Outras funcionalidades do javascript.js podem vir aqui...
//adicionando clique no títiulo<h3>

document.addEventListener("DOMContentLoaded", function () {
  // Adiciona um evento de clique a todos os títulos <h3> com a classe "toggle-paragraph"
  document.querySelectorAll(".toggle-paragraph").forEach(function (element) {
    element.addEventListener("click", function () {
      // Obtém todos os parágrafos irmãos (que são os elementos <p> associados aos <h3>)
      var paragraphs = this.parentElement.querySelectorAll("p");

      // Itera sobre todos os parágrafos e os exibe ou oculta
      paragraphs.forEach(function (paragraph) {
        paragraph.classList.toggle("hidden");
      });
    });
  });
});

// Adiciona eventos de mouse para alterar a cor do texto quando o mouse passa sobre o título
document.querySelectorAll(".toggle-paragraph").forEach(function (element) {
  // Adiciona a classe "hovered" quando o mouse passa sobre o elemento <h3>
  element.addEventListener("mouseover", function () {
    this.classList.add("hovered");
  });

  // Remove a classe "hovered" quando o mouse sai do elemento <h3>
  element.addEventListener("mouseout", function () {
    this.classList.remove("hovered");
  });

  // Adiciona um evento de clique para alternar a exibição dos parágrafos
  element.addEventListener("click", function () {
    var paragraphs = this.parentElement.querySelectorAll("p");
    paragraphs.forEach(function (paragraph) {
      paragraph.classList.toggle("hidden");
    });
  });
});

// Função para mostrar o projeto selecionado e ocultar os outros
function mostrarProjeto() {
  var select = document.getElementById("projeto-select");
  var selectedProject = select.options[select.selectedIndex].value;
  var projects = document.getElementsByClassName("project");

  for (var i = 0; i < projects.length; i++) {
    projects[i].style.display = "none";
  }

  document.getElementById(selectedProject).style.display = "block";
}

// Adicione um evento de mudança à caixa de seleção
document
  .getElementById("projeto-select")
  .addEventListener("change", mostrarProjeto);

// Mostrar o projeto inicial ao carregar a página
mostrarProjeto();

// Função para abrir a imagem em tela cheia
$(document).ready(function () {
  $('[data-fancybox="gallery1"]').fancybox();
  $('[data-fancybox="gallery2"]').fancybox();
  $('[data-fancybox="gallery3"]').fancybox();
  $('[data-fancybox="gallery4"]').fancybox();
  // Adicione mais linhas semelhantes para cada projeto conforme necessário
});






