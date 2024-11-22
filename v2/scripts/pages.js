// Themes

const THEMES = ["blue", "turquoise", "green", "yellow", "orange", "brown", "pink", "purple"];
let rand = THEMES[Math.floor(Math.random() * THEMES.length)];
document.body.classList.add(rand);


// Navbar arrows

let [x, y] = location.href
    .replaceAll("/index.html", "/")
    .split("/").slice(-3, -1);
let [p, n] = [null, null];

//          (0)   1  2   3   4   5  6  7  8  9   10   11   12    13    14    15    16    17    18    19    20
let last = [null, 9, 17, 10, 18, 5, 5, 7, 3, 9, null, 11, null, null, null, null, null, null, null, null, null];

if (y === "01") {
    if (x !== "1")
        p = (x - 1) + "/qs/";
} else if (y == "qs") {
    p = x + "/" + (last[+x] + "")
        .padStart(2, 0) + "/";
} else {
    p = x + "/" + ((y - 1) + "")
        .padStart(2, "0") + "/";
}

if (+y === last[+x]) {
    n = x + "/qs/";
} else if (y === "qs") {
    if (+x < last.length - 1)
        n = (+x + 1) + "/01/";
} else {
    n = x + "/" + ((+y + 1) + "")
        .padStart(2, "0") + "/";
}

let ft = document.getElementById("footer");
ft.innerHTML =
    `<a id="prev-link" ${p === null ? 'class="disabled"' : ''} href="../../${p}">◀</a>` +
    ft.innerHTML +
    `<a id="next-link" ${n === null ? 'class="disabled"' : ''} href="../../${n}">▶</a>`;


// Summary question buttons

[...document.querySelectorAll(".summary-question")].forEach(qs => {
    qs.innerHTML += `
        <input type="button" class="q-button" value="Reveal answer" />
    `;
    qs.querySelector(".answer").innerHTML += "<br />&nbsp;";
    qs.querySelector(".q-button").addEventListener("click", (event) => {
        let el = event.target;
        let pe = el.parentElement;
        let ans = pe.querySelector(".answer");
        if ([...ans.classList].includes("show")) {
            ans.classList.remove("show");
            el.value = "Reveal answer";
        } else {
            ans.classList.add("show");
            el.value = "Hide answer";
        }
    })
});


// Image zoom in

[...document.querySelectorAll("img:not(.icon):not(#logo):not(.no-zoom)")].forEach(img => {
    img.addEventListener("click", (evt) => {
        window.open(evt.target.src, "_blank").focus();
    });
});


// Definition copy button

const list = document.querySelectorAll("p.definition");

function remove(target) {
    return () => {
        target.classList.remove("donebtn");
    };
}

[...list].map(p => {
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