const keys = [
  [{
    position: 0, type: 'not-functional', keyCode: 'Backquote', en: ['`', '~', '`', '~'], ru: ['ё', 'Ё', 'Ё', 'ё'], structure: '<div class="key"></div>',
  },
  {
    position: 1, type: 'not-functional', keyCode: 'Digit1', en: ['1', '!', '1', '!'], ru: ['1', '!', '1', '!'], structure: '<div class="key"></div>',
  },
  {
    position: 2, type: 'not-functional', keyCode: 'Digit2', en: ['2', '@', '2', '@'], ru: ['2', '"', '2', '"'], structure: '<div class="key"></div>',
  },
  {
    position: 3, type: 'not-functional', keyCode: 'Digit3', en: ['3', '#', '3', '#'], ru: ['3', '№', '3', '№'], structure: '<div class="key"></div>',
  },
  {
    position: 4, type: 'not-functional', keyCode: 'Digit4', en: ['4', '$', '4', '$'], ru: ['4', ';', '4', ';'], structure: '<div class="key"></div>',
  },
  {
    position: 5, type: 'not-functional', keyCode: 'Digit5', en: ['5', '%', '5', '%'], ru: ['5', '%', '5', '%'], structure: '<div class="key"></div>',
  },
  {
    position: 6, type: 'not-functional', keyCode: 'Digit6', en: ['6', '^', '6', '^'], ru: ['6', ':', '6', ':'], structure: '<div class="key"></div>',
  },
  {
    position: 7, type: 'not-functional', keyCode: 'Digit7', en: ['7', '&', '7', '&'], ru: ['7', '?', '7', '?'], structure: '<div class="key"></div>',
  },
  {
    position: 8, type: 'not-functional', keyCode: 'Digit8', en: ['8', '*', '8', '*'], ru: ['8', '*', '8', '*'], structure: '<div class="key"></div>',
  },
  {
    position: 9, type: 'not-functional', keyCode: 'Digit9', en: ['9', '(', '9', '('], ru: ['9', '(', '9', '('], structure: '<div class="key"></div>',
  },
  {
    position: 10, type: 'not-functional', keyCode: 'Digit0', en: ['0', ')', '0', ')'], ru: ['0', ')', '0', ')'], structure: '<div class="key"></div>',
  },
  {
    position: 11, type: 'not-functional', keyCode: 'Minus', en: ['-', '_', '-', '_'], ru: ['-', '_', '-', '_'], structure: '<div class="key"></div>',
  },
  {
    position: 12, type: 'not-functional', keyCode: 'Equal', en: ['=', '+', '=', '+'], ru: ['=', '+', '=', '+'], structure: '<div class="key"></div>',
  },
  {
    position: 13, type: 'functional', keyCode: 'Backspace', name: 'Backspace', structure: '<div class="key key-fun backspace"></div>',
  }],
  [{
    position: 14, type: 'functional', keyCode: 'Tab', name: 'Tab', structure: '<div class="key key-fun"></div>',
  },
  {
    position: 15, type: 'not-functional', keyCode: 'KeyQ', en: ['q', 'Q', 'Q', 'q'], ru: ['й', 'Й', 'Й', 'й'], structure: '<div class="key"></div>',
  },
  {
    position: 16, type: 'not-functional', keyCode: 'KeyW', en: ['w', 'W', 'W', 'w'], ru: ['ц', 'Ц', 'Ц', 'ц'], structure: '<div class="key"></div>',
  },
  {
    position: 17, type: 'not-functional', keyCode: 'KeyE', en: ['e', 'E', 'E', 'e'], ru: ['у', 'У', 'У', 'у'], structure: '<div class="key"></div>',
  },
  {
    position: 18, type: 'not-functional', keyCode: 'KeyR', en: ['r', 'R', 'R', 'r'], ru: ['к', 'К', 'К', 'к'], structure: '<div class="key"></div>',
  },
  {
    position: 19, type: 'not-functional', keyCode: 'KeyT', en: ['t', 'T', 'T', 't'], ru: ['е', 'Е', 'Е', 'е'], structure: '<div class="key"></div>',
  },
  {
    position: 20, type: 'not-functional', keyCode: 'KeyY', en: ['y', 'Y', 'Y', 'y'], ru: ['н', 'Н', 'Н', 'н'], structure: '<div class="key"></div>',
  },
  {
    position: 21, type: 'not-functional', keyCode: 'KeyU', en: ['u', 'U', 'U', 'u'], ru: ['г', 'Г', 'Г', 'г'], structure: '<div class="key"></div>',
  },
  {
    position: 22, type: 'not-functional', keyCode: 'KeyI', en: ['i', 'I', 'I', 'i'], ru: ['ш', 'Ш', 'Ш', 'ш'], structure: '<div class="key"></div>',
  },
  {
    position: 23, type: 'not-functional', keyCode: 'KeyO', en: ['o', 'O', 'O', 'o'], ru: ['щ', 'Щ', 'Щ', 'щ'], structure: '<div class="key"></div>',
  },
  {
    position: 24, type: 'not-functional', keyCode: 'KeyP', en: ['p', 'P', 'P', 'p'], ru: ['з', 'З', 'З', 'з'], structure: '<div class="key"></div>',
  },
  {
    position: 25, type: 'not-functional', keyCode: 'BracketLeft', en: ['[', '{', '[', '{'], ru: ['х', 'Х', 'Х', 'х'], structure: '<div class="key"></div>',
  },
  {
    position: 26, type: 'not-functional', keyCode: 'BracketRight', en: [']', '}', ']', '}'], ru: ['ъ', 'Ъ', 'Ъ', 'ъ'], structure: '<div class="key"></div>',
  },
  {
    position: 27, type: 'not-functional', keyCode: 'Backslash', en: ['\\', '|', '\\', '|'], ru: ['\\', '/', '\\', '/'], structure: '<div class="key"></div>',
  },
  {
    position: 28, type: 'functional', keyCode: 'Delete', name: 'Del', structure: '<div class="key key-fun"></div>',
  }],
  [{
    position: 29, type: 'functional', keyCode: 'CapsLock', name: 'Caps lock', structure: '<div class="key key-fun capslock"></div>',
  },
  {
    position: 30, type: 'not-functional', keyCode: 'KeyA', en: ['a', 'A', 'A', 'a'], ru: ['ф', 'Ф', 'Ф', 'ф'], structure: '<div class="key"></div>',
  },
  {
    position: 31, type: 'not-functional', keyCode: 'KeyS', en: ['s', 'S', 'S', 's'], ru: ['ы', 'Ы', 'Ы', 'ы'], structure: '<div class="key"></div>',
  },
  {
    position: 32, type: 'not-functional', keyCode: 'KeyD', en: ['d', 'D', 'D', 'd'], ru: ['в', 'В', 'В', 'в'], structure: '<div class="key"></div>',
  },
  {
    position: 33, type: 'not-functional', keyCode: 'KeyF', en: ['f', 'F', 'F', 'f'], ru: ['а', 'А', 'А', 'а'], structure: '<div class="key"></div>',
  },
  {
    position: 34, type: 'not-functional', keyCode: 'KeyG', en: ['g', 'G', 'G', 'g'], ru: ['п', 'П', 'П', 'п'], structure: '<div class="key"></div>',
  },
  {
    position: 35, type: 'not-functional', keyCode: 'KeyH', en: ['h', 'H', 'H', 'h'], ru: ['р', 'Р', 'Р', 'р'], structure: '<div class="key"></div>',
  },
  {
    position: 36, type: 'not-functional', keyCode: 'KeyJ', en: ['j', 'J', 'J', 'j'], ru: ['о', 'О', 'О', 'о'], structure: '<div class="key"></div>',
  },
  {
    position: 37, type: 'not-functional', keyCode: 'KeyK', en: ['k', 'K', 'K', 'k'], ru: ['л', 'Л', 'Л', 'л'], structure: '<div class="key"></div>',
  },
  {
    position: 38, type: 'not-functional', keyCode: 'KeyL', en: ['l', 'L', 'L', 'l'], ru: ['д', 'Д', 'Д', 'д'], structure: '<div class="key"></div>',
  },
  {
    position: 39, type: 'not-functional', keyCode: 'Semicolon', en: [';', ':', ';', ':'], ru: ['ж', 'Ж', 'Ж', 'ж'], structure: '<div class="key"></div>',
  },
  {
    position: 40, type: 'not-functional', keyCode: 'Quote', en: ['\'', '"', '\'', '"'], ru: ['э', 'Э', 'Э', 'э'], structure: '<div class="key"></div>',
  },
  {
    position: 41, type: 'functional', keyCode: 'Enter', name: 'Enter', structure: '<div class="key key-fun enter"></div>',
  }],
  [{
    position: 42, type: 'functional', keyCode: 'ShiftLeft', name: 'Shift', structure: '<div class="key key-fun shift-left"></div>',
  },
  {
    position: 43, type: 'not-functional', keyCode: 'KeyZ', en: ['z', 'Z', 'Z', 'z'], ru: ['я', 'Я', 'Я', 'я'], structure: '<div class="key"></div>',
  },
  {
    position: 44, type: 'not-functional', keyCode: 'KeyX', en: ['x', 'X', 'X', 'x'], ru: ['ч', 'Ч', 'Ч', 'ч'], structure: '<div class="key"></div>',
  },
  {
    position: 45, type: 'not-functional', keyCode: 'KeyC', en: ['c', 'C', 'C', 'c'], ru: ['с', 'С', 'С', 'с'], structure: '<div class="key"></div>',
  },
  {
    position: 46, type: 'not-functional', keyCode: 'KeyV', en: ['v', 'V', 'V', 'v'], ru: ['м', 'М', 'М', 'м'], structure: '<div class="key"></div>',
  },
  {
    position: 47, type: 'not-functional', keyCode: 'KeyB', en: ['b', 'B', 'B', 'b'], ru: ['и', 'И', 'И', 'и'], structure: '<div class="key"></div>',
  },
  {
    position: 48, type: 'not-functional', keyCode: 'KeyN', en: ['n', 'N', 'N', 'n'], ru: ['т', 'Т', 'Т', 'т'], structure: '<div class="key"></div>',
  },
  {
    position: 49, type: 'not-functional', keyCode: 'KeyM', en: ['m', 'M', 'M', 'm'], ru: ['ь', 'Ь', 'Ь', 'ь'], structure: '<div class="key"></div>',
  },
  {
    position: 50, type: 'not-functional', keyCode: 'Comma', en: [',', '<', ',', '<'], ru: ['б', 'Б', 'Б', 'б'], structure: '<div class="key"></div>',
  },
  {
    position: 51, type: 'not-functional', keyCode: 'Period', en: ['.', '>', '.', '>'], ru: ['ю', 'Ю', 'Ю', 'ю'], structure: '<div class="key"></div>',
  },
  {
    position: 52, type: 'not-functional', keyCode: 'Slash', en: ['/', '?', '/', '?'], ru: ['.', ',', '.', ','], structure: '<div class="key"></div>',
  },
  {
    position: 53, type: 'functional', keyCode: 'ArrowUp', name: '&#9650', structure: '<div class="key key-fun"></div>',
  },
  {
    position: 54, type: 'functional', keyCode: 'ShiftRight', name: 'Shift', structure: '<div class="key key-fun shift-right"></div>',
  }],
  [{
    position: 55, type: 'functional', keyCode: 'ControlLeft', name: 'Ctrl', structure: '<div class="key key-fun ctrl"></div>',
  },
  {
    position: 56, type: 'functional', keyCode: 'MetaLeft', name: 'Win', structure: '<div class="key key-fun"></div>',
  },
  {
    position: 57, type: 'functional', keyCode: 'AltLeft', name: 'Alt', structure: '<div class="key key-fun"></div>',
  },
  {
    position: 58, type: 'not-functional', keyCode: 'Space', en: [' ', ' ', ' ', ' '], ru: [' ', ' ', ' ', ' '], structure: '<div class="key space"></div>',
  },
  {
    position: 59, type: 'functional', keyCode: 'AltRight', name: 'Alt', structure: '<div class="key key-fun"></div>',
  },
  {
    position: 60, type: 'functional', keyCode: 'ControlRight', name: 'Ctrl', structure: '<div class="key key-fun ctrl"></div>',
  },
  {
    position: 61, type: 'functional', keyCode: 'ArrowLeft', name: '&#9668', structure: '<div class="key key-fun"></div>',
  },
  {
    position: 62, type: 'functional', keyCode: 'ArrowDown', name: '&#9660', structure: '<div class="key key-fun"></div>',
  },
  {
    position: 63, type: 'functional', keyCode: 'ArrowRight', name: '&#9658', structure: '<div class="key key-fun"></div>',
  }],
];

export default keys;
