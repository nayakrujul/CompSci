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