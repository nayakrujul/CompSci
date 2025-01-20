const t0 = document.getElementById("js-target-0");
const t1 = document.getElementById("js-target-1");
const t2 = document.getElementById("js-target-2");

let curr = 1;
let max = 8;

t1.addEventListener("click", () => {t0.src = "slides/Slide" + (curr = (curr - 1) || max) + ".png";});
t2.addEventListener("click", () => {t0.src = "slides/Slide" + (curr = (curr % max) + 1) + ".png";});