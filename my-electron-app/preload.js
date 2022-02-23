/*
 * @Author: your name
 * @Date: 2021-08-16 10:04:56
 * @LastEditTime: 2021-08-18 10:09:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-electron-app\perload.js
 */
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
