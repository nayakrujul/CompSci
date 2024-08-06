const target = document.getElementById("js-target");

let [sw, sh] = [screen.width, screen.height];

if (sw && sh) {
    let x = sw * sh;
    if (sw * sh >= 1e6) {
        x = (x / 1e6).toFixed(2) + " million";
    } else {
        x = parseFloat(x.toPrecision(2)).toLocaleString("en-gb");
    }
    target.innerHTML += ` Your viewport dimensions are ${sw}&times;${sh}, which means that <b>your screen has around ${x} pixels</b>.`;
}