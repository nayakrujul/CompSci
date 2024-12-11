const carousel = document.getElementById("homepage-carousel");
const items = [...carousel.querySelectorAll("div.carousel-item")];

let active = -1;

function next_item() {
    items[active]?.classList.remove("active");
    active = (++active) % items.length;
    items[active].classList.add("active");

    let highlight = items[active].querySelector("h1 span.highlight");
    highlight.style.animation = "";
    highlight.offsetWidth;
    highlight.style.animation = "highlight 1s forwards";
}

next_item();

document.getElementById("next-button").addEventListener("click", next_item);
document.getElementById("explore").addEventListener("click", () => window.open("./v2/", target="_self"));
