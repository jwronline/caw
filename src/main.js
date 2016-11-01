require("./main.scss");
const dialogPolyfill = require('dialog-polyfill');

var dialog = document.querySelector('dialog');
dialogPolyfill.registerDialog(dialog);

const data = {
  'HYD PRESS': 'bla bla text'
}

const items = document.querySelectorAll('[data-item]');

for (var i = items.length - 1; i >= 0; i--) {
  items[i].addEventListener('click', showInfo);
}

function showInfo(e) {
  let content = 'no data found';
  if (e.target.dataset.item in data) {
    content = data[e.target.dataset.item];
  }
  info.innerHTML = content;
  modal.showModal();
}
