import io from 'socket.io-client';
import toggle from './toggle.js';

const socket = io.connect('http://localhost:3000');
socket.on('toggle', caution => {
  toggle(caution)
    .catch(console.warn);
});

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

export default {
  emitToggle
};
