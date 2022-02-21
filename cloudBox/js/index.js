
/*
 * @Autor: yangjin
 * @Date: 2021-10-21 09:20:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-05 10:07:36
 * @Description:
 */
{
  /**
   * @description: 获取自己
   * @param {*} id
   * @return 当前项
   */
  function getSelf (id) {
    return data.filter(item => id === item.id)[0]
  }
  /**
   * @description: 获取子级
   * @param {*} pid
   * @return 所有子级
   */
  function getChild (pid) {
    return data.filter(item => pid === item.pid)
  }
  /**
   * @description: 获取父级
   * @param {*} id
   * @return 当前项的父级
   */
  function getParent (id) {
    const self = getSelf(id)
    return getSelf(self.pid)
  }
  /**
 * @description: 获取所有父级
 * @param {*} pid
 * @return 获取所有父级
 */
  function getAllParent (id) {
    let parent = getParent(id)
    const allParent = []
    while (parent) {
      allParent.unshift(parent)
      parent = getParent(parent.id)
    }
    return allParent
  }

  /* 视图渲染 */
  const treeMenu = document.querySelector('#tree-menu')
  const breadNav = document.querySelector('.bread-nav')
  const folders = document.querySelector('#folders')
  // 左侧树渲染
  function renderTreeMenu (pid, level) {
    const child = getChild(pid)
    console.log(level)
    let inner = ''
    // 注意使用map方法有返回值
    inner += `<ul>
    ${child.map(item => {
      const itemChild = getChild(item.id)
      const nowAllParent = getAllParent(nowId)
      nowAllParent.push(getSelf(nowId))

      return `<li class="${nowAllParent.includes(item) ? 'open' : ''}">
        <p style="padding-left:${20 + level * 20}px" 
          data-id="${item.id}"
          class="${itemChild.length > 0 ? 'has-child' : ''} ${item.id === nowId ? 'active' : ''}">
          <span>${item.title}</span>
         </p>
      ${itemChild.length > 0 ? renderTreeMenu(item.id, level + 1) : ''}
      </li>`
    }).join('')}
    </ul>`
    return inner
  }
  // 路径导航渲染
  function renderBreadNav () {
    const nowSelf = getSelf(nowId)
    const allParent = getAllParent(nowId)
    let inner = ''
    allParent.forEach(item => {
      inner += `<a data-id="${item.id}">${item.title}</a>---`
    })
    inner += `<span>${nowSelf.title}</span>`
    return inner
  }
  // 文件夹视图渲染
  function renderFolders () {
    const child = getChild(nowId)
    let inner = ''
    child.forEach(item => {
      inner += `
      <li class="folder-item"  data-id="${item.id}">
      <img class="floder-img src="img/folder-b.png alt=""/>
        <span class="folder-name">${item.title}</span>
        <input type="text" class="editor" value=""/>
        <label class="checked">
          <input type="checkbox" />
          <span class="iconfont" ></span>
        </label>
      </li>
      `
    })
    //
    return inner
  }
  function render () {
    treeMenu.innerHTML = renderTreeMenu(topPid, topId)
    breadNav.innerHTML = renderBreadNav()
    folders.innerHTML = renderFolders()
  }
  const topId = 0 // 顶层ID
  const topPid = -1// 顶层ID
  let nowId = 1 // 当前选中的项
  render()
  // 三大视图的事件添加
  // 菜单树点击操作
  treeMenu.addEventListener('click', function (e) {
    const item = e.target.tagName === 'SPAN' ? e.target.parentNode : e.target
    console.log(e.target, item)
    if (item.tagName === 'P') {
      console.log(item.dataset.id)
      nowId = +item.dataset.id
      render()
    }
  })
  // 路径导航操作
  breadNav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      nowId = +e.target.dataset.id
      render()
    }
  })
  // 文件夹操作
  folders.addEventListener('click', function (e) {
    console.log(e.target)
    let item = null
    if (e.target.tagName === 'LI') {
      item = e.target
    }
    if (e.target.tagName === 'IMG') {
      item = e.target.parentNode
    }
    if (item) {
      nowId = +item.dataset.id
      render()
    }
  })
  // 新建文件夹
  const creatBtn = document.querySelector('.create-btn')
  creatBtn.addEventListener('click', function () {
    data.push({
      id: Date.now(),
      pid: nowId,
      title: getName()
    })
    render()
    // alertSuccess('添加成功')
    alertWarning('添加失败')
  })
  // 生成文件夹名字
  function getName () {
    const child = getChild(nowId)
    let names = child.map(item => item.title)
    names = names.filter(item => {
      if (item === '新建文件夹') {
        return true
      }
      if (item.substring(0, 6) === '新建文件夹(' &&
        Number(item.substring(6, item.length - 1)) >= 2 &&
        item.substring(item.length - 1) === ')') {
        return true
      }
      return false
    })
    // 排序
    names.sort((n1, n2) => {
      n1 = n1.substring(6, n1.length - 1)
      n2 = n2.substring(6, n2.length - 1)
      n1 = isNaN(n1) ? 0 : n1
      n2 = isNaN(n2) ? 0 : n2
      return n1 - n2
    })
    console.log('names', names)

    // 补位问题
    if (names[0] !== '新建文件夹') {
      return '新建文件夹'
    }
    for (let i = 1; i < names.length; i++) {
      if (Number(names[i].substring(6, names[i].length - 1)) !== i + 1) {
        return `新建文件夹(${i + 1})`
      }
    }
    return `新建文件夹(${names.length + 1})`
  }
  // 成功弹框
  function alertSuccess (info) {
    const succ = document.querySelector('.alert-success')
    clearTimeout(succ.timer)
    succ.innerHTML = info
    succ.classList.add('alert-show')
    succ.timer = setTimeout(() => {
      succ.classList.remove('alert-show')
    }, 1000)
  }
  // 警告弹框
  function alertWarning (info) {
    const succ = document.querySelector('.alert-warning')
    clearTimeout(succ.timer)
    succ.innerHTML = info
    succ.classList.add('alert-show')
    succ.timer = setTimeout(() => {
      succ.classList.remove('alert-show')
    }, 1000)
  }
}
