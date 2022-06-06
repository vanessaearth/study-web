# 基础知识
1. 变量声明
 - let声明，块级作用域，不会挂载到window对象下
 - const 声明常量，const常量声明对象，对象内属性可变
 - symbol:唯一标识符
  ```js
  let obj={name:'tom',hobby:{ball:'basketball'}}
  Object.freeze(obj)
  obj.name='jerry'
  obj.hobby.ball='football'
  console.log(obj)// {"name": "tom","hobby": {"ball": "football"}} 
  //Object.freeze只能冻结对象的一层，如果需要每层都冻结，需要自己实现deepFreeze
  function deepFreeze(obj) {
    Object.freeze(obj)
    for(let o in obj){
      //如果对象自身含有这个属性，并且属性值是对象，再次冻结
      if(obj.hasOwnProperty(o)&&typeof obj[o]==='object'){
        Object.freeze(obj[o])
      }
    }
  }
  //symbol:唯一标识符
  let s1=Symbol('key1')
  let s2=Symbol('key2')
  console.log(s1===s2)
  let typeObj={
    cat:Symbol('key1'),//唯一值
    dog:Symbol('key1'),
  }
  function getType(type){
    if(type===typeObj.cat){
      console.log('猫')
    }else if(type===typeObj.dog){
      console.log('狗')
    }
  }
  getType(typeObj.cat)
  getType(typeObj.dog)

  ```
2. 解构赋值
```js
let obj={
  name:'tom',
  age:1,
  hobby:{
    ball:'football'
  }
}
let {name:newName,age,hobby:{ball}}=obj
console.loh(newName,age,ball)
``` 
3. ...展开运算符
```js
let obj={name:'tom'}
let obj2={age:1,...obj}
console.log(obj2)
```
4. rest剩余参数
```js
function test(...args){
  console.log(arguments)//Symbol
  console.log(args)//Array
}
test(1,2)
```
5. set map,可以使用对象作为键名
  对象的增删改查，map更高效，补充对象
  weakmap比map更高效，弱引用
```js
let obj={
  name:'tom',
  age:1,
  [document]:'haha'
}
for(let o in obj){
  console.log(o)
}

let map=new Map()
map.set('name','tom')
map.set('age',1)
console.log(map.size)
console.log(map)//Map(2) {'name' => 'tom', 'age' => 1}

// let map2 =new Map()
let map2 =new WeakMap()
let obj2={name:{}}
map2.set(obj2.name,'jerry')
obj2.name=null
console.log(map2)
// Map(1)
// [[Entries]]
// 0: {Object => "jerry"}
// size: 1
// [[Prototype]]: Map

// WeakMap
// [[Entries]]
// 无属性
// [[Prototype]]: WeakMap
//Set自动去重
let set=new Set([1,2,3,3,2,1])
console.log(set)//Set(3) {1, 2, 3}

```
6. 箭头语法,this指向不变
```js
let f=function(v){
  return v
}
//参数是v,返回值是v
let f=v=>v
//返回对象的简写,需要在外层包一层小括号
let f2=()=>({name:'tom'})

```
7. ES6对Object的优化和更新
   
```js
//优化部分
let name='tom'
let age=1
let obj={
  name2:'aaa'
  fn:function(){}
  // ES6简写
   name,age,
  fn(){}
}
// 解构赋值简写
let {name}=obj
// 更新部分
// Object.is Object.assign() getOwnPropertypeDescriptors
// Object.getPrototypeOf Object.setPrototypeOf
// Object.keys() Object.values()
```
   