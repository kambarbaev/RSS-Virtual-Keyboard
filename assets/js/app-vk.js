const keyboard = document.querySelector('.keyboard');
const outputField = document.querySelector('.page__textarea-field');
const keyboardKeys = document.querySelectorAll('.key');
const ignoredButtons = ['AltLeft', 'ControlLeft', 'AltRight', 'ControlRight', 'MetaLeft'];
// const arrowButtons = ['ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'];

function deleteContentInOutputField(dataKey) {
  const { selectionStart: startSelect, selectionEnd: endSelect } = outputField;
  if (dataKey === 'Delete') {
    if (endSelect === startSelect) {
      outputField.value = outputField.value.slice(0, startSelect)
      + outputField.value.slice(startSelect + 1);
      outputField.setSelectionRange(startSelect, startSelect);
    } else {
      outputField.value = outputField.value.slice(0, startSelect)
      + outputField.value.slice(endSelect);
      outputField.setSelectionRange(startSelect, startSelect);
    }
  } else if (dataKey === 'Backspace') {
    if (startSelect !== 0 && startSelect === endSelect) {
      outputField.value = outputField.value.slice(0, startSelect - 1)
      + outputField.value.slice(startSelect);
      outputField.setSelectionRange(startSelect - 1, startSelect - 1);
    } else {
      outputField.value = outputField.value.slice(0, startSelect)
      + outputField.value.slice(endSelect);
      outputField.setSelectionRange(startSelect, startSelect);
    }
  }
}

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
        deleteContentInOutputField('Backspace');
        break;
      case 'Enter':
        outputField.value += '\n';
        break;
      case 'Delete':
        deleteContentInOutputField('Delete');
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
      key.classList.add('key-active');
      if (ignoredButtons.includes(event.code)) {
        return;
      }
      if (outputField !== document.activeElement) {
        switch (event.key) {
          case 'ArrowLeft':
            outputField.value += '←';
            break;
          case 'ArrowRight':
            outputField.value += '→';
            break;
          case 'ArrowUp':
            outputField.value += '↑';
            break;
          case 'ArrowDown':
            outputField.value += '↓';
            break;
          case 'Tab':
            event.preventDefault();
            outputField.value += '\t'; // или 4 пробела
            break;
          case 'Enter':
            outputField.value += '\n';
            break;
          case ' ':
            outputField.value += ' ';
            break;
          case 'Backspace':
            deleteContentInOutputField('Backspace');
            break;
          case 'Delete':
            deleteContentInOutputField('Delete');
            break;
          default:
            outputField.value += key.textContent;
        }
      } else {
        switch (event.key) {
          case 'ArrowLeft':
            outputField.value += '←';
            break;
          case 'ArrowRight':
            outputField.value += '→';
            break;
          case 'ArrowUp':
            outputField.value += '↑';
            break;
          case 'ArrowDown':
            outputField.value += '↓';
            break;
          case 'Tab':
            event.preventDefault();
            outputField.value += '\t'; // или 4 пробела
            break;
          case 'Enter':
            break;
          case ' ':
            break;
          case 'Backspace':
            break;
          case 'Delete':
            break;
          default:
            event.preventDefault();
            outputField.value += key.textContent;
        }
      }
    }
  });
});

window.addEventListener('keyup', (event) => {
  keyboardKeys.forEach((key) => {
    if (key.dataset.key === event.code) {
      key.classList.remove('key-active');
    }
  });
});
