/**
 * Toggle a caution
 * @param  {string} caution A caution (that's onscreen)
 * @return {Promise}         resolves if that has been toggled
 */
function toggle(caution) {
  return new Promise((resolve, reject) => {
    const element = document.querySelector(`[data-item="${caution}"]`);
    // todo: reject if empty
    element.classList.toggle('safe');
    resolve(element.classList.safe);
  })
}

module.exports = toggle;
