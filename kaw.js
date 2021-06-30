const menu = document.querySelector(".menu__icon--big");
const menuIcon = document.querySelector(".menu__icon");
const menuBig = document.querySelector(".menu__big");
let m1 = false;

menu.addEventListener("click", () => {
  if (!m1) {
    menuIcon.classList.add("open");
    menuBig.style.height = "100%";
    m1 = true;
  } else {
    menuIcon.classList.remove("open");
    menuBig.style.height = "0%";

    m1 = false;
  }
});
// for change the responsive in page details
const win = document.getElementById("flex-row");
let winSize = window.innerWidth;
if (winSize < 800) {
  win.classList.add("flex-column");
  win.classList.remove("flex-row");
}
console.log(win);
