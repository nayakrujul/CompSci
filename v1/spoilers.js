// Spoilers

[...document.querySelectorAll(".spoiler")].map(p => {
    p.onclick = (event) => {
        let elem = event.srcElement;
        while (![...elem.classList].includes("spoiler")) {
            elem = elem.parentElement;
        }
        if ([...elem.classList].includes("show-spoiler")) {
            elem.classList.remove("show-spoiler");
        } else {
            elem.classList.add("show-spoiler");
        }
    };
});


// Swipes

const prev = document.querySelector(".prev-link");
const next = document.querySelector(".next-link");

let touchstartX = 0;
let touchendX = 0;
let startTime = 0;
let endTime = 0;
    
function checkDirection() {
    let diff = touchendX - touchstartX;
    if (
        Math.abs(diff) > screen.width * 0.2
        && endTime - startTime <= 750
    ) {
        if (diff < 0) {
            // Next page
            if (next !== null) {
                location.replace(next.href);
            }
        } else {
            // Previous page
            if (prev !== null) {
                location.replace(prev.href);
            }
        }
    }
}

document.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
    startTime = e.timeStamp;
});

document.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    endTime = e.timeStamp;
    checkDirection();
});

let home_link = document.querySelector(".home-link");

let tip = document.createElement("p");
tip.innerHTML = "<br /><i>Tip: you can swipe to navigate between pages on a touchscreen.</i>";
tip.classList.add("tip");

document.body.insertBefore(tip, home_link.nextSibling);


// Navbar

const div = document.getElementById("sub");

div.innerHTML += ` &ensp; ` +
    (prev !== null ?
        `<a class="navbar-link" href="${prev.href}">&#9664;</a>`
        : `<span class="comment">&#9664;</span>`) + ` &ensp; ` +
    (next !== null ?
        `<a class="navbar-link" href="${next.href}">&#9654;</a>`
        : `<span class="comment">&#9654;</span>`);


// Copy definitions button

const defs = document.querySelectorAll("p.definition");

function remove(target) {
    return () => {
        target.classList.remove("donebtn");
    };
}

[...defs].map(p => {
    let cont = p.innerText.trim();
    let btn = document.createElement("input");
    btn.type = "button";
    btn.classList.add("copybtn");
    btn.setAttribute("copyval", cont);
    btn.addEventListener("click", (event) => {
        let q = event.target;
        navigator.clipboard.writeText(q.getAttribute("copyval"));
        q.classList.add("donebtn");
        setTimeout(remove(q), 2000);
    });
    p.appendChild(btn);
});


// v1 --> v2 button

let v2btn = document.createElement("input");
v2btn.type = "button";
v2btn.id = "v2-button";
v2btn.value = "v1 → v2";
document.body.appendChild(v2btn);

let [a, b] = location.href
    .replaceAll("/index.html", "/")
    .split("/").slice(-2, -1)[0].split("-")
    .slice(0, 2);
let url = null;
if (a.length === 1) {
    if (b !== "Summary") {
        url = a + "/" + b + "/"; 
    } else {
        url = a + "/qs/";
    }
} else {
    if (b !== "Summary") {
        if (a === "2A") {
            url = "2/" + b + "/";
        } else {
            url = "2/" + (+b + 9) + "/";
        }
    } else {
        url = "2/qs/";
    }
}
v2btn.addEventListener("click", () => window.open("../../v2/" + url, "_self"));