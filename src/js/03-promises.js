const formEl = document.querySelector('form');
const { delay, step, amount } = formEl;
// console.log(delay.value);
// console.log(step.value);
// console.log(amount.value);

// const amount = document.querySelector('input[name="amount"]');
formEl.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  createPromise(amount.value);
}

// Напиши скрипт, який на момент сабміту форми
// викликає функцію createPromise(position, delay)
// стільки разів, скільки ввели в поле amount.

// Під час кожного виклику передай їй номер
// промісу(position), що створюється, і затримку,
//   враховуючи першу затримку(delay), введену користувачем,
//   і крок(step).

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

//   Доповни код функції createPromise таким чином,
//   щоб вона повертала один проміс, який виконується
//   або відхиляється через delay часу.Значенням промісу
//   повинен бути об'єкт, в якому будуть властивості
//   position і delay зі значеннями однойменних
// параметрів.Використовуй початковий код функції для
// вибору того, що потрібно зробити з промісом - виконати
// або відхилити.

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
