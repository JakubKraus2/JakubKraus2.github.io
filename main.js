const menuButton = document.getElementById("menu_button");
const menuList = document.getElementById("menu_list");

menuButton.addEventListener("click", () => {
  menuList.classList.toggle("active");
});

const darkModeButton = document.getElementById("dark-mode-button");

darkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
