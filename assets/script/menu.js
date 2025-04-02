const btnMenu = document.getElementById("btn-menu");
const menuMobile = document.getElementById("menu-mobile");
const overlayMenu = document.getElementById("overlay-mobile");

btnMenu.addEventListener("click", function () {
  menuMobile.classList.toggle("open");
  btnMenu.classList.toggle("active");
  overlayMenu.classList.toggle("show");
});

overlayMenu.addEventListener("click", function () {
  menuMobile.classList.toggle("open");
  btnMenu.classList.toggle("active");
  overlayMenu.classList.toggle("show");
});

menuMobile.addEventListener("click", function () {
  menuMobile.classList.toggle("open");
  btnMenu.classList.toggle("active");
  overlayMenu.classList.toggle("show");
});
