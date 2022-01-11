const menu = document.querySelector('#mobile__menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
//display mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

//show active menu
const highlightMenu = () => {
  const ele = document.querySelector('.highlight');
  const home = document.querySelector('#home-page');
  const about = document.querySelector('#about-page');
  const services = document.querySelector('#services-page');

  let scrollPos = window.scrollY;

  //adds the 'highlight' class to my menu
  if (window.innerWidth > 960 && scrollPos < 600) {
    home.classList.add('highlight');
    about.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    about.classList.add('highlight');
    home.classList.remove('highlight');
    services.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    services.classList.add('highlight');
    about.classList.remove('highlight');
    return;
  }
  if ((ele && window.innerWidth < 960 && scrollPos < 600) || ele) {
    ele.classList.remove('highlight');
  }
};
window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);
