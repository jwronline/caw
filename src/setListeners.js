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

module.exports = setListeners;
