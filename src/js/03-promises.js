import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('form');
const { delay, step, amount } = formEl;

formEl.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  let inputDelay = Number(delay.value);
  let inputStep = Number(step.value);
  let inputAmount = Number(amount.value);

  for (let i = 1; i <= inputAmount; i += 1) {
    createPromise(i, inputDelay)
      .then(({ position, delay }) => {
        Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
        // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`Rejected promise ${position} in ${delay}ms`);
        // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    inputDelay += inputStep;
  }

  formEl.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
        // Fulfill
      } else {
        reject({ position, delay });
        // Reject
      }
    }, delay);
  });
}

// Напиши скрипт, який на момент сабміту форми
// викликає функцію createPromise(position, delay)
// стільки разів, скільки ввели в поле amount.

// Під час кожного виклику передай їй номер
// промісу(position), що створюється, і затримку,
//   враховуючи першу затримку(delay), введену користувачем,
//   і крок(step).

//   Доповни код функції createPromise таким чином,
//   щоб вона повертала один проміс, який виконується
//   або відхиляється через delay часу.Значенням промісу
//   повинен бути об'єкт, в якому будуть властивості
//   position і delay зі значеннями однойменних
// параметрів.Використовуй початковий код функції для
// вибору того, що потрібно зробити з промісом - виконати
// або відхилити.
