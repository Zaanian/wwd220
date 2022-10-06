function toggleMenu() {
  document.getElementById("primary").classList.toggle("open");
}

const x = document.getElementById("HamburgerBtn");
x.onclick = toggleMenu;