const bottone = document.getElementById("bottone");
const nav = document.getElementById("mynav");
window.onscroll = function () {
  if (window.scrollY >= 400) {
    nav.classList.add("nav-colored");

    bottone.classList.add("bottone-colored");
  } else {
    nav.classList.remove("nav-colored");
    bottone.classList.remove("bottone-colored");
  }
};

const oneM = document.querySelectorAll("g[stroke-linecap");
// console.log(oneM);
// console.log(oneM[1].attributes.opacity.value);
// oneM[1].attributes.opacity.value = 1;
// console.log(oneM[1].attributes.opacity.value);

const funDisap = function () {
  const mNumber = Math.floor(Math.random() * 560);
  for (let y = 0; y <= oneM.length; y++) {
    oneM[mNumber].classList.remove("g[stroke-linecap");
    oneM[mNumber].classList.add("disappear");
  }
};
setInterval(funDisap, 200);

const funAppear = function () {
  const mNumber = Math.floor(Math.random() * 560);
  for (let y = 0; y <= oneM.length; y++) {
    oneM[mNumber].classList.add("g[stroke-linecap");
    oneM[mNumber].classList.remove("disappear");
  }
};
setInterval(funAppear, 200);
