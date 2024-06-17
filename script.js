let countEl = document.getElementById("count-el");
let count = parseInt(countEl.innerText);
let saveEl = document.getElementById("save-el");

function increment() {
    console.log("clicked");
    count++;
    countEl.innerText = count;
}
function save(){
    console.log("salvou");
    console.log(count);
    let countSTR = count + "-"
    "entradas passadas:"; saveEl.textContent +="  " + countSTR
}