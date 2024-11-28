const dt0 = document.getElementById("js-target-d0");
const dt1 = document.getElementById("js-target-d1");
const dt2 = document.getElementById("js-target-d2");
const bt0 = document.getElementById("js-target-b0");
const bt1 = document.getElementById("js-target-b1");
const bt2 = document.getElementById("js-target-b2");

let dcurr = 1;
let dmax = 71;
let bcurr = 1;
let bmax = 63;

dt1.addEventListener("click", () => {dt0.src = "df/Slide" + (dcurr = (dcurr - 1) || dmax) + ".png";});
dt2.addEventListener("click", () => {dt0.src = "df/Slide" + (dcurr = (dcurr % dmax) + 1) + ".png";});
bt1.addEventListener("click", () => {bt0.src = "bf/Slide" + (bcurr = (bcurr - 1) || bmax) + ".png";});
bt2.addEventListener("click", () => {bt0.src = "bf/Slide" + (bcurr = (bcurr % bmax) + 1) + ".png";});