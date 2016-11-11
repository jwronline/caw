import dialogPolyfill from 'dialog-polyfill';

const el = document.querySelector('dialog');
dialogPolyfill.registerDialog(el);

const content = el.querySelector('.content');

export {
  el,
  content
};
