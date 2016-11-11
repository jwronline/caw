import {el as dialog, content as info} from './dialog';
import solutions from './solutions';

/**
 * Show info about a caution
 * @param  {event} e a click event
 */
export default function showInfo(e) {
  let message = 'no data found';
  if (e.target.dataset.item in solutions) {
    message = solutions[e.target.dataset.item];
  }
  info.innerHTML = message;
  dialog.showModal();
}
