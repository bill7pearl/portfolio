let menu = document.querySelector(".mobile-menu");
let menuItems = document.querySelectorAll(".menu-item");
let hamburger= document.querySelector(".hamburger");
let closeIcon= document.querySelector(".close-icon");
let menuIcon = document.querySelector(".menu-icon");

function toggleMenu() {
    if (menu.classList.contains("show-menu")) {
      menu.classList.remove("show-menu");
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
    } else {
      menu.classList.add("show-menu");
      closeIcon.style.display = "block";
      menuIcon.style.display = "none";
    }
  }
  
  hamburger.addEventListener("click", toggleMenu);
  
  menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    }
  )
