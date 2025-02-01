const t0 = document.getElementById("js-target-0");
const t1 = document.getElementById("js-target-1");
const t2 = document.getElementById("js-target-2");
const t3 = document.getElementById("js-target-3");
const t4 = document.getElementById("js-target-4");
const t5 = document.getElementById("js-target-5");

let curr2 = 1;
let max2 = 6;
let curr3 = 1;
let max3 = 8;

t1.addEventListener("click", () => {t0.src = "diagram2/Slide" + (curr2 = (curr2 - 1) || max2) + ".png";});
t2.addEventListener("click", () => {t0.src = "diagram2/Slide" + (curr2 = (curr2 % max2) + 1) + ".png";});
t4.addEventListener("click", () => {t3.src = "diagram3/Slide" + (curr3 = (curr3 - 1) || max3) + ".png";});
t5.addEventListener("click", () => {t3.src = "diagram3/Slide" + (curr3 = (curr3 % max3) + 1) + ".png";});
