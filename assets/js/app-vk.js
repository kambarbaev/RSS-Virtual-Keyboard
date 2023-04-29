const keyboard = document.querySelector('.keyboard');
const outputField = document.querySelector('.page__textarea-field');

keyboard.addEventListener('click', (event) => {
  if (event.target.classList.contains('key')) {
    const targetContent = event.target.textContent;
    outputField.value += targetContent;
  }
});

window.addEventListener('keydown', (event) => {
  outputField.value += event.key;
});

// outputField.addEventListener('keydown', (event) => {
//   event.preventDefault();
// });