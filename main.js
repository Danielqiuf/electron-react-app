import { app, BrowserWindow } from 'electron'

let mainWindow

const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        fullscreenable: false,
        maximizable: false,
        backgroundColor: '#1e1e1e'
    })
    mainWindow.webContents.openDevTools()
    mainWindow.loadURL('http://localhost:3000/')
    mainWindow.on('closed', () => {
        mainWindow = null
    })
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
    app.quit()
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
})