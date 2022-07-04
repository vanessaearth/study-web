// 和视图有关系的

import Game from './game/game.js'

/*
鲁班 亚瑟 技能 皮肤 玩家 游戏管理
对象--》抽象---》类---》抽象基类---》组织逻辑关系。。。（模块化）
game{
  login(username){
    payer
  }
}
player{
  name:'zs',
  heroes:[
    luban:{
      name:'鲁班'
      skills:[],
      skins:[]，
      icon:''
    },
    yase:{
      name:'亚瑟'
      skills:[],
      skins:[],
      icon:''
    },
  ]
}
 */
const username = document.querySelector('#username')
const login = document.querySelector('#login')
const showBox = document.querySelector('#show-box')
const loginBox = document.querySelector('#login-box')
const skillBox = document.querySelector('#skill-box')
const skinBox = document.querySelector('#skin-box')

login.onclick = function () {
  console.log('click')
  loginBox.style.display = 'none'
  showBox.style.display = 'block'
  const game = new Game()
  game.login(username.value)
  console.log(game)
  renderHero(game.player.heroes)
}
function renderHero (heroes) {
  showBox.innerHTML = ''
  heroes.forEach(v => {
    const itemDiv = document.createElement('div')
    itemDiv.classList.add('hero-one')
    itemDiv.innerHTML = `
    <img src="${v.icon}"/>
    ${v.name}
    `
    itemDiv.onclick = function () {
      renderSkill(v.skills)
      renderSkin(v.skins)
    }
    showBox.appendChild(itemDiv)
  })
}
function renderSkill (skills) {
  skillBox.innerHTML = ''
  skills.forEach(v => {
    const img = document.createElement('img')
    img.src = v.icon
    skillBox.appendChild(img)
  })
}
function renderSkin (skins) {
  skinBox.innerHTML = ''
  skins.forEach(v => {
    const itemDiv = document.createElement('div')
    itemDiv.innerHTML = `头像：
    <img src="${v.icon}"/>皮肤：
    <img src="${v.img}"/>
    `
    skinBox.appendChild(itemDiv)
  })
}
