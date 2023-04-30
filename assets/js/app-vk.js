const keyboard = document.querySelector('.keyboard');
const outputField = document.querySelector('.page__textarea-field');
const keyboardKeys = document.querySelectorAll('.key');

keyboard.addEventListener('mousedown', (event) => {
  if (event.target.classList.contains('key')) {
    outputField.value += event.target.textContent;
  }
});

function clickOnButton(keysArr) {
  keysArr.forEach((key) => {
    key.addEventListener('mousedown', () => {
      key.classList.add('key-active');
    });

    key.addEventListener('mouseup', () => {
      key.classList.remove('key-active');
    });
  });
}

function hoverOnButton(keysArr) {
  keysArr.forEach((key) => {
    key.addEventListener('mouseenter', () => {
      if (!key.classList.contains('key-active')) {
        key.classList.add('key-hover');
      }
    });

    key.addEventListener('mouseleave', () => {
      key.classList.remove('key-hover');
    });
  });
}

clickOnButton(keyboardKeys);
hoverOnButton(keyboardKeys);
