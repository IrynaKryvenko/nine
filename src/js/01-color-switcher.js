const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const backgrcolor = document.querySelector('body');

let intervalId = null;

function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}
startBtn.addEventListener('click', onStartBtn);
stopBtn.addEventListener('click', onStopBtn);

function changeColor() {
    backgrcolor.style.backgroundColor = getRandomHexColor(); 
}

function onStartBtn() {
    intervalId = setInterval(() => { changeColor(); }, 1000);
    stopBtn.disabled = false;
    startBtn.disabled = true;
}

function onStopBtn() {
    clearInterval(intervalId);
    stopBtn.disabled = true;
    startBtn.disabled = false;
}
