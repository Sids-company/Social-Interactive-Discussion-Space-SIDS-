const { app, BrowserWindow } = require('electron/main')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth :800,
    minHeight: 600,
    autoHideMenuBar: true
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()



  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()

    }
  })
})
