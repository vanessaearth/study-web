function fn1(a:string):string{
  return ''
}

let fn2:(a:string)=>string=function(a){
  return ''
}
type callback=(a:string)=>string
let fn3:callback=function(b){
  return ''
}
interface iCallback{
  (a:string):string
}
let fn4:iCallback=function(c){
  return ''
}
let fn5=()=>{
  console.log(this)
  return ''
}
//参数默认值
function sort(data:number[],order:'desc'|'asc'='desc'){
  return order
}
sort([1,5,23])
sort([1,5,23],'asc')
// sort([1,5,23],'ascc')//错误，只能是desc/asc值中任意一个

// 剩余参数
interface IOBJ {
  [key:string]:any
}
function merge(target,...others:Array<IOBJ>){
  return Object.assign(target,...others)
}
let newObj=merge({x:1},{y:2},{z:3})


//函数中的this
interface T{
  a:Number;
  fn:(x:number)=>void
}
let obj:T={
  a:1,
  //this标注这里只是占位，调用的时候没有
  fn(this:T,x:number){
  }
}
obj.fn(1)

//箭头函数的this是固定的，当前函数所处的作用域
let obj2:T={
  a:1,
  fn(this:Window,x:number){
      return ()=>{
      // 这里this就是window
      }
  }
}
//  函数重载：接收不同类型的参数返回不同的值
// function showOrHide(el:HTMLElement,attr:string,value:'block'|'none'|number){
//     el.style[attr]=value
// }
let div=document.querySelector('.box')

function showOrHide(el:Element,attr:'display',value:'block'|'none');
function showOrHide(el:Element,attr:'opacity',value:number);
function showOrHide(el:HTMLElement,attr:any,value:any){
  el.style[attr]=value
}
if(div){
  showOrHide(div,'display','none')
  showOrHide(div,'display','block')
  // showOrHide(div,'display',1)
  showOrHide(div,'opacity',1)
}