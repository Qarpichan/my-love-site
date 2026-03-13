const startButton = document.getElementById("startButton");
const startText = document.getElementById("startText");
const menuContainer = document.getElementById("menuContainer");

startButton.addEventListener("click", () => {

startText.classList.add("hide");

startButton.classList.add("expand");

document.body.classList.add("white");

setTimeout(() => {

menuContainer.classList.add("show");

const menus = document.querySelectorAll(".menu");

menus.forEach((menu, index) => {

setTimeout(() => {

menu.classList.add("show");

}, index * 150);

});

}, 900);

});