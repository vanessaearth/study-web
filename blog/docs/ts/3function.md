# 3.函数

### 函数返回值return_type, function name( ):return_type{}
### 函数参数
 * 参数类型,(x:string)
 * 参数默认值 (x:string=1),有默认值会推导出类型，可以不写类型
 * 可选参数，在参数后面加问号？,(x:string,y?:string)
 * 剩余参数,(x,y,...rest:string[])
function func_name( param1 [:datatype], param2 [:datatype],...other[]):return_type {   
}
```js 

function getUser(name:string='tom',age:number,...other):string{
  let user={
    name:name,
    age:age,
    hobby:other
  }
  return  name
}
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
//参数默认值
function sort(data:number[],order:'desc'|'asc'='desc'){
  return order
}
sort([1,5,23])
sort([1,5,23],'asc')
sort([1,5,23],'ascc')//错误，
// 剩余参数

```
函数重载
重载是方法名字相同，而参数不同，返回类型可以相同也可以不同。

每个重载的方法（或者构造函数）都必须有一个独一无二的参数类型列表。

参数类型不同,参数数量不同,参数类型顺序不同：