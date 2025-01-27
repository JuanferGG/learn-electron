

// console.log('preload.js loaded');

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  navigate: (view) => ipcRenderer.send('navigate', view),
});