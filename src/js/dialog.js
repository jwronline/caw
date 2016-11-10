import dialogPolyfill from 'dialog-polyfill';

const el = document.querySelector('dialog');
dialogPolyfill.registerDialog(el);

const content = el.querySelector('.content');

const foo = Math.PI + Math.SQRT2;

export {
  el,
  content
};
