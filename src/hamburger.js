//função menu hamburger
function toggleMenu() {
    const menu = document.querySelector('.submit-button');
    menu.classList.toggle('active');
  
    // Adiciona ou remove o evento de clique fora do menu
    if (menu.classList.contains('active')) {
      document.addEventListener('click', closeMenuOnOutsideClick);
    } else {
      document.removeEventListener('click', closeMenuOnOutsideClick);
    }
  }
  
  function closeMenuOnOutsideClick(event) {
    const menu = document.querySelector('.submit-button');
    const hamburger = document.querySelector('.hamburger-menu');
  
    // Verifica se o clique foi fora do menu ou do botão hambúrguer
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
      menu.classList.remove('active');
      document.removeEventListener('click', closeMenuOnOutsideClick);
    }
  }