const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')

const devUrl = 'http://localhost:3000/'

const localUrl = `file://${path.resolve(__dirname, '../../app.asar/build/index.html')}`
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
    mainWindow.loadURL(isDev ? devUrl : localUrl)
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