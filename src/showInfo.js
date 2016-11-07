const solutions = require('./solutions.json');

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

module.exports = showInfo;
