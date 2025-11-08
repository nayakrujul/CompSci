// Navbar arrows

let [x, y] = location.href
    .replaceAll("/index.html", "/")
    .split("/").slice(-3, -1);
let [p, n] = [null, null];

//          (0)   1  2   3   4   5  6  7  8   9     10   11   12    13    14   15  16  17    18   19  20
let last = [null, 9, 17, 10, 18, 5, 5, 7, 3, null, null, 11, null, null, null, 12, 7, null, null, 4, null];

if (y === "01") {
    if (x !== "1")
        p = (x - 1) + "/qs/";
} else if (y == "qs") {
    p = x + "/" + (last[+x] + "")
        .padStart(2, 0) + "/";
} else {
    p = x + "/" + ((y - 1) + "")
        .padStart(2, "0") + "/";
}

if (+y === last[+x]) {
    n = x + "/qs/";
} else if (y === "qs") {
    if (+x < last.length - 1)
        n = (+x + 1) + "/01/";
} else {
    n = x + "/" + ((+y + 1) + "")
        .padStart(2, "0") + "/";
}

let ft = document.getElementById("footer");
ft.innerHTML =
    `<a id="prev-link" ${p === null ? 'class="disabled"' : ''} href="../../${p}">◀</a>` +
    ft.innerHTML +
    `<a id="next-link" ${n === null ? 'class="disabled"' : ''} href="../../${n}">▶</a>`;


// Summary question buttons

[...document.querySelectorAll(".summary-question")].forEach(qs => {
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


// Image zoom in

[...document.querySelectorAll("img:not(.icon):not(#logo):not(.no-zoom)")].forEach(img => {
    img.addEventListener("click", (evt) => {
        window.open(evt.target.src, "_blank").focus();
    });
});


// Definition copy button

const list = document.querySelectorAll("p.definition");

function remove(target) {
    return () => {
        target.classList.remove("donebtn");
    };
}

[...list].map(p => {
    let cont = p.innerText.trim();
    let btn = document.createElement("input");
    btn.type = "button";
    btn.classList.add("copybtn");
    btn.setAttribute("copyval", cont);
    btn.addEventListener("click", (event) => {
        let q = event.target;
        navigator.clipboard.writeText(q.getAttribute("copyval"));
        q.classList.add("donebtn");
        setTimeout(remove(q), 2000);
    });
    p.appendChild(btn);
});


// Minimise tables

const tables = document.querySelectorAll("p.table");

[...tables].forEach((t, i) => {
    t.innerHTML += `&nbsp;<img class="table-minimise no-zoom" id="table-minimise-${i}" />`;
    document.getElementById("table-minimise-" + i).addEventListener("click", ({target}) => {
        let num = +target.id.split("-")[2];
        if ([...target.classList].includes("maximise")) {
            target.classList.remove("maximise");
            [...document.querySelectorAll("table")][num].classList.remove("minimised");
        } else {
            target.classList.add("maximise");
            [...document.querySelectorAll("table")][num].classList.add("minimised");
        }
    });
});


// Index dropdown

const pageNames = [
    [],
    [
        "Computational Thinking",
        "Pseudo-code",
        "Flowcharts",
        "Linear Search",
        "Binary Search",
        "Searching Algorithms Comparison",
        "Bubble Sort",
        "Merge Sort",
        "Sorting Algorithms Comparison",
        "qs"
    ],
    [
        "Variables",
        "Data Types",
        "Operations",
        "Strings",
        "Arrays",
        "Random Number Generation",
        "Selection",
        "Records",
        "Files",
        "Subroutines",
        "Local and Global Variables",
        "Structured Programming",
        "Validation and Authentication",
        "Errors",
        "Testing",
        "Programming Language Classification",
        "Translators",
        "qs"
    ],
    [
        "Storage Units",
        "Binary and Hexadecimal",
        "Binary Arithmetic",
        "Binary Shifts",
        "ASCII and Unicode",
        "Images",
        "Sound",
        "Compression",
        "Run Length Encoding",
        "Huffman Coding",
        "qs"
    ],
    [
        "Logic Gates",
        "Simple Truth Tables",
        "Complex Truth Tables",
        "Logic Diagrams",
        "Logic Symbols",
        "Hardware and Software",
        "The Operating System",
        "Utility Software",
        "The CPU",
        "The Fetch-Execute Cycle",
        "CPU Performance",
        "RAM and ROM",
        "Virtual Memory",
        "Magnetic Storage",
        "Flash Storage",
        "Optical Storage",
        "Secondary Storage Summary",
        "Cloud Storage",
        "qs"
    ],
    [
        "Network Types",
        "Wired and Wireless Networks",
        "Network Topologies",
        "Protocols",
        "Network Security",
        "qs"
    ],
    [
        "Cyber Security Threats",
        "Penetration Testing",
        "Social Engineering",
        "Malware",
        "Preventing Threats",
        "qs"
    ],
    [
        "Databases",
        "SELECT Statements",
        "WHERE Clauses",
        "ORDER BY",
        "INSERT INTO",
        "UPDATE and DELETE",
        "Relational Databases",
        "qs"
    ],
    [
        "Ethical Issues",
        "Legal Issues",
        "Environmental Issues",
        "qs"
    ],
    [
        "Data Types",
        "Programming Concepts",
        "Operations",
        "Random Number Generation",
        "Exception Handling",
        "Subroutines",
        "Recursion",
        "Procedural Programming",
        "Object-Oriented Programming",
        "Inheritance",
        "Information Hiding",
        "Association",
        "UML Diagrams"
    ],
    [
        "Logic Puzzles",
        "Abstraction",
        "Decomposition"
    ],
    [
        "Number Systems",
        "Units of Information",
        "Binary Multiplication",
        "Two's Complement",
        "Fixed Point Representation",
        "Floating Point Representation",
        "Error Checking",
        "Images",
        "Sound",
        "Compression",
        "Encryption",
        "qs"
    ],
    [
        "Hardware and Software",
        "The Operating System",
        "Utility Software",
        "Programming Language Classification",
        "Logic Gates",
        "Adder Circuits",
        "Boolean Algebra"
    ],
    [
        "Computer Hardware",
        "System Architectures",
        "The CPU",
        "The Fetch-Execute Cycle",
        "Assembly Language"
    ],
    [
        "Communication Basics",
        "Serial and Parallel Transmission",
        "Synchronising Communication",
        "Network Topologies",
        "Network Models",
        "Wireless Networks",
        "Avoiding Collisions"
    ],
    [
        "Data Structures",
        "Arrays",
        "Linear Queues",
        "Circular Queues",
        "Priority Queues",
        "Stacks",
        "Graphs",
        "Graph Implementation",
        "Trees",
        "Dictionaries",
        "Hash Tables",
        "Vectors",
        "qs"
    ],
    [
        "Time Complexity",
        "Classification of Algorithms",
        "Graph Traversal",
        "Tree Traversal",
        "Reverse Polish Notation",
        "Searching and Sorting Algorithms",
        "Dijkstra's Shortest Path",
        "qs"
    ],
    [
        "Finite State Machines",
        "Basics of Sets",
        "Set Operations",
        "Regular Expressions",
        "Context-Free Languages",
        "Turing Machines"
    ],
    [
        "The Internet"
    ],
    [
        "Data Modelling",
        "More SQL",
        "Database Normalisation",
        "Client-Server Databases",
        "qs"
    ],
    []
];

const [_, section, page] = location.href.match(/^.*v2\/(\d\d?)\/(\d\d|qs).*$/);

const drp = document.getElementById("menu");
drp.classList.add("page-dropdown");
drp.innerHTML = "";

pageNames.forEach((sct, num) => {
    if (sct.length > 0) {
        drp.innerHTML += `<a href="/v2/${num}/" class="menu-link click-ignore menu-section"><b>Section ${num}</b></a>`;
        sct.forEach((pg, ix) => {
            let ixx = (ix + 1 + "").padStart(2, "0");
            if (pg !== "qs") {
                if (num === +section && ixx === page) {
                    drp.innerHTML += `
                        <a href="/v2/${num}/${ixx}/" class="menu-link click-ignore" id="this-page">
                            &ensp; <b class="no-underline">${num}.${ixx}: ${pg}</b>
                        </a>
                    `;
                } else {
                    drp.innerHTML += `
                        <a href="/v2/${num}/${ixx}/" class="menu-link click-ignore">
                            &ensp; ${num}.${ixx}: ${pg}
                        </a>
                    `;
                }
            } else {
                if (num === +section && page === "qs") {
                    drp.innerHTML += `
                        <a href="/v2/${num}/qs/" class="menu-link click-ignore" id="this-page">
                            &ensp; <b class="no-underline">Revision Questions</b>
                        </a>
                    `;
                } else {
                    drp.innerHTML += `
                        <a href="/v2/${num}/qs/" class="menu-link click-ignore">&ensp; Revision Questions</a>
                    `;
                }
            }
        });
    }
});


// Store last viewed page

localStorage.setItem("lastPageLink", section + "/" + page);
localStorage.setItem("lastPageTitle", document.title.split(" | ")[0]);
localStorage.setItem("lastPageOpen", Date.now())
