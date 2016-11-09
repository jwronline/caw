import '../scss/main.scss';

import './dialog.js';
import socket from './socket.js';
import showInfo from './show-info.js';
import setListeners from './set-listeners.js';

if (document.body.dataset.role === 'admin') {
  setListeners(socket.emitToggle);
} else {
  setListeners(showInfo);
}
