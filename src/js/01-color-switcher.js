import { Report } from 'notiflix/build/notiflix-report-aio';

Report.info(
  '👋 Hello!',
  'Click on "START" to change the color of the background of the page or "STOP" to stop it'
);

const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');

let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttonStart.addEventListener('click', handleButtonStartClick);

function handleButtonStartClick() {
  bodyEl.classList.remove('page-body');

  const changeBgColor = () =>
    (bodyEl.style.backgroundColor = getRandomHexColor());

  intervalId = setInterval(changeBgColor, 1000);
  buttonStop.removeAttribute('disabled');
  buttonStop.classList.remove('btn-disabled');
  buttonStop.classList.add('btn');

  buttonStart.setAttribute('disabled', 'disabled');
  buttonStart.classList.remove('btn');
  buttonStart.classList.add('btn-disabled');
}

buttonStop.addEventListener('click', handleButtonStopClick);

function handleButtonStopClick() {
  clearInterval(intervalId);

  buttonStart.classList.remove('btn-disabled');
  buttonStart.classList.add('btn');
  buttonStart.removeAttribute('disabled');

  buttonStop.setAttribute('disabled', 'disabled');
  buttonStop.classList.remove('btn');
  buttonStop.classList.add('btn-disabled');
}
