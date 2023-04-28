// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const tamerEl = document.querySelector('.timer');
const startBtn = document.querySelector('button[data-start]');
const inputEl = document.querySelector('#datetime-picker');
startBtn.disabled = true;

let intervalId = null;
let selectedDate = null;
let currentDate = null;


flatpickr(inputEl, {
    time_24hr: true,
    enableTime: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0].getTime() < Date.now()) {
        alert(`Please choose a date in the future`);  
        } else {
        startBtn.disabled = false;
        const setTimer = () => {
            selectedDate = selectedDates[0].getTime();
            timer.start();
        };
      
        startBtn.addEventListener('click', setTimer);
        }
    },
});
      
      const timer = {
        start() {
          intervalId = setInterval(() => {
            startBtn.disabled = true;
            currentDate = Date.now();
            const diff = selectedDate - currentDate;
      
            if (diff <= 0) {
              this.stop();
              return;
            }
            const { days, hours, minutes, seconds } = this.convertMs(diff);
            tamerEl.querySelector('[data-days]').textContent = 
              this.addLeadingZero(days);
            tamerEl.querySelector('[data-hours]').textContent =
              this.addLeadingZero(hours);
            tamerEl.querySelector('[data-minutes]').textContent =
              this.addLeadingZero(minutes);
            tamerEl.querySelector('[data-seconds]').textContent =
              this.addLeadingZero(seconds);
          }, 1000);
        },
      
        stop() {
          clearInterval(intervalId);
          startBtn.disabled = true;
        },
      
        convertMs(ms) {
          const second = 1000;
          const minute = second * 60;
          const hour = minute * 60;
          const day = hour * 24;
      
          const days = this.addLeadingZero(Math.floor(ms / day));
          const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
          const minutes = this.addLeadingZero(
            Math.floor(((ms % day) % hour) / minute)
          );
          const seconds = this.addLeadingZero(
            Math.floor((((ms % day) % hour) % minute) / second)
          );
      
          return { days, hours, minutes, seconds };
        },
      
        addLeadingZero(value) {
          return String(value).padStart(2, 0);
        },
};