const formEl = document.querySelector('.form');

formEl.addEventListener('click', onCreatePromise)

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
    if (shouldResolve) {
      resolve({position, delay})
    } else {
      reject({position, delay})
    }
  }, delay)
});
}

function onCreatePromise(event) {
  event.preventDefault();
  const {delay, step, amount} = event.currentTarget.elements;
  let inputDelay = Number(delay.value);
  let inputStep = Number(step.value);
  let inputAmount = Number(amount.value);

  for(let i = inputDelay; i <= inputAmount; i += inputStep){
    inputDelay += inputStep;

  createPromise(inputAmount, inputDelay)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  event.currentTarget.reset();
  }
}
