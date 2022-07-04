
// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
  
    for (const dependency of ['chrome', 'node', 'electron']) {
      replaceText(`${dependency}-version`, process.versions[dependency])
    }
  })
//   window.myAPI = {
//     desktop: true
//   }
//   console.log('1',window.myAPI)

//   const { contextBridge } = require('electron')

// contextBridge.exposeInMainWorld('myAPI', {
//   desktop: true
// })
// console.log('2',window.myAPI)
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('darkMode', {
  toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
  system: () => ipcRenderer.invoke('dark-mode:system')
})
contextBridge.exposeInMainWorld('electorAPI',{
  setTitle:(title)=>ipcRenderer.send('set-title',title),
  openFile: ()=>ipcRenderer.invoke('dialog:openFile'),
  onUpdateCounter:(cb)=>ipcRenderer.on('update-counter',cb)
})

