// selector
let menu = document.querySelector('.hamburger');

// method
function toggleMenu (event) {
  event.preventDefault();
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
}

// event
menu.addEventListener('click', toggleMenu, false);
