const keyboard = document.querySelector('.keyboard');
const outputField = document.querySelector('.page__textarea-field');
const keyboardKeys = document.querySelectorAll('.key');
const ignoredButtons = ['AltLeft', 'ControlLeft', 'AltRight', 'ControlRight'];
// const arrowButtons = ['ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'];

function addButtonContentInOutputField(event) {
  if (event.target.classList.contains('key')) {
    if (ignoredButtons.includes(event.target.dataset.key)) {
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
}

function addActiveOnButton(keysArr) {
  keysArr.forEach((key) => {
    key.addEventListener('mousedown', () => {
      key.classList.add('key-active');
    });

    key.addEventListener('mouseup', () => {
      key.classList.remove('key-active');
    });
  });
}

function addHoverOnButton(keysArr) {
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
keyboard.addEventListener('mousedown', addButtonContentInOutputField);
addActiveOnButton(keyboardKeys);
addHoverOnButton(keyboardKeys);
window.addEventListener('keydown', (event) => {
  // eslint-disable-next-line no-console
  console.log(event);
  keyboardKeys.forEach((key) => {
    if (key.dataset.key === event.code) {
      // eslint-disable-next-line no-console
      // console.log(key);
      key.classList.add('key-active');
    }
  });
  if (outputField !== document.activeElement) {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight' && event.key !== 'ArrowUp' && event.key !== 'ArrowDown') {
      if (ignoredButtons.includes(event.code)) {
        outputField.value += 'надо идти спать(';
      } else {
        outputField.value += event.key;
      }
    } else {
      let content;
      switch (event.key) {
        case 'ArrowLeft':
          content = '←';
          break;
        case 'ArrowRight':
          content = '→';
          break;
        case 'ArrowUp':
          content = '↑';
          break;
        case 'ArrowDown':
          content = '↓';
          break;
        default:
          content = '';
      }
      outputField.value += content;
    }
  } else {
    let content;
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        content = '←';
        break;
      case 'ArrowRight':
        event.preventDefault();
        content = '→';
        break;
      case 'ArrowUp':
        event.preventDefault();
        content = '↑';
        break;
      case 'ArrowDown':
        event.preventDefault();
        content = '↓';
        break;
      default:
        content = '';
    }
    outputField.value += content;
  }
});

window.addEventListener('keyup', (event) => {
  keyboardKeys.forEach((key) => {
    if (key.dataset.key === event.code) {
      key.classList.remove('key-active');
    }
  });
});
