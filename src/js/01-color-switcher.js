import { Report } from 'notiflix/build/notiflix-report-aio';

Report.info(
  '👋 Hello!',
  'Click on "START" to change the color of the background of the page or "STOP" to stop it'
);

const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');

let buttonStartStatus = true;
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
  if (buttonStartStatus) {
    buttonStart.setAttribute('disabled', 'disabled');
    buttonStartStatus = false;
    buttonStart.classList.remove('btn');
    buttonStart.classList.add('btn-disabled');
  }
}

buttonStop.addEventListener('click', handleButtonStopClick);

function handleButtonStopClick() {
  clearInterval(intervalId);
  if (!buttonStartStatus) {
    buttonStart.removeAttribute('disabled');
    buttonStartStatus = true;
    buttonStart.classList.remove('btn-disabled');
    buttonStart.classList.add('btn');
  }
}
