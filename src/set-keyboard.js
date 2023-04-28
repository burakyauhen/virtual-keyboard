// let language = 'eng';
const body = document.querySelector('.body');

body.insertAdjacentHTML('afterbegin', '<textarea name="area" id="screen" autofocus></textarea><div class="keyboard"></div');
const keyboard = document.querySelector('.keyboard');

for (let arr = 0; arr < keys.length; arr += 1) {
  alert(keyboard.innerHTML);
  keyboard.insertAdjacentHTML('beforeend', '<div class="row"></div>');
  const row = keyboard.lastElementChild;
  for (let el = 0; el < keys[arr].length; el += 1) {
    row.insertAdjacentHTML('beforeend', keys[arr][el].structure);
  }
}
