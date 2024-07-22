const THEMES = ["blue", "green", "purple", "yellow", "pink"];
let rand = THEMES[Math.floor(Math.random() * 3)];
document.getElementById("page").classList.add(rand);

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