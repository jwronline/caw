const toggle = require('./toggle.js');

const socket = io.connect('http://localhost:3000');
socket.on('toggle', toggle);

/**
 * click a certain caution to toggle
 * @param  {event} e a click event with dataset.item
 */
function emitToggle(e) {
  if ('item' in e.target.dataset) {
    socket.emit('toggle', e.target.dataset.item);
  } else {
    throw new Error(`No dataset.item given on e.target (${e.target})`);
  }
}

module.exports = {
  emitToggle
};
