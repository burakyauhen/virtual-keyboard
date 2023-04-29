

let language = 'eng';

const body = document.querySelector('.body');

body.insertAdjacentHTML('afterbegin', '<textarea name="area" id="screen" autofocus></textarea><div class="keyboard"></div');
const keyboard = document.querySelector('.keyboard');
const textArea = document.querySelector('#screen');

function createKeyboard(keys) {
  for (let arr = 0; arr < keys.length; arr += 1) {
    keyboard.insertAdjacentHTML('beforeend', '<div class="row"></div>');
    const row = keyboard.lastElementChild;
    for (let el = 0; el < keys[arr].length; el += 1) {
      row.insertAdjacentHTML('beforeend', keys[arr][el].structure);
    }
  }
}

createKeyboard(keys);
const virtualKeys = document.querySelectorAll('.key');

function feelKeyboard(keys, language, sh, caps) {
  let currentKey = 0;
  for (let arr = 0; arr < keys.length; arr += 1) {
    for (let el = 0; el < keys[arr].length; el += 1) {
      virtualKeys[currentKey].innerHTML = keys[arr][el].ru;
      currentKey += 1;
    }
  }
}

feelKeyboard(keys);

function printKey(event) {
  const key = findKey(event.code);
  textArea.value += key.ru;
  event.preventDefault();
  // alert(event.code + '  ' + event.key);
}

addEventListener('keydown', printKey);

function findKey(code) {
  for (let arr = 0; arr < keys.length; arr += 1) {
    for (let el = 0; el < keys[arr].length; el += 1) {
      if (keys[arr][el].keyCode === code) {
        return keys[arr][el];
      }
    }
  }
}
