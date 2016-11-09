/**
 * Toggle a caution
 * @param  {string} caution A caution (that's onscreen)
 * @return {Promise}         resolves if that has been toggled
 */
export default function toggle(caution) {
  return new Promise((resolve, reject) => {
    const element = document.querySelector(`[data-item="${caution}"]`);
    if (element instanceof HTMLElement) {
      element.classList.toggle('safe');
      resolve(element.classList.safe);
    } else {
      reject(`Caution ${caution} wasn't found`);
    }
  })
}
