function sort(val) {
    let defs = [...document.querySelectorAll("p.definition")];
    let new_defs = [...defs];
    if (val === "a-z" || val === "z-a") {
        new_defs.sort((a, b) => {
            let [x, y] = [a.querySelector("strong").innerHTML.toLowerCase(),
                          b.querySelector("strong").innerHTML.toLowerCase()];
            if (x > y) return 1;
            if (x < y) return -1;
            let [p, q] = [a.getAttribute("page"), b.getAttribute("page")];
            if (p > q) return 1;
            if (p < q) return -1;
            return 0;
        });
        if (val === "z-a") new_defs.reverse();
    } else if (val === "1-8") {
        new_defs.sort((a, b) => {
            let [x, y] = [a.getAttribute("page"), b.getAttribute("page")];
            if (x > y) return 1;
            if (x < y) return -1;
            let [p, q] = [a.querySelector("strong").innerHTML.toLowerCase(),
                          b.querySelector("strong").innerHTML.toLowerCase()];
            if (p > q) return 1;
            if (p < q) return -1;
            return 0;
        });
    }
    defs.forEach(def => def.remove());
    new_defs.forEach(ndef => document.getElementById("page").insertBefore(ndef, document.getElementById("margin")));
}

[...document.querySelectorAll("p.definition")].forEach(p => {
    let page = p.getAttribute("page");
    let href = "../../" + page.replace(".", "/");
    p.innerHTML += `<i><a href="${href}" class="no-underline">(${page})</a></i>`;
});

[...document.querySelectorAll(".toggle")].forEach(t => {
    t.addEventListener("click", ev => {
        [...document.querySelectorAll(".active")]
            .forEach(el => el.classList.remove("active"));
        ev.target.classList.add("active");
        sort(ev.target.getAttribute("value"));
    });
});