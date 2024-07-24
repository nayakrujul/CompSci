function next_question() {
    let old = document.querySelector("div.rq.show");
    total += +old.getAttribute("marks");
    correct += [...old.querySelectorAll("input[type=checkbox]:checked")].length;
    old.classList.remove("show");
    document.getElementById("score").innerHTML = `Score: ${correct}/${total}`;
    let nxt = old.nextElementSibling;
    if (nxt === null) {
        document.getElementById("q-num").innerHTML = "Done!";
        return;
    }
    nxt.classList.add("show");
    document.getElementById("q-num").innerHTML = `Question ${nxt.getAttribute("num")} of ${rqs.length}`;
}

function button_clicked() {
    let shown = document.querySelector("div.rq.show");
    shown.querySelector("textarea.rq-textbox").disabled = true;
    [...shown.querySelectorAll("span.rq-answer")].forEach(ans => ans.classList.add("show"));
    let button = shown.querySelector("input.rq-button");
    button.value = "Next question";
    button.removeEventListener("click", button_clicked);
    button.addEventListener("click", next_question);
}

let correct = 0;
let total = 0;

const rqs = [...document.getElementById("revision-questions").querySelectorAll("div.rq")];

rqs.forEach((elem, i1) => {
    elem.setAttribute("num", (i1 + 1) + "")
    elem.querySelector(".question").innerHTML += ` <b class="no-underline">[${elem.getAttribute("marks")}]</b>`;
    [...elem.querySelectorAll(".rq-answer")].forEach((a, i2) => {
        let name = `checkbox-${i1}-${i2}`;
        a.innerHTML = `<input type="checkbox" class="rq-checkbox" id=${name} name=${name} />
                       <label for="${name}">${a.innerHTML}</label>`;
    })
    let txt = document.createElement("textarea");
    txt.classList.add("rq-textbox");
    txt.rows = 3;
    elem.insertBefore(txt, elem.querySelector(".rq-answer"));
    let btn = document.createElement("input");
    btn.type = "button";
    btn.classList.add("q-button", "rq-button");
    btn.value = "Check";
    elem.appendChild(btn);
    btn.addEventListener("click", button_clicked);
});

document.getElementById("q-num").innerHTML = "Question 1 of " + rqs.length;

rqs[0].classList.add("show");