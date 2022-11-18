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
    title: 'Multi-post<br>Stories',
    infos: ['CANOPY', 'Back End Dev', 2015],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    languages: ['HTML', 'CSS', 'JS'],
    image: 'images/div2-bg.png',
    seeLive: '#',
    seeSource: '#',
  },
  {
    id: 3,
    title: 'Multi-post<br>Stories',
    infos: ['CANOPY', 'Back End Dev', 2015],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    languages: ['HTML', 'CSS', 'JS'],
    image: 'images/div3-bg.png',
    seeLive: '#',
    seeSource: '#',
  },
  {
    title: 'Multi-post<br>Stories',
    infos: ['CANOPY', 'Back End Dev', 2015],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    languages: ['HTML', 'CSS', 'JS'],
    image: 'images/div4-bg.png',
    seeLive: '#',
    seeSource: '#',
  },
];

// projects container //

const portfolio = document.getElementById('portfolio');
const projects = `
   <div class="project1">
   <div class="project1-desk-left">
       <img class="hide-from-desk" src="${projectsData[0].image}" alt="portfolio one">
   </div>
   <div class="project1-desk-right">
       <h2 class="tonic-title">${projectsData[0].title}</h2>
    <div class="infos">
       <p class="canopy">${projectsData[0].infos[0]}</p>
       <img class="dot" src="images/dot.png" alt="separator">
       <p class="tech-date">${projectsData[0].infos[1]}</p>
       <img class="dot" src="images/dot.png" alt="separator">
       <p class="tech-date">${projectsData[0].infos[2]}</p>  
    </div>
   <p class="projects-description">A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
    <ul class="project-languages">
       <li class="project-list">${projectsData[0].languages[0]}</li>
       <li class="project-list">${projectsData[0].languages[1]}</li>
       <li class="project-list">${projectsData[0].languages[2]}</li>
    </ul>
    <button onclick="showModal()" class="projects-btn" id="btn-project-1">See Project</button>
   </div> 
 </div>
 
 <div class="project2">
   <div class="project2-desk-left">
       <img class="hide-from-desk" src="${projectsData[1].image}" alt="portfolio two">
   </div>
   <div class="project2-desk-right">
       <h2 class="projects-title">${projectsData[1].title}</h2>
    <div class="infos">
       <p class="canopy">${projectsData[1].infos[0]}</p>
       <img class="dot" src="images/dot.png" alt="separator">
       <p class="tech-date">${projectsData[1].infos[1]}</p>
       <img class="dot" src="images/dot.png" alt="separator">
       <p class="tech-date">${projectsData[1].infos[2]}</p>  
    </div>
   <p class="projects-description">A daily selection of privately personalized reads;
        no accounts or sign-ups required.</p>
    <ul class="project-languages">
       <li class="project-list">${projectsData[1].languages[0]}</li>
       <li class="project-list">${projectsData[1].languages[1]}</li>
       <li class="project-list">${projectsData[1].languages[2]}</li>
    </ul>
    <button onclick="showModal()" class="projects-btn" id="btn-project-2">See Project</button>
   </div>
 </div>
   
 <div class="project3">
   <div class="project3-desk-left">
       <img class="hide-from-desk" src="${projectsData[2].image}" alt="portfolio three">
   </div>
   <div class="project3-desk-right">
       <h2 class="projects-title">${projectsData[2].title}</h2>
   <div class="infos">
       <p class="canopy">${projectsData[2].infos[0]}</p>
       <img class="dot" src="images/dot.png" alt="separator">
       <p class="tech-date">${projectsData[2].infos[1]}</p>
       <img class="dot" src="images/dot.png" alt="separator">
       <p class="tech-date">${projectsData[2].infos[2]}</p>  
    </div>
   <p class="projects-description">A daily selection of privately personalized reads;
        no accounts or sign-ups required.</p>
    <ul class="project-languages">
       <li class="project-list">${projectsData[2].languages[0]}</li>
       <li class="project-list">${projectsData[2].languages[1]}</li>
       <li class="project-list">${projectsData[2].languages[2]}</li>
    </ul>
    <button onclick="showModal()" class="projects-btn">See Project</button>
   </div>
 </div>
 
 <div class="project4">
   <div class="project4-desk-left">
       <img class="hide-from-desk" src="${projectsData[3].image}" alt="portfolio four">
   </div>
   <div class="project4-desk-right">
       <h2 class="projects-title">${projectsData[3].title}</h2>
   <div class="infos">
       <p class="canopy">${projectsData[3].infos[0]}</p>
       <img class="dot" src="images/dot.png" alt="separator">
       <p class="tech-date">${projectsData[3].infos[1]}</p>
       <img class="dot" src="images/dot.png" alt="separator">
       <p class="tech-date">${projectsData[3].infos[2]}</p>  
    </div>
   <p class="projects-description">A daily selection of privately personalized reads;
        no accounts or sign-ups required.</p>
    <ul class="project-languages">
       <li class="project-list">${projectsData[3].languages[0]}</li>
       <li class="project-list">${projectsData[3].languages[1]}</li>
       <li class="project-list">${projectsData[3].languages[2]}</li>
    </ul>
    <button onclick="showModal()" class="projects-btn">See Project</button>
   </div>   
 </div>`;
portfolio.innerHTML = projects;

const modalContainer = document.getElementById('modal');

// eslint-disable-next-line no-unused-vars
function showModal() {
  modalContainer.style.display = 'flex';
}
// eslint-disable-next-line no-unused-vars
function closeModal() {
  modalContainer.style.display = 'none';
}
