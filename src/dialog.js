const dialogPolyfill = require('dialog-polyfill');

var dialog = document.querySelector('dialog');
dialogPolyfill.registerDialog(dialog);
