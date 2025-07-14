// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const userPref = localStorage.getItem('xeneva-dark-mode');

function setDarkMode(on) {
  document.body.classList.toggle('dark-mode', on);
  localStorage.setItem('xeneva-dark-mode', on ? '1' : '0');
  darkModeToggle.textContent = on ? '☀️' : '🌙';
}

if (userPref === null) {
  setDarkMode(prefersDark);
} else {
  setDarkMode(userPref === '1');
}

darkModeToggle.addEventListener('click', () => {
  setDarkMode(!document.body.classList.contains('dark-mode'));
}); 