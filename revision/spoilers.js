// Spoilers

[...document.querySelectorAll(".spoiler")].map(p => {
    p.onclick = (event) => {
        let elem = event.srcElement;
        while (![...elem.classList].includes("spoiler")) {
            elem = elem.parentElement;
        }
        if ([...elem.classList].includes("show-spoiler")) {
            elem.classList.remove("show-spoiler");
        } else {
            elem.classList.add("show-spoiler");
        }
    };
});


// Swipes

const pages = [
    "1-01-Computational-Thinking",
    "1-02-Pseudocode",
    "1-03-Flowcharts",
    "1-04-Linear-Search",
    "1-05-Binary-Search",
    "1-06-Searching-Algorithms-Comparison",
    "1-07-Bubble-Sort",
    "1-08-Merge-Sort",
    "1-09-Sorting-Algorithms-Comparison",
    "1-Summary-Questions",
    "2A-01-Variables",
    "2A-02-Data-Types",
    "2A-03-Operations",
    "2A-04-Strings",
    "2A-05-Arrays",
    "2A-06-Random-Number-Generation",
    "2A-07-Selection",
    "2A-08-Records",
    "2A-09-Files",
    "2A-Summary-Questions",
    "2B-01-Subroutines",
    "2B-02-Local-and-Global-Variables",
    "2B-03-Structured-Programming",
    "2B-04-Validation-and-Authentication",
    "2B-05-Errors",
    "2B-06-Testing",
    "2B-07-Programming-Language-Classification",
    "2B-08-Translators",
    "2B-Summary-Questions",
    "3-01-Storage-Units",
    "3-02-Binary-and-Hexadecimal",
    "3-03-Binary-Arithmetic",
    "3-04-Binary-Shifts",
    "3-05-ASCII-and-Unicode",
    "3-06-Images",
    "3-07-Sound",
    "3-08-Compression",
    "3-09-Run-Length-Encoding",
    "3-10-Huffman-Coding",
    "3-Summary-Questions",
]

const temp = location.href.split("/");
const this_page = temp[temp.length - 2];
const index = pages.indexOf(this_page);

let touchstartX = 0;
let touchendX = 0;
let startTime = 0;
let endTime = 0;
    
function checkDirection() {
    let diff = touchendX - touchstartX;
    if (
        Math.abs(diff) > screen.width * 0.2
        && endTime - startTime <= 750
    ) {
        if (diff < 0) {
            // Next page
            if (index !== pages.length - 1) {
                location.replace("../" + pages[index + 1] + "/");
            }
        } else {
            // Previous page
            if (index !== 0) {
                location.replace("../" + pages[index - 1] + "/");
            }
        }
    }
}

document.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
    startTime = e.timeStamp;
});

document.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    endTime = e.timeStamp;
    checkDirection();
});

let home_link = document.querySelector(".home-link");

let tip = document.createElement("p");
tip.innerHTML = "<br /><i>Tip: you can swipe to navigate between pages on a touchscreen.</i>";
tip.classList.add("tip");

document.body.insertBefore(tip, home_link.nextSibling);