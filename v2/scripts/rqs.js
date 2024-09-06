function remove(arr, elem) {
    arr.splice(arr.indexOf(elem), 1);
    return elem;
}

function random_choice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}

function next_question() {
    let old = document.querySelector("div.rq.show");
    total += +old.getAttribute("marks");
    correct += Math.min([...old.querySelectorAll("input[type=checkbox]:checked")].length, +old.getAttribute("marks"));
    old.classList.remove("show");
    document.getElementById("score").innerHTML = `Score: ${correct}/${total}`;
    remove(rqs, old);
    if (rqs.length === 0) {
        document.getElementById("q-num").innerHTML = "Done!";
        return;
    }
    nxt = random_choice(rqs);
    nxt.classList.add("show");
    num++;
    document.getElementById("q-num").innerHTML = `Question ${num} of ${len}`;
}

function button_clicked() {
    let shown = document.querySelector("div.rq.show");
    shown.querySelector("textarea.rq-textbox").disabled = true;
    [...shown.querySelectorAll("span.rq-answer, span.rq-answer-text")].forEach(ans => ans.classList.add("show"));
    let p = document.createElement("p");
    p.innerHTML = "<i>Tick off the marks you got right:</i>";
    p.classList.add("explain-text");
    shown.insertBefore(p, shown.querySelector("span.rq-answer"));
    let button = shown.querySelector("input.rq-button");
    button.value = "Next question";
    button.removeEventListener("click", button_clicked);
    button.addEventListener("click", next_question);
}

let correct = 0;
let total = 0;

let rqs = [...document.getElementById("revision-questions").querySelectorAll("div.rq")];
let len = rqs.length;
let num = 1;

rqs.forEach((elem, i1) => {
    elem.querySelector(".question").innerHTML += ` <b class="no-underline">[${elem.getAttribute("marks")}]</b>`;
    [...elem.querySelectorAll(".rq-answer")].forEach((a, i2) => {
        let name = `checkbox-${i1}-${i2}`;
        a.innerHTML = `<input type="checkbox" class="rq-checkbox" id=${name} name=${name} />
                       <label for="${name}">${a.innerHTML}</label>`;
    })
    let txt = document.createElement("textarea");
    txt.classList.add("rq-textbox");
    txt.rows = 3;
    elem.insertBefore(txt, elem.querySelector(".question").nextElementSibling);
    let btn = document.createElement("input");
    btn.type = "button";
    btn.classList.add("q-button", "rq-button");
    btn.value = "Check";
    elem.appendChild(btn);
    btn.addEventListener("click", button_clicked);
});

document.getElementById("q-num").innerHTML = "Question 1 of " + len;

random_choice(rqs).classList.add("show");