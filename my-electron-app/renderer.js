
const NOTIFICATION_TITLE = 'Title'
const NOTIFICATION_BODY = 'Notification from the Renderer process渲染进程. Click to log to console.'
const CLICK_MESSAGE = 'Notification clicked'

new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY }).onclick = () => console.log(CLICK_MESSAGE)
//主题切换
document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
  const isDarkMode = await window.darkMode.toggle()
  document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light'
})

document.getElementById('reset-to-system').addEventListener('click', async () => {
  await window.darkMode.system()
  document.getElementById('theme-source').innerHTML = 'System'
})
//蓝牙
async function testIt() {
  const device = await navigator.bluetooth.requestDevice({
    acceptAllDevices: true
  })
  console.log('device',device)
  document.getElementById('device-name').innerHTML = device.name || `ID: ${device.id}`
}

document.getElementById('clickme').addEventListener('click',testIt)