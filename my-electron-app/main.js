const { app, BrowserWindow, ipcMain, nativeTheme, dialog, Menu } = require('electron')
const path = require('path')
let progressInterval

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  win.webContents.on('select-bluetooth-device', (event, deviceList, callback) => {
    event.preventDefault()
    if (deviceList && deviceList.length > 0) {
      callback(deviceList[0].deviceId)
    } 
  })
  
  const menu=Menu.buildFromTemplate([
    { 
      label:app.name,
      submenu:[
        {
          click:()=>win.webContents.send('update-counter',1),
          label:'Increment'
        },{
          click:()=>win.webContents.send('update-counter',-1),
          label:'Decrement'
        }
      ]
    }
  ])
  Menu.setApplicationMenu(menu)


  win.loadFile('index.html')

  ipcMain.handle('dark-mode:toggle', () => {
    if (nativeTheme.shouldUseDarkColors) {
      nativeTheme.themeSource = 'light'
    } else {
      nativeTheme.themeSource = 'dark'
    }
    return nativeTheme.shouldUseDarkColors
  })
}
//设置title
function handleSetTitle(event,title){
  const webContens=event.sender
  const win=BrowserWindow.fromWebContents(webContens)
  win.setTitle(title)
}
//打开文件
async function handleFileOpen(){
  const {canceled,filePaths} =await dialog.showOpenDialog()
  if(canceled){
    return 
  }else{
    return filePaths[0]
  }
}

app.whenReady().then(() => {
  // 当渲染器进程通过 dialog:openFile 通道发送 ipcRender.invoke 消息时
  ipcMain.handle('dialog:openFile',handleFileOpen)
  ipcMain.on('set-title',handleSetTitle)
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})