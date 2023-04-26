
const startBtn = document.querySelector(data-start);
const stopBtn = document.querySelector(data-stop);
let timerId = null;

startBtn.addEventListener('click', () => {
    timerId = setInterval(() => {
        console.log(`I love async JS!  ${Math.random()}`);
      }, 1000);
    });