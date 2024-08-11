document.getElementById("header").innerHTML = `
    <img id="dropdown" class="no-zoom" alt="Menu" />
    <div id="menu">
        <a href="/v2/" class="menu-link">INDEX</a>
        <a href="/v2/c-sharp/" class="menu-link">C# TUTORIAL</a>
        <a href="/v2/glossary/gcse/" class="menu-link">GLOSSARY</a>
        <a href="/v2/exam-info/" class="menu-link">EXAM INFO</a>
        <a href="/v2/feedback/" class="menu-link">FEEDBACK</a>
    </div>` + document.getElementById("header").innerHTML + `
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
    }
});

document.getElementById("version-select").addEventListener("change", ({target}) => {
    let val = target.value;
    target.value = "v2";
    if (val === "v2") return;
    if (val === "v1") {
        if (v1 === undefined) return;
        window.open("/v1/" + v1, "_self");
    }
    if (val === "v3") 
        window.open(
            "https://youtu.be/xvFZjo5PgG0",
            "_blank"
        ).focus(); 
})