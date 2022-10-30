function toggleMenu() {
  document.getElementById("primary").classList.toggle("open");
}

const hamburgerbtn = document.getElementById("HamburgerBtn");
hamburgerbtn.onclick = toggleMenu;