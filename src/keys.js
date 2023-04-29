const keys = [
  [{
    keyCode: 'Backquote', en: '`', enS: '~', enC: '`', ru: 'ё', ruS: 'Ё', ruC: 'Ё', structure: '<div class="key key-fun"></div>',
  },
  {
    keyCode: 'Digit1', en: '1', enS: '!', enC: '`', ru: '1', ruS: '!', ruC: '1', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'Digit2', en: '2', enS: '@', enC: '2', ru: '2', ruS: '"', ruC: '2', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'Digit3', en: '3', enS: '#', enC: '3', ru: '3', ruS: '№', ruC: '3', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'Digit4', en: '4', enS: '$', enC: '4', ru: '4', ruS: ';', ruC: '4', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'Digit5', en: '5', enS: '%', enC: '5', ru: '%', ruS: '5', ruC: '5', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'Digit6', en: '6', enS: '^', enC: '`', ru: '6', ruS: ':', ruC: '6', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'Digit7', en: '7', enS: '&', enC: '7', ru: '7', ruS: '?', ruC: '7', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'Digit8', en: '8', enS: '*', enC: '8', ru: '8', ruS: '*', ruC: '8', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'Digit9', en: '9', enS: '(', enC: '9', ru: '9', ruS: '(', ruC: '9', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'Digit0', en: '0', enS: ')', enC: '0', ru: '0', ruS: ')', ruC: '0', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'Minus', en: '-', enS: '_', enC: '-', ru: '-', ruS: '_', ruC: '-', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'Equal', en: '=', enS: '+', enC: '=', ru: '=', ruS: '+', ruC: '=', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'Backspace', en: 'Backspace', enS: 'Backspace', enC: 'Backspace', ru: 'Backspace', ruS: 'Backspace', ruC: 'Backspace', structure: '<div class="key key-fun backspace"></div>',
  }],
  [{
    keyCode: 'Tab', en: 'Tab', enS: 'Tab', enC: '`', ru: 'Tab', ruS: 'Tab', ruC: 'Tab', structure: '<div class="key key-fun"></div>',
  },
  {
    keyCode: 'KeyQ', en: 'q', enS: 'Q', enC: 'Q', ru: 'й', ruS: 'Й', ruC: 'Й', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'KeyW', en: 'w', enS: 'W', enC: 'W', ru: 'ц', ruS: 'Ц', ruC: 'Ц', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'KeyE', en: 'e', enS: 'E', enC: 'E', ru: 'у', ruS: 'У', ruC: 'У', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'KeyR', en: 'r', enS: 'R', enC: 'R', ru: 'к', ruS: 'К', ruC: 'К', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'KeyT', en: 't', enS: 'T', enC: 'T', ru: 'е', ruS: 'Е', ruC: 'Е', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'KeyY', en: 'y', enS: 'Y', enC: 'Y', ru: 'н', ruS: 'Н', ruC: 'Н', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'KeyU', en: 'u', enS: 'U', enC: 'U', ru: 'г', ruS: 'Г', ruC: 'Г', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'KeyI', en: 'i', enS: 'I', enC: 'I', ru: 'ш', ruS: 'Ш', ruC: 'Ш', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'KeyO', en: 'o', enS: 'O', enC: 'O', ru: 'щ', ruS: 'Щ', ruC: 'Щ', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'KeyP', en: 'p', enS: 'P', enC: 'P', ru: 'з', ruS: 'З', ruC: 'З', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'BracketLeft', en: '[', enS: '{', enC: '[', ru: 'х', ruS: 'Х', ruC: 'Х', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'BracketRight', en: ']', enS: '}', enC: ']', ru: 'ъ', ruS: 'Ъ', ruC: 'Ъ', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'Backslash', en: '\\', enS: '|', enC: '\\', ru: '\\', ruS: '/', ruC: '\\', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'Delete', en: 'Del', enS: 'Del', enC: 'Del', ru: 'Del', ruS: 'Del', ruC: 'Del', structure: '<div class="key key-fun"></div>',
  }],
  [{
    keyCode: 'CapsLock', en: 'Caps lock', enS: 'Caps lock', enC: 'Caps lock', ru: 'Caps lock', ruS: 'Caps lock', ruC: 'Caps lock', structure: '<div class="key key-fun capslock"></div>',
  },
  {
    keyCode: 'KeyA', en: 'a', enS: 'A', enC: 'A', ru: 'ф', ruS: 'Ф', ruC: 'Ф', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'KeyS', en: 's', enS: 'S', enC: 'S', ru: 'ы', ruS: 'Ы', ruC: 'Ы', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'KeyD', en: 'd', enS: 'D', enC: 'D', ru: 'в', ruS: 'В', ruC: 'В', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'KeyF', en: 'f', enS: 'F', enC: 'F', ru: 'а', ruS: 'А', ruC: 'А', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'KeyG', en: 'g', enS: 'G', enC: 'G', ru: 'п', ruS: 'П', ruC: 'П', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'KeyH', en: 'h', enS: 'H', enC: 'H', ru: 'р', ruS: 'Р', ruC: 'Р', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'KeyJ', en: 'j', enS: 'J', enC: 'J', ru: 'о', ruS: 'О', ruC: 'О', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'KeyK', en: 'k', enS: 'K', enC: 'K', ru: 'л', ruS: 'Л', ruC: 'Л', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'KeyL', en: 'l', enS: 'L', enC: 'L', ru: 'д', ruS: 'Д', ruC: 'Д', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'Semicolon', en: ';', enS: ':', enC: ';', ru: 'ж', ruS: 'Ж', ruC: 'Ж', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'Quote', en: '\'', enS: '"', enC: '\'', ru: 'э', ruS: 'Э', ruC: 'Э', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'Enter', en: 'Enter', enS: 'Enter', enC: 'Enter', ru: 'Enter', ruS: 'Enter', ruC: 'Enter', structure: '<div class="key key-fun enter"></div>',
  }],
  [{
    keyCode: 'ShiftLeft', en: 'Shift', enS: 'Shift', enC: 'Shift', ru: 'Shift', ruS: 'Shift', ruC: 'Shift', structure: '<div class="key key-fun shift-left"></div>',
  },
  {
    keyCode: 'KeyZ', en: 'z', enS: 'Z', enC: 'Z', ru: 'я', ruS: 'Я', ruC: 'Я', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'KeyX', en: 'x', enS: 'X', enC: 'X', ru: 'ч', ruS: 'Ч', ruC: 'Ч', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'KeyC', en: 'c', enS: 'C', enC: 'C', ru: 'с', ruS: 'С', ruC: 'С', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'KeyV', en: 'v', enS: 'V', enC: 'V', ru: 'м', ruS: 'М', ruC: 'М', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'KeyB', en: 'b', enS: 'B', enC: 'B', ru: 'и', ruS: 'И', ruC: 'И', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'KeyN', en: 'n', enS: 'N', enC: 'N', ru: 'т', ruS: 'Т', ruC: 'Т', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'KeyM', en: 'm', enS: 'M', enC: 'M', ru: 'ь', ruS: 'Ь', ruC: 'Ь', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'Comma', en: ',', enS: '<', enC: ',', ru: 'б', ruS: 'Б', ruC: 'Б', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'Period', en: '.', enS: '>', enC: '.', ru: 'ю', ruS: 'Ю', ruC: 'Ю', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'Slash', en: '/', enS: '?', enC: '/', ru: '.', ruS: ',', ruC: '.', structure: '<div class="key"></div>',
  },
  {
    keyCode: 'ArrowUp', en: '&#9650', enS: '&#9650', enC: '&#9650', ru: '&#9650', ruS: '&#9650', ruC: '&#9650', structure: '<div class="key key-fun"></div>',
  },
  {
    keyCode: 'ShiftRight', en: 'Shift', enS: 'Shift', enC: 'Shift', ru: 'Shift', ruS: 'Shift', ruC: 'Shift', structure: '<div class="key key-fun shift-right"></div>',
  }],
  [{
    keyCode: 'ControlLeft', en: 'Ctrl', enS: 'Ctrl', enC: 'Ctrl', ru: 'Ctrl', ruS: 'Ctrl', ruC: 'Ctrl', structure: '<div class="key key-fun ctrl"></div>',
  },
  {
    keyCode: 'MetaLeft', en: 'Win', enS: 'Win', enC: 'Win', ru: 'Win', ruS: 'Win', ruC: 'Win', structure: '<div class="key key-fun"></div>',
  },
  {
    keyCode: 'AltLeft', en: 'Alt', enS: 'Alt', enC: 'Alt', ru: 'Alt', ruS: 'Alt', ruC: 'Alt', structure: '<div class="key key-fun"></div>',
  },
  {
    keyCode: 'Space', en: '', enS: '', enC: '', ru: '', ruS: '', ruC: '', structure: '<div class="key space"></div>',
  },
  {
    keyCode: 'AltRight', en: 'Alt', enS: 'Alt', enC: 'Alt', ru: 'Alt', ruS: 'Alt', ruC: 'Alt', structure: '<div class="key key-fun"></div>',
  },
  {
    keyCode: 'ControlRight', en: 'Ctrl', enS: 'Ctrl', enC: 'Ctrl', ru: 'Ctrl', ruS: 'Ctrl', ruC: 'Ctrl', structure: '<div class="key key-fun ctrl"></div>',
  },
  {
    keyCode: 'ArrowLeft', en: '&#9668', enS: '&#9668', enC: '&#9668', ru: '&#9668', ruS: '&#9668', ruC: '&#9668', structure: '<div class="key key-fun"></div>',
  },
  {
    keyCode: 'ArrowDown', en: '&#9660', enS: '&#9660', enC: '&#9660', ru: '&#9660', ruS: '&#9660', ruC: '&#9660', structure: '<div class="key key-fun"></div>',
  },
  {
    keyCode: 'ArrowRight', en: '&#9658', enS: '&#9658', enC: '&#9658', ru: '&#9658', ruS: '&#9658', ruC: '&#9658', structure: '<div class="key key-fun"></div>',
  }],
];
