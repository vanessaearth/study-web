// function $(str){
//   return {
//     click(cb){
//       document.querySelector(str).onclick=cb
//     }
//   }
// }
class Jq {
  constructor(arg) {
    if (typeof arg === 'string') {
      //选中多个元素，如div,.box
      // this.el = document.querySelector(arg)
      let el = document.querySelectorAll(arg)
      this._addEles(el)
    } else if (typeof arg === 'function') {
      //传入函数
      document.addEventListener('DOMContentLoaded', arg)
    } else {
      //传入的是对象, 如document.querySelect()
      if (arg.length !== undefined) {
        this._addEles(arg)
      } else {
        this[0] = arg
        this.length = 1
      }
    }
  }
  _addEles(el) {
    for (let i = 0; i < el.length; i++) {
      this[i] = el[i]
    }
    this.length = el.length
  }
  click(cb) {
    for (let i = 0; i < this.length; i++) {
      this[i].addEventListener('click', cb)
    }
  }

  //多元素多事件处理
  on(eventName, cb) {
    let eventArr = eventName.split(' ')
    console.log(eventArr)
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < eventArr.length; j++) {
        this[i].addEventListener(eventArr[j], cb)
      }
    }
    return this
  }
  eq(index) {
    // return this[index]
    return new Jq(this[index])
  }
  get(index) {
    return this[index]
  }
  css(...args){
    console.log('args',args)
    if(args.length===1){
      if(typeof args[0]==='string'){
        // 获取属性
        console.log('string')
        
      }else{
        // 以对象方式设置属性
        console.log('obj')

      }
    }else{
      //设置单一属性
      console.log('2')

    }
  }
}
function $(arg) {
  return new Jq(arg)
}