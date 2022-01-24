const a = 10
console.log('a', a)
const b = function () {
  console.log('b')
}
export { a as c }
export { b }
const f = function () {
  console.log('f')
}
export default f

// export default 只能有一个，名称不需要一样
// import obj from a.js

// export 对象或者其他变量 可以有多个，名称需要一样
// import {a,b} from a.js

// import * as obj from './a.js 可以引入所有包含default和其他变量
