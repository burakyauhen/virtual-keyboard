import keys from './keys.js';

let language = 'en';
let keySymbol = 0;
let shift = false;
let capsLock = false;

const body = document.querySelector('body');
body.classList.add('.body');

body.insertAdjacentHTML('afterbegin', '<textarea name="area" id="screen" autofocus></textarea><div class="keyboard"></div');
const keyboard = document.querySelector('.keyboard');
const textArea = document.querySelector('#screen');

function createKeyboard() {
  for (let arr = 0; arr < keys.length; arr += 1) {
    keyboard.insertAdjacentHTML('beforeend', '<div class="row"></div>');
    const row = keyboard.lastElementChild;
    for (let el = 0; el < keys[arr].length; el += 1) {
      row.insertAdjacentHTML('beforeend', keys[arr][el].structure);
    }
  }
}

function chooseSymbolColumn() {
  if (language === 'en') {
    if (shift === false && capsLock === false) keySymbol = 0;
    if (shift === true && capsLock === false) keySymbol = 1;
    if (shift === false && capsLock === true) keySymbol = 2;
    if (shift === true && capsLock === true) keySymbol = 3;
  }
  if (language === 'ru') {
    if (shift === false && capsLock === false) keySymbol = 0;
    if (shift === true && capsLock === false) keySymbol = 1;
    if (shift === false && capsLock === true) keySymbol = 2;
    if (shift === true && capsLock === true) keySymbol = 3;
  }
}

chooseSymbolColumn();

createKeyboard(keys);
const virtualKeys = document.querySelectorAll('.key');

function feelKeyboard() {
  let currentKey = 0;
  for (let arr = 0; arr < keys.length; arr += 1) {
    for (let el = 0; el < keys[arr].length; el += 1) {
      if (keys[arr][el].type === 'not-functional') {
        virtualKeys[currentKey].innerHTML = keys[arr][el][language][keySymbol];
      }
      if (keys[arr][el].type === 'functional') {
        virtualKeys[currentKey].innerHTML = keys[arr][el].name;
      }
      currentKey += 1;
    }
  }
}

body.insertAdjacentHTML('beforeend', `<div class="description">
    <p>Клавиатура создана в операционной системе Windows</p>
    <p>Для переключения языка комбинация: левыe ctrl + alt</p>
    <p>Возможности ES6+:  - Стрелочные функции; - Модули (импорт, экспорт); - let и const.</p></div>
`);

function setLocalStoragelanguage() {
  localStorage.setItem('language', [language]);
}

function getLocalStoragelanguage() {
  if (localStorage.getItem('language')) {
    language = localStorage.getItem('language');
    chooseSymbolColumn();
    feelKeyboard(keys);
  } else {
    language = 'en';
  }
}

window.addEventListener('load', getLocalStoragelanguage);
window.addEventListener('beforeunload', setLocalStoragelanguage);

feelKeyboard(keys);

function findKey(code) {
  for (let arr = 0; arr < keys.length; arr += 1) {
    for (let el = 0; el < keys[arr].length; el += 1) {
      if (keys[arr][el].keyCode === code) {
        return keys[arr][el];
      }
    }
  }
  return null;
}

function findMouseKey(position) {
  for (let arr = 0; arr < keys.length; arr += 1) {
    for (let el = 0; el < keys[arr].length; el += 1) {
      if (keys[arr][el].position === position) {
        return keys[arr][el];
      }
    }
  }
  return null;
}

function highlightKey(div) {
  div.classList.add('key_active');
  setTimeout(() => div.classList.remove('key_active'), 200);
}

function switchOnKey(position) {
  virtualKeys[position].classList.add('key_active');
}

function switchOffKey(position) {
  virtualKeys[position].classList.remove('key_active');
}

function implementFunctionalKey(key) {
  if (key.keyCode === 'CapsLock') {
    capsLock = !capsLock;
    chooseSymbolColumn();
    feelKeyboard();
  }
  if (key.keyCode === 'Enter') {
    textArea.setRangeText('\n', textArea.selectionStart, textArea.selectionStart, 'end');
  }
  if (key.keyCode === 'Tab') {
    textArea.setRangeText('    ', textArea.selectionStart, textArea.selectionStart, 'end');
  }
  if (key.keyCode === 'Delete') {
    textArea.setRangeText('', textArea.selectionStart, textArea.selectionStart + 1, 'end');
  }
  if (key.keyCode === 'Backspace' && textArea.value.length > 0) {
    textArea.setRangeText('', textArea.selectionStart - 1, textArea.selectionStart, 'end');
  }
  if (key.keyCode === 'ArrowLeft') {
    textArea.setRangeText('◄', textArea.selectionStart, textArea.selectionStart, 'end');
  }
  if (key.keyCode === 'ArrowRight') {
    textArea.setRangeText('►', textArea.selectionStart, textArea.selectionStart, 'end');
  }
  if (key.keyCode === 'ArrowUp') {
    textArea.setRangeText('▲', textArea.selectionStart, textArea.selectionStart, 'end');
  }
  if (key.keyCode === 'ArrowDown') {
    textArea.setRangeText('▼', textArea.selectionStart, textArea.selectionStart, 'end');
  }
}

function printKey(key) {
  switchOnKey(key.position);
  if (key.type === 'not-functional') {
    textArea.setRangeText(key[language][keySymbol], textArea.selectionStart, textArea.selectionEnd, 'end');
  }
  if (key.type === 'functional') {
    implementFunctionalKey(key);
  }
}

function pushKey(event) {
  event.preventDefault();
  const key = findKey(event.code);
  printKey(key);
}

function unPushKey(event) {
  if (event.key === 'Shift') {
    shift = false;
    chooseSymbolColumn();
    feelKeyboard();
  }
  const key = findKey(event.code);
  switchOffKey(key.position);
}

function pushMouseKey(event) {
  const div = event.target.closest('.key');
  if (!div) return;
  const position = Array.from(virtualKeys).findIndex((item) => item === div);
  const key = findMouseKey(position);
  if (key.keyCode !== 'ShiftLeft' && key.keyCode !== 'ShiftRight') {
    highlightKey(div);
    printKey(key);
  }
  if (key.keyCode === 'ShiftLeft' || key.keyCode === 'ShiftRight') {
    if (shift === false) {
      switchOnKey(key.position);
      shift = !shift;
    } else {
      switchOffKey(key.position);
      shift = !shift;
    }
    chooseSymbolColumn();
    feelKeyboard();
  }
}

function switchLanguage(event) {
  if (event.ctrlKey && event.code === 'AltLeft') {
    if (language === 'ru') {
      language = 'en';
    } else {
      language = 'ru';
    }
    feelKeyboard();
  }
}

document.addEventListener('keydown', pushKey);
document.addEventListener('keyup', unPushKey);
document.addEventListener('click', pushMouseKey);
document.addEventListener('keydown', switchLanguage);
document.addEventListener('keydown', (event) => {
  if (event.shiftKey && !event.repeat) {
    shift = true;
    chooseSymbolColumn();
    feelKeyboard();
  }
});
