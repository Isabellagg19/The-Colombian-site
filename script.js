const navBar = document.querySelector('.nav-bar');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');

rightArrow.addEventListener('click', () => {
  navBar.scrollBy({ left: 1000, behavior: 'smooth' });
});

leftArrow.addEventListener('click', () => {
  navBar.scrollBy({ left: -1000, behavior: 'smooth' });
});