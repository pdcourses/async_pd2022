/*
Асинхронный код выполняется сразу после синхронного
*/

const spinner = document.getElementById('spinner');
let c = 0;

setInterval(rotateSpinner, 1000 / 50);

function rotateSpinner () {
    spinner.style.transform = `rotate(${++c}deg)`;
}

const helloBtn = document.getElementById('hello');

helloBtn.onclick = function () {
    alert('Hello');
};
