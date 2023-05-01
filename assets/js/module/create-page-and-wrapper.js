export default function createPageAndKeyboardWrapper() {
  const main = document.createElement('main');
  main.className = 'page';

  const wrapper = document.createElement('div');
  wrapper.className = 'page__wrapper';

  const title = document.createElement('h1');
  title.className = 'page__title';
  title.textContent = 'RSS Виртуальная клавиатура';

  const textOutputField = document.createElement('div');
  textOutputField.className = 'page__text-output-field';

  const textarea = document.createElement('textarea');
  textarea.className = 'page__textarea-field';
  textarea.name = 'text-output';
  textarea.id = 'text-output';

  textOutputField.appendChild(textarea);

  const keyboard = document.createElement('div');
  keyboard.className = 'page__keyboard keyboard';

  const description = document.createElement('div');
  description.className = 'page__description';

  const text1 = document.createElement('p');
  text1.className = 'page__text';
  text1.textContent = 'Клавиатура создана в операционной системе Windows';

  const text2 = document.createElement('p');
  text2.className = 'page__text';
  text2.textContent = 'Для переключения языка комбинация: левыe ctrl + alt';

  description.appendChild(text1);
  description.appendChild(text2);

  wrapper.appendChild(title);
  wrapper.appendChild(textOutputField);
  wrapper.appendChild(keyboard);
  wrapper.appendChild(description);

  main.appendChild(wrapper);

  return main;
}
