const target = document.getElementById("js-target");

let i = 1;

const big = [3, 6, 7, 8, 9];

function onClick() {
    i = i % 9 + 1;
    target.src = "./diagram" + i + ".png";
    if (big.includes(i)) {
        target.style.height = "194px";
        target.style.paddingBottom = "0px";
    } else {
        target.style.height = "170px";
        target.style.paddingBottom = "24px";
    }
}

target.addEventListener("click", onClick);