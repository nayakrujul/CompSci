// Themes

function change_theme({target}) {
    let thm = target.id.slice(6);
    localStorage.setItem("themeColour", thm);
    document.body.classList = [];
    document.body.classList.add(THEMES.includes(thm) ? thm : THEMES[Math.floor(Math.random() * THEMES.length)]);
    [...document.querySelectorAll("span.colour-option.selected")].forEach(s => s.classList.remove("selected"));
    target.classList.add("selected");
}

[...THEMES, "random"].forEach(theme => {
    let sp = document.createElement("span");
    sp.classList.add("colour-option", theme);
    sp.id = "theme-" + theme;
    document.getElementById("colour-picker").appendChild(sp);
    sp.addEventListener("click", change_theme);
    if (theme === selected) sp.classList.add("selected");
});

document.getElementById("spacing-slider").value = localStorage.getItem("lineSpacing");

document.getElementById("spacing-slider").addEventListener("input", ({target}) => {
    change_line_height(target.value);
    localStorage.setItem("lineSpacing", "" + target.value);
});
