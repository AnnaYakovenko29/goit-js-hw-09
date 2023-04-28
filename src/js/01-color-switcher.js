
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.body;
let timerId = null;

startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    timerId = setInterval(() => {
        const color = getRandomHexColor()
        body.style.backgroundColor = color;
      }, 1000);
    });

    stopBtn.addEventListener("click", () => {
        startBtn.disabled = false;
        stopBtn.disabled = true;
        clearInterval(timerId);
      });

    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
      }