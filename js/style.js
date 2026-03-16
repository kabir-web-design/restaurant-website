const d = new Date();

let sd = d.toLocaleDateString();
let st = d.toLocaleTimeString();

document.getElementById("show-date").innerHTML = sd;
document.getElementById("show-time").innerHTML = st;