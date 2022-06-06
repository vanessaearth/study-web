# 函数式编程function programe
以一种强调使用函数为主的软件开发风格，也是一种范式

多范式语言，函数是一等公民
1.纯函数：给定相同的输入，有相同的输出
意义： 服用性，可推测性
```js
//反例子
let y=2
function sum(x){
  return x+y
}
//正例子
function sum2(x){
  let y=2
  return x+y
}
```


