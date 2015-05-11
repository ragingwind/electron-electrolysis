'use strict';
const app = require('app');
const BrowserWindow = require('browser-window');

// report crashes to the Electron project
require('crash-reporter').start();

// prevent window being GC'd
let mainWindow = null;

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', function () {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 600,
    resizable: false
  });

  // WARN: Inspect window should be opened before loading URL
  mainWindow.inspectElement(0, 0);

  mainWindow.loadUrl(`file://${__dirname}/index.html`);
  mainWindow.on('closed', function () {
    // deref the window
    // for multiple windows store them in an array
    mainWindow = null;
  });
});
