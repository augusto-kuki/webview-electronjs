const { app, BrowserWindow, globalShortcut } = require('electron');

let win;
function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    // titleBarStyle: 'hidden',
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadURL('https://localhost:3333/');
}

function createShortCuts() {
  globalShortcut.register('CmdOrCtrl+J', toggleDevTools);
}

function toggleDevTools() {
  win.webContents.toggleDevTools();
}

app.whenReady().then(createWindow).then(createShortCuts);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
