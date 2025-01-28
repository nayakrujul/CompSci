document.getElementById("header").innerHTML = `
    <img id="dropdown" class="no-zoom click-ignore" alt="Menu" />
    <div id="menu" class="click-ignore">
        <a href="/v2/" class="menu-link click-ignore">INDEX</a>
        <a href="/v2/glossary/gcse/" class="menu-link click-ignore">GLOSSARY</a>
        <a href="/v2/exam-info/" class="menu-link click-ignore">EXAM INFO</a>
        <a href="/v2/feedback/" class="menu-link click-ignore">FEEDBACK</a>
    </div>` + document.getElementById("header").innerHTML + `
    <span id="theme-colour"></span>
    <div id="colour-dropdown"></div>
    <select id="version-select">
        <option value="v1" ${v1 === null ? "disabled" : ""}>v1</option>
        <option value="v2" selected>v2</option>
        <option value="v3">v3 (Beta)</option>
    </select>`;

document.getElementById("dropdown").addEventListener("click", () => {
    if ([...document.getElementById("dropdown").classList].includes("close")) {
        document.getElementById("dropdown").classList.remove("close");
        document.getElementById("menu").classList.remove("active");
    } else {
        document.getElementById("dropdown").classList.add("close");
        document.getElementById("menu").classList.add("active");
        document.getElementById("this-page")?.scrollIntoView({"behaviour": "smooth", "block": "center"});
    }
});

function openLink(href, target) {
    if (window.open(href, target) === null) {
        window.open(href, "_top");
    }
}

document.getElementById("version-select").addEventListener("change", ({target}) => {
    let val = target.value;
    target.value = "v2";
    if (val === "v2") return;
    if (val === "v1") {
        if (v1 === undefined) return;
        openLink("/v1/" + v1, "_top");
    }
    if (val === "v3") {
        openLink("https://youtu.be/xvFZjo5PgG0", "_blank"); 
    }
});

document.body.addEventListener("click", ({target}) => {
    if (document.getElementById("menu").classList.contains("active")) {
        if (!target.classList.contains("click-ignore")) {
            document.getElementById("menu").classList.remove("active");
            document.getElementById("dropdown").classList.remove("close");
        }
    }
    if (document.getElementById("colour-dropdown").classList.contains("show")) {
        if (target.id !== "colour-dropdown" && target.id !== "theme-colour")
            document.getElementById("colour-dropdown").classList.remove("show");
    }
});


// Themes

const THEMES = ["blue", "turquoise", "green", "orange", "yellow", "brown", "pink", "purple"];

function change_theme({target}) {
    let thm = target.id.slice(6);
    localStorage.setItem("themeColour", thm);
    document.body.classList = [];
    document.body.classList.add(THEMES.includes(thm) ? thm : THEMES[Math.floor(Math.random() * THEMES.length)]);
    document.getElementById("theme-colour").classList = [];
    document.getElementById("theme-colour").classList.add(thm);
}

[...THEMES, "random"].forEach(theme => {
    let sp = document.createElement("span");
    sp.classList.add("colour-option", theme);
    sp.id = "theme-" + theme;
    document.getElementById("colour-dropdown").appendChild(sp);
    sp.addEventListener("click", change_theme);
});

let selected = localStorage.getItem("themeColour")
if (!THEMES.includes(selected)) {
    document.getElementById("theme-colour").classList.add("random");
    document.body.classList.add(THEMES[Math.floor(Math.random() * THEMES.length)]);
} else {
    document.getElementById("theme-colour").classList.add(selected);
    document.body.classList.add(selected);
}

document.getElementById("theme-colour").addEventListener("click", () => {
    document.getElementById("colour-dropdown").classList.toggle("show");
});
