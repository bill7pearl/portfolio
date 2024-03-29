/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
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
const projectsData = [
  {
    id: 1,
    title: 'Tonic',
    infos: ['CANOPY', 'Back End Dev', 2015],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    languages: ['HTML', 'CSS', 'JS'],
    image: 'images/div1-bg.png',
    seeLive: '#',
    seeSource: '#',
  },
  {
    id: 2,
    title: 'Multi-post Stories',
    infos: ['CANOPY', 'Back End Dev', 2015],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    languages: ['HTML', 'CSS', 'JS'],
    image: 'images/div2-bg.png',
    seeLive: '#',
    seeSource: '#',
  },
  {
    id: 3,
    title: 'Multi-post Stories',
    infos: ['CANOPY', 'Back End Dev', 2015],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    languages: ['HTML', 'CSS', 'JS'],
    image: 'images/div3-bg.png',
    seeLive: '#',
    seeSource: '#',
  },
  {
    id: 4,
    title: 'Multi-post Stories',
    infos: ['CANOPY', 'Back End Dev', 2015],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    languages: ['HTML', 'CSS', 'JS'],
    image: 'images/div4-bg.png',
    seeLive: '#',
    seeSource: '#',
  },
  {
    id: 5,
    title: 'Test',
    infos: ['BREW', 'Front-end Dev', 2017],
    description: 'This is a test description',
    languages: ['HTML', 'CSS', 'JS'],
    image: 'images/div5-bg.jpg',
    seeLive: '#',
    seeSource: '#',
  },
];

// projects container //

const portfolio = document.getElementById('portfolio');
let projects = '';
for (let key in projectsData) {
  if (projectsData.hasOwnProperty(key)) {
    projects += `<div class="project1" id=${projectsData[key].id}>
    <div class="project1-desk-left">
        <img class="hide-from-desk" src="${projectsData[key].image}" alt="portfolio one">
    </div>
    <div class="project1-desk-right">
        <h2 class="tonic-title">${projectsData[key].title}</h2>
     <div class="infos">
        <p class="canopy">${projectsData[key].infos[0]}</p>
        <img class="dot" src="images/dot.png" alt="separator">
        <p class="tech-date">${projectsData[key].infos[1]}</p>
        <img class="dot" src="images/dot.png" alt="separator">
        <p class="tech-date">${projectsData[key].infos[2]}</p>  
     </div>
    <p class="projects-description">A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
     <ul class="project-languages">
        <li class="project-list">${projectsData[key].languages[0]}</li>
        <li class="project-list">${projectsData[key].languages[1]}</li>
        <li class="project-list">${projectsData[key].languages[2]}</li>
     </ul>
     <button onclick="showModal(${projectsData[key].id})" class="projects-btn" id="btn-project-1">See Project</button>
    </div>
    <section class="modal-container" id=${projectsData[key].id}>
        <div class="modal-content">
            <h1 class="tonic-title">${projectsData[key].title}<button onclick="closeModal(${projectsData[key].id})" class="close-modal">X</button></h1>
            <div class="infos">
                <p class="canopy">${projectsData[key].infos[0]}</p>
                <img class="dot" src="images/dot.png" alt="separator">
                <p class="tech-date">${projectsData[key].infos[1]}</p>
                <img class="dot" src="images/dot.png" alt="separator">
                <p class="tech-date">${projectsData[key].infos[2]}</p>  
             </div>
             <img src="${projectsData[key].image}" alt="">
             <div class="bottom">
                <div class="left"><p class="popup-description">${projectsData[key].description}</p></div>
                 <div class="right">
                    <ul class="project-languages popup-languages">
                        <li class="project-list">${projectsData[key].languages[0]}</li>
                        <li class="project-list">${projectsData[key].languages[1]}</li>
                        <li class="project-list">${projectsData[key].languages[2]}</li>
                     </ul>
                     <div class="see-btns">
                        <button class="see-btn">See live<img src="images/seeLive.svg" alt=""></button>
                        <button class="see-btn">See Source<img src="images/seeSource.svg" alt=""></button>
                     </div>  
                 </div>   
                </div>
            </div>
            </div>
    </section> 
  </div>
  `
  }
}
portfolio.innerHTML = projects;

const mobileView = window.matchMedia("(max-width: 768px)");

const projectsDiv = document.querySelectorAll('.project1');


function showModal(modalId) {
  const modalContent = document.querySelector(`.modal-container[id="${modalId}"]`);
  modalContent.style.display = 'flex';
}

// eslint-disable-next-line no-unused-vars
function closeModal(modalId) {
  const modalContent = document.querySelector(`.modal-container[id="${modalId}"]`);
  modalContent.style.display = 'none';
}


function handleMobileView(event) {
projectsDiv.forEach((div) => {
  if (event.matches) {
    div.style.flexDirection = 'column'
  }
  else if (div.id % 2 === 0) {
    div.style.flexDirection = 'row-reverse'
  } 
  else if (!event.matches) {
    div.style.flexDirection = 'row'
  }
});
};

mobileView.addEventListener('change', handleMobileView);
handleMobileView(mobileView); 

// email form validation
function validation() {
  const form = document.getElementById('form-validation');
  const formInput = document.getElementById('email').value;
  const errorMsg = document.getElementById('error-msg');
  const regX = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  form.onsubmit = function (f) {
    if (regX.test(formInput)) {
      errorMsg.style.display = 'none';
    } else {
      errorMsg.style.display = 'flex';
      f.preventDefault();
    }
  };
}
