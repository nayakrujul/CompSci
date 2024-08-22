const carousel = document.getElementById("homepage-carousel");
const items = [...carousel.querySelectorAll("div.carousel-item")];

items.forEach(item => {
    item.innerHTML += `
        <input type="button" class="q-button" value="Next"> <br />
        <a class="explore-link" href="./v2">Explore the index! &rarr;</a>
    `;

    item.querySelector("input.q-button").addEventListener("click", next_item);
})

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