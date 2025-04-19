const navBtn = document.getElementById('navBtn');
const siteNav = document.getElementById('siteNav');

navBtn.addEventListener('click', () => {
  navBtn.classList.toggle('active');
  siteNav.classList.toggle('active');
});

const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
  
  if (themeToggle.innerText == 'light_mode') {
    themeToggle.innerText = 'dark_mode';
    document.body.classList.add('dark');
  } else {
    themeToggle.innerText = "light_mode";
    document.body.classList.remove('dark');
  }
  
  localStorage.setItem("themeMode", themeToggle.innerText);
});