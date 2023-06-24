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
  // установить интервал
  // сделать колбек в виде функции, иниц.рандом цвет
  // навесить клас дисплей нон

  const changeBgColor = () =>
    (bodyEl.style.backgroundColor = getRandomHexColor());

  intervalId = setInterval(changeBgColor, 1000);
  if (buttonStartStatus) {
    buttonStart.setAttribute('disabled', 'disabled');
    buttonStartStatus = false;
  }
}

buttonStop.addEventListener('click', handleButtonStopClick);

function handleButtonStopClick() {
  // снять клас дисплей нон
  // остановить функцию getRandomHexColor
  // снять интервал

  clearInterval(intervalId);
  if (!buttonStartStatus) {
    buttonStart.removeAttribute('disabled');
    buttonStartStatus = true;
  }
}
