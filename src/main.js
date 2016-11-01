require("./main.scss");
const dialogPolyfill = require('dialog-polyfill');

var dialog = document.querySelector('dialog');
dialogPolyfill.registerDialog(dialog);

const solutions = require('./solutions.json');

if (document.body.dataset.role === "admin") {
  setListeners(clickToggle);
} else {
  setListeners(showInfo);
}

/**
 * Set listeners to all [data-item]s (all cautions)
 * @param {function} fun the function to toggle when it's clicked
 */
function setListeners(fun) {
  const items = document.querySelectorAll('[data-item]');
  for (var i = items.length - 1; i >= 0; i--) {
    items[i].addEventListener('click', fun);
  }
}

/**
 * Show info about a caution
 * @param  {event} e a click event
 */
function showInfo(e) {
  let content = 'no data found';
  if (e.target.dataset.item in solutions) {
    content = solutions[e.target.dataset.item];
  }
  info.innerHTML = content;
  modal.showModal();
}

/**
 * click a certain caution to toggle
 * @param  {event} e a click event
 * @return {Promise}   resolves when it has been toggled
 */
function clickToggle(e) {
  return toggle(e.target.dataset.item);
}

/**
 * Toggle a caution
 * @param  {string} caution A caution (that's onscreen)
 * @return {Promise}         resolves if that has been toggled
 */
function toggle(caution) {
  return new Promise((resolve, reject) => {
    const element = document.querySelector(`[data-item="${caution}"]`);
    element.classList.toggle('safe');
    resolve(element.classList.safe);
  })
}

window.toggle = toggle;
