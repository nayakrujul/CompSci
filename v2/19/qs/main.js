const pad = n => ("" + n).padStart(2, "0")

let d = new Date();
let date = '"' + d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()) + '"';
let time = '"' + pad(d.getHours()) + ":" + pad(d.getMinutes()) + '"';

document.getElementById("js-target-0").innerHTML = 
    document.getElementById("js-target-3").innerHTML =
        document.getElementById("js-target-4").innerHTML =
            document.getElementById("js-target-6").innerHTML =
                document.getElementById("js-target-7").innerHTML =
                    time;

document.getElementById("js-target-1").innerHTML = 
    document.getElementById("js-target-2").innerHTML =
        document.getElementById("js-target-5").innerHTML =
            date;