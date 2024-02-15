function sum(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

function count(str, char) {
    return sum([...str].map(ch => +(ch === char)));
}

function random_choice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function range(num) {
    return [...Array(num).keys()];
}

var options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
};

var today = new Date();
var string = today.toLocaleDateString("en-GB", options);

var letters = [...string].filter(c => /^[A-Z]$/i.test(c)).join("");
var counts = [...letters].filter((x, i) => letters.indexOf(x) === i).map(l => [l, count(letters, l)]).sort((a, b) => b[1] - a[1]);
var multiples = counts.filter(m => m[1] > 1);

let chosen = "";

t1 = document.getElementById("js-target-1");
t1.innerHTML = `&quot;` + string + `&quot;`;

t2 = document.getElementById("js-target-2");
chosen = random_choice(multiples.length > 0 ? multiples : counts)[0];
t2.innerHTML = `'` + chosen + `'`;

t3 = document.getElementById("js-target-3");
start = random_choice(range(Math.ceil(string.length / 2)));
t3.innerHTML = "" + start;

t4 = document.getElementById("js-target-4");
end = start + random_choice(range(Math.floor(string.length / 2))) + 1;
t4.innerHTML = "" + end;

t5 = document.getElementById("js-target-5");
t5.innerHTML = "" + string.length;

t6 = document.getElementById("js-target-6");
t6.innerHTML = "" + string.indexOf(chosen);

t7 = document.getElementById("js-target-7");
t7.innerHTML = `&quot;` + string.substring(start, end + 1) + `&quot;`;