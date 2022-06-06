// function $(str){
//   return {
//     click(cb){
//       document.querySelector(str).onclick=cb
//     }
//   }
// }
class Jq {
  constructor(arg) {
    //选中多个元素
    if (typeof arg === 'string') {
      // this.el = document.querySelector(arg)
      let el = document.querySelectorAll(arg)
      this._addEles(el)
    } else if (typeof arg === 'function') {
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
  eq(index){
    // return this[index]
    return new Jq(this[index])
  }
}
function $(arg) {
  return new Jq(arg)
}