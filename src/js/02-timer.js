import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Report } from 'notiflix/build/notiflix-report-aio';

// const refs = {
//   datetimePicker: document.querySelector('#datetime-picker'),
//   btnStart: document.querySelector('[data-start]'),
// };

const datetimePicker = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');

const timerValue = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let buttonStartStatus = false;
btnStart.setAttribute('disabled', 'disabled');

const currentTime = Date.now();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] > currentTime) {
      buttonStartStatus = true;
      btnStart.removeAttribute('disabled');
      btnStart.addEventListener('click', handleButtonStartClick);
      Report.success('&#128077;', 'Click on start!');
    } else {
      // window.alert('Please choose a date in the future');
      Report.warning(
        '&#129335; Ooops...',
        'Please choose a date in the future',
        'Okay'
      );
    }
  },
};

function handleButtonStartClick() {
  let timer = setInterval(() => {
    let countdown = new Date(datetimePicker.value) - new Date();
    datetimePicker.disabled = true;
    if (countdown >= 0) {
      let timerData = convertMs(countdown);
      timerValue.days.textContent = timerData.days;
      timerValue.hours.textContent = timerData.hours;
      timerValue.minutes.textContent = timerData.minutes;
      timerValue.seconds.textContent = timerData.seconds;
    } else {
      clearInterval(timer);
    }
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

Report.info('👋 Hello!', 'Please, choose a date and click on start', 'Okay');

// const flatpickr = require('flatpickr');

flatpickr(datetimePicker, options);
