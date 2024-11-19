const t0 = document.getElementById("js-target-0");
const t1 = document.getElementById("js-target-1");
const t2 = document.getElementById("js-target-2");

let curr = 1;
let max = 18;

t1.addEventListener("click", () => {
    curr = (curr - 1) || max;
    t0.src = "Slide" + curr + ".png";
});

t2.addEventListener("click", () => {
    curr = (curr % max) + 1;
    t0.src = "Slide" + curr + ".png";
});