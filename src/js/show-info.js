import solutions from './solutions';

/**
 * Show info about a caution
 * @param  {event} e a click event
 */
export default function showInfo(e) {
  const info = document.getElementById('info');
  const modal = document.getElementById('modal');
  let content = 'no data found';
  if (e.target.dataset.item in solutions) {
    content = solutions[e.target.dataset.item];
  }
  info.innerHTML = content;
  modal.showModal();
}
