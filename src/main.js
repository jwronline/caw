require("./main.scss");

require('./dialog.js');
const socket = require('./socket.js');

const showInfo = require('./showInfo.js');
const setListeners = require('./setListeners.js');

if (document.body.dataset.role === "admin") {
  setListeners(socket.emitToggle);
} else {
  setListeners(showInfo);
}

