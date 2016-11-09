import '../scss/main.scss';

import './dialog';
import socket from './socket';
import showInfo from './show-info';
import setListeners from './set-listeners';

if (document.body.dataset.role === 'admin') {
  setListeners(socket.emitToggle);
} else {
  setListeners(showInfo);
}
