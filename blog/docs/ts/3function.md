# 3.函数

### 函数返回值return_type, function name( ):return_type{}
### 函数参数
 * 参数类型,(x:string)
 * 参数默认值 (x:string=1)
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
```
函数重载
重载是方法名字相同，而参数不同，返回类型可以相同也可以不同。

每个重载的方法（或者构造函数）都必须有一个独一无二的参数类型列表。

参数类型不同,参数数量不同,参数类型顺序不同：