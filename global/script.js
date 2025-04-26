const navBtn = document.getElementById('navBtn');
const siteNav = document.getElementById('siteNav');

navBtn.addEventListener('click', () => {
  navBtn.classList.toggle('active');
  siteNav.classList.toggle('active');
});

