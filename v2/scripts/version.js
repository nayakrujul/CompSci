document.getElementById("header").innerHTML += `
    <select id="version-select">
        <option value="v1" ${v1 === null ? "disabled" : ""}>v1</option>
        <option value="v2" selected>v2</option>
        <option value="v3">v3 (Beta)</option>
    </select>
`;

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