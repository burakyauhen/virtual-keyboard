const keys = [
  [{
    eng: '`', rus: 'ё', engSup: '~', rusSup: 'Ё', structure: '<div class="key"></div>',
  },
  {
    eng: '1', rus: '1', engSup: '!', rusSup: '!', structure: '<div class="key"></div>',
  },
  {
    eng: '2', rus: '2', engSup: '@', rusSup: '"', structure: '<div class="key"></div>',
  },
  {
    eng: '3', rus: '3', engSup: '#', rusSup: '№', structure: '<div class="key"></div>',
  },
  {
    eng: '4', rus: '4', engSup: '$', rusSup: ';', structure: '<div class="key"></div>',
  },
  {
    eng: '5', rus: '5', engSup: '%', rusSup: '%', structure: '<div class="key"></div>',
  },
  {
    eng: '6', rus: '6', engSup: '^', rusSup: ':', structure: '<div class="key"></div>',
  },
  {
    eng: '7', rus: '7', engSup: '&', rusSup: '?', structure: '<div class="key"></div>',
  },
  {
    eng: '8', rus: '8', engSup: '*', rusSup: '*', structure: '<div class="key"></div>',
  },
  {
    eng: '9', rus: '9', engSup: '(', rusSup: '(', structure: '<div class="key"></div>',
  },
  {
    eng: '0', rus: '0', engSup: ')', rusSup: ')', structure: '<div class="key"></div>',
  },
  {
    eng: '-', rus: '-', engSup: '_', rusSup: '_', structure: '<div class="key"></div>',
  },
  {
    eng: '=', rus: '=', engSup: '+', rusSup: '+', structure: '<div class="key"></div>',
  },
  {
    eng: 'Backspace', rus: 'Backspace', structure: '<div class="key"></div>',
  }],
  [{
    eng: 'Tab', rus: 'Tab', structure: '<div class="key"></div>',
  },
  {
    eng: 'Q', rus: 'Й', structure: '<div class="key"></div>',
  },
  {
    eng: 'W', rus: 'Ц', structure: '<div class="key"></div>',
  },
  {
    eng: 'E', rus: 'У', structure: '<div class="key"></div>',
  },
  {
    eng: 'R', rus: 'К', structure: '<div class="key"></div>',
  },
  {
    eng: 'T', rus: 'Е', structure: '<div class="key"></div>',
  },
  {
    eng: 'Y', rus: 'Н', structure: '<div class="key"></div>',
  },
  {
    eng: 'U', rus: 'Г', structure: '<div class="key"></div>',
  },
  {
    eng: 'I', rus: 'Ш', structure: '<div class="key"></div>',
  },
  {
    eng: 'O', rus: 'Щ', structure: '<div class="key"></div>',
  },
  {
    eng: 'P', rus: 'З', structure: '<div class="key"></div>',
  },
  {
    eng: '[', rus: 'Х', structure: '<div class="key"></div>',
  },
  {
    eng: ']', rus: 'Ъ', structure: '<div class="key"></div>',
  },
  {
    eng: '\\', rus: '\\', engSup: '|', rusSup: '/', structure: '<div class="key"></div>',
  }],
  [{
    eng: 'Caps Lock', rus: 'Caps Lock', structure: '<div class="key key-fun capslock"></div>',
  },
  {
    eng: 'A', rus: 'Ф', structure: '<div class="key"></div>',
  },
  {
    eng: 'S', rus: 'Ы', structure: '<div class="key"></div>',
  },
  {
    eng: 'D', rus: 'В', structure: '<div class="key"></div>',
  },
  {
    eng: 'F', rus: 'А', structure: '<div class="key"></div>',
  },
  {
    eng: 'G', rus: 'П', structure: '<div class="key"></div>',
  },
  {
    eng: 'H', rus: 'Р', structure: '<div class="key"></div>',
  },
  {
    eng: 'J', rus: 'О', structure: '<div class="key"></div>',
  },
  {
    eng: 'K', rus: 'Л', structure: '<div class="key"></div>',
  },
  {
    eng: 'L', rus: 'Д', structure: '<div class="key"></div>',
  },
  {
    eng: ';', rus: 'Ж', structure: '<div class="key"></div>',
  },
  {
    eng: '\'', rus: 'Э', structure: '<div class="key"></div>',
  },
  {
    eng: 'ENTER', rus: 'ENTER', structure: '<div class="key key-fun enter"></div>',
  }],
  [{
    eng: 'Shift', rus: 'Shift', structure: '<div class="key key-fun shift-left"></div>',
  },
  {
    eng: 'Z', rus: 'Я', structure: '<div class="key"></div>',
  },
  {
    eng: 'X', rus: 'Ч', structure: '<div class="key"></div>',
  },
  {
    eng: 'C', rus: 'С', structure: '<div class="key"></div>',
  },
  {
    eng: 'V', rus: 'М', structure: '<div class="key"></div>',
  },
  {
    eng: 'B', rus: 'И', structure: '<div class="key"></div>',
  },
  {
    eng: 'N', rus: 'Т', structure: '<div class="key"></div>',
  },
  {
    eng: 'M', rus: 'Ь', structure: '<div class="key"></div>',
  },
  {
    eng: '.', rus: 'Б', structure: '<div class="key"></div>',
  },
  {
    eng: ',', rus: 'Ю', structure: '<div class="key"></div>',
  },
  {
    eng: '/', rus: '.', structure: '<div class="key"></div>',
  },
  {
    eng: '&#9650', rus: '&#9650', structure: '<div class="key"></div>',
  },
  {
    eng: 'Shift', rus: 'Shift', structure: '<div class="key key-fun shift-right"></div>',
  }],
  [{
    eng: 'Ctrl', rus: 'Ctrl', structure: '<div class="key key-fun ctrl"></div>',
  },
  {
    eng: 'Win', rus: 'Win', structure: '<div class="key key-fun"></div>',
  },
  {
    eng: 'Alt', rus: 'Alt', structure: '<div class="key key-fun"></div>',
  },
  {
    eng: '', rus: '', structure: '<div class="key space"></div>',
  },
  {
    eng: 'Alt', rus: 'Alt', structure: '<div class="key key-fun"></div>',
  },
  {
    eng: 'Ctrl', rus: 'Ctrl', structure: '<div class="key key-fun ctrl"></div>',
  },
  {
    eng: '&#9668', rus: '&#9668', structure: '<div class="key key-fun"></div>',
  },
  {
    eng: '&#9660', rus: '&#9660', structure: '<div class="key key-fun"></div>',
  },
  {
    eng: '&#9658', rus: '&#9658', structure: '<div class="key key-fun"></div>',
  }],
];
