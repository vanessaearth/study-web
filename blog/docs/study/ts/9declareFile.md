# 9.声明文件

虽然通过直接引用可以调用库的类和方法，但是却无法使用TypeScript 诸如类型检查等特性功能。为了解决这个问题，需要将这些库里的函数和方法体去掉后只保留导出类型声明，而产生了一个描述 JavaScript 库和模块信息的声明文件。通过引用这个声明文件，就可以借用 TypeScript 的各种特性来使用库文件了。
```js
declare var jQuery: (selector: string) => any;
jQuery('#foo');
```

声明文件
声明文件以 .d.ts 为后缀，例如：test.d.ts

声明文件或模块的语法格式如下:declare module Module_Name { }

TypeScript 引入声明文件语法格式：
```
/// <reference path = " test.d.ts" />
```

```
<!-- CalcThirdPartyJsLib.js 文件代码： -->
var Runoob;  
(function(Runoob) {
    var Calc = (function () { 
        function Calc() { 
        } 
    })
    Calc.prototype.doSum = function (limit) {
        var sum = 0; 
 
        for (var i = 0; i <= limit; i++) { 
            sum = sum + i; 
        }
        return sum; 
    }
    Runoob.Calc = Calc; 
    return Calc; 
})(Runoob || (Runoob = {})); 
var test = new Runoob.Calc();

```
```js
<!-- Calc.d.ts 文件代码： -->
declare module Runoob { 
   export class Calc { 
      doSum(limit:number) : number; 
   }
}
```
```js
// CalcTest.ts 文件代码：
/// <reference path = "Calc.d.ts" /> 
var obj = new Runoob.Calc(); 
// obj.doSum("Hello"); // 编译错误
console.log(obj.doSum(10));
```
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
<script src = "CalcThirdPartyJsLib.js"></script> 
<script src = "CalcTest.js"></script> 
</head>
<body>
    <h1>声明文件测试</h1>
    <p>测试一下。</p>
</body>
</html>
```