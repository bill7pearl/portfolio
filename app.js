window.onload = (event) =>{

  console.log('Page Loaded');

};
const menu = document.querySelector('.mobile-menu');
const menuItems = document.querySelectorAll('.menu-item');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close-icon');
const menuIcon = document.querySelector('.menu-icon');

function toggleMenu() {
  if (menu.classList.contains('show-menu')) {
    menu.classList.remove('show-menu');
    hamburger.style.backgroundColor = '#fff';
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('show-menu');
    hamburger.style.backgroundColor = '#6070ff';
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu);

menuItems.forEach(
  (menuItem) => {
    menuItem.addEventListener('click', toggleMenu);
  },
);

// JS projects data //

