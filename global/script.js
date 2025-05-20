const navBtn = document.getElementById('navBtn');
const siteNav = document.getElementById('siteNav');

navBtn.addEventListener('click', () => {
  navBtn.classList.toggle('active');
  siteNav.classList.toggle('active');
});

// UNAVAILABLE FEATURES OVERLAY
document.querySelectorAll(".feature-down").forEach(item => {
  const downOverlay = document.createElement("div");
  downOverlay.className = "down-overlay";
  downOverlay.innerHTML = `<div class="down-overlay-text">FEATURE UNAVAILABLE AT THE MEANTIME.</div>`;
  item.appendChild(downOverlay);
});