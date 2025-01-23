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

function prev_item() {
    items[active]?.classList.remove("active");
    active = (--active + items.length) % items.length;
    items[active].classList.add("active");

    let highlight = items[active].querySelector("h1 span.highlight");
    highlight.style.animation = "";
    highlight.offsetWidth;
    highlight.style.animation = "highlight 1s forwards";
}

next_item();

document.getElementById("left-arrow").addEventListener("click", prev_item);
document.getElementById("right-arrow").addEventListener("click", next_item);
document.getElementById("explore").addEventListener("click", () => window.open("./v2/", target="_self"));


function time_delta(secs) {
    if (secs <= 1 *                60 * 1000)  return "less than a minute ago";
    if (secs <= 2 *                60 * 1000)  return "1 minute ago";
    if (secs <= 1 *           60 * 60 * 1000)  return Math.floor(secs / 1000 / 60) + " minutes ago";
    if (secs <= 2 *           60 * 60 * 1000)  return "1 hour ago";
    if (secs <= 1 *      24 * 60 * 60 * 1000)  return Math.floor(secs / 1000 / 60 / 60) + " hours ago";
    if (secs <= 2 *      24 * 60 * 60 * 1000)  return "1 day ago";
    if (secs <= 1 * 30 * 24 * 60 * 60 * 1000)  return Math.floor(secs / 1000 / 60 / 60 / 24) + " days ago";
    else                                      return "over a month ago";
}

if (localStorage.getItem("lastPageOpen") !== null) {
    document.getElementById("last-page-link").href = "./v2/" + localStorage.getItem("lastPageLink");
    document.getElementById("last-page-title").innerHTML = localStorage.getItem("lastPageTitle");
    document.getElementById("time-diff").innerHTML = time_delta(Date.now() - localStorage.getItem("lastPageOpen"));
    document.getElementById("last-page-popup").classList.remove("hidden-popup");
    document.getElementById("close-popup").addEventListener("click", () => document.getElementById("last-page-popup").classList.add("hidden-popup"));
}
