const keyboard = document.querySelector('.keyboard');
const outputField = document.querySelector('.page__textarea-field');
const keyboardKeys = document.querySelectorAll('.key');
const ignoredButtons = ['AltLeft', 'ControlLeft', 'AltRight', 'ControlRight'];
// const arrowButtons = ['ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'];

keyboard.addEventListener('mousedown', (event) => {
  if (event.target.classList.contains('key')) {
    if (ignoredButtons.includes(event.target.dataset.code)) {
      return;
    }
    switch (event.target.dataset.key) {
      case 'Space':
        outputField.value += ' ';
        break;
      case 'Tab':
        outputField.value += '\t';
        break;
      case 'Backspace':
        outputField.value = outputField.value.slice(0, -1);
        break;
      case 'Enter':
        outputField.value += '\n';
        break;
      default:
        outputField.value += event.target.textContent;
        break;
    }
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
