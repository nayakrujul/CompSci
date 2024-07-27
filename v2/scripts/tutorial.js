[...document.querySelectorAll("h2")].forEach(h2 => {
    h2.innerHTML = `<a class="h2-link" href="#${h2.id}">${h2.innerHTML}</a>`
});

[...document.querySelectorAll(".hl-this")].forEach(hl => {
    hljs.highlightElement(hl);
});