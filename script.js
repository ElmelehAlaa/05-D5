const bottone = document.getElementById("bottone");
const nav = document.getElementById("mynav");
window.onscroll = function () {
  if (window.scrollY >= 400) {
    nav.classList.add("nav-colored");
    nav.classList.remove("scroll-nav");
    bottone.classList.add("bottone-colored");
    bottone.classList.remove("nav-botton");
  } else {
    nav.classList.remove("nav-colored");
    bottone.classList.remove("bottone-colored");
  }
};
