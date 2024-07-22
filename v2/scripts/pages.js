const THEMES = ["blue", "green", "purple", "yellow", "pink"];
let rand = THEMES[Math.floor(Math.random() * THEMES.length)];
document.body.classList.add(rand);


let [x, y] = location.href
    .replaceAll("/index.html", "/")
    .split("/").slice(-3, -1);
let [p, n] = [null, null];

let last = [null, 9, 17, 10, 18, 5, 5, 7, 3]

if (y === "01") {
    if (x !== "1") {
        p = (x - 1) + "/qs/";
    }
} else {
    p = x + "/" + ((y - 1) + "")
        .padStart(2, "0") + "/";
}

if (+y === last[+x]) {
    n = x + "/qs/";
} else if (y === "qs") {
    n = (x + 1) + "/01/";
} else {
    n = x + "/" + ((+y + 1) + "")
        .padStart(2, "0") + "/";
}

let ft = document.getElementById("footer");
ft.innerHTML =
    `<a id="prev-link" ${p === null ? 'class="disabled"' : ''} href="../../${p}">◀</a>` +
    ft.innerHTML +
    `<a id="next-link" ${n === null ? 'class="disabled"' : ''} href="../../${n}">▶</a>`;


[...document.querySelectorAll(".summary-question")].map(qs => {
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