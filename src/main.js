import './main.scss';

import './dialog.js';
import socket from './socket.js';
import showInfo from './showInfo.js';
import setListeners from './setListeners.js';

if (document.body.dataset.role === 'admin') {
  setListeners(socket.emitToggle);
} else {
  setListeners(showInfo);
}

