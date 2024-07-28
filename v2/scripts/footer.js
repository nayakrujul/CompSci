let year = (cy = new Date().getFullYear()) !== 2024 ? "-" + ("" + cy).slice(-2) : "";
document.getElementById("footer").innerHTML = `<b class="no-underline">&copy; Rujul Nayak 2024${year}</b>`;

document.getElementById("header").innerHTML = `
    <img id="dropdown" class="no-zoom" alt="Menu" />
    <div id="menu">
        <a href="/v2/" class="menu-link">HOME</a>
        <a href="/v2/about/" class="menu-link">ABOUT</a>
        <a href="/v2/c-sharp/" class="menu-link">C# TUTORIAL</a>
        <a href="/v2/feedback/" class="menu-link">FEEDBACK</a>
    </div>
    ` + document.getElementById("header").innerHTML;

document.getElementById("dropdown").addEventListener("click", () => {
    if ([...document.getElementById("dropdown").classList].includes("close")) {
        document.getElementById("dropdown").classList.remove("close");
        document.getElementById("menu").classList.remove("active");
    } else {
        document.getElementById("dropdown").classList.add("close");
        document.getElementById("menu").classList.add("active");
    }
});