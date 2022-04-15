# 2.基本类型
**var [变量名] : [类型] = 值;**

1. 任意类型 **any** 声明为 any 的变量可以赋予任意类型的值
   
   一个变量声明未赋值未标注的情况下，默认为any

   任何类型都可以赋值为any,any类型也可以赋值给任意类型的变量


2. 数字类型 **number** ,双精度 64 位浮点值。它可以用来表示整数和分数。
  ```js
  let binaryLiteral: number = 0b1010; // 二进制
  let octalLiteral: number = 0o744;    // 八进制
  let decLiteral: number = 6;    // 十进制
  let hexLiteral: number = 0xf00d;    // 十六进制
  ```
3. 字符串类型 **string**, 一个字符系列，使用单引号（'）或双引号（"）来表示字符串类型。反引号（`）来定义多行文本和内嵌表达式
  ```js
    let name: string = "Runoob";
    let years: number = '5 years old';
    let words: string = `您好，今年是 ${ name } 发布 ${ years + 1} 周年`;
  ```
4. 布尔类型 **boolean**，表示逻辑值：true 和 false。
  ```js
    let flag: boolean = true;
  ```
6. 数组类型 **[ ]**,声明变量为数组。
  ```js
    //简单标注 
    let arr3: string[] = ['1', '2'];
    //泛型标注
    let arr: Array<number> = [1, 2];
    //多维数组
    let arr2: number[][] = [[1,2,3],[23,24,25]];
  ```
7. 元组 **[]**,元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同。
   ```js
   let x: [string, number];
    x = ['Runoob', 1];    // 运行正常
    x = [1, 'Runoob'];    // 报错
    x.push(2)//新增的数据必须是初始化类型里某一个
    console.log(x[0]);    // 输出 Runoob
   ```
8. 枚举 **enum**,枚举类型用于定义数值集合。建议大写
::: tip

  注意：枚举的值定义后，不可在代码中通过赋值方式修改<br>
       key不能是数字<br>
       value可以是数字和字符串,可以省略<br>
       如果省略，第一个枚举值默认是0，非第一个枚举值为上一个枚举值加1，如果上一个枚举值是字符串，下一个枚举值不能省略
:::
   ```js
      enum Color {Red, Green, Blue};
      let c: Color = Color.Blue;
      console.log(c);    // 输出 2
   ```
9. 无值类型 void **void** ,用于标识方法返回值的类型，表示该方法没有返回值。
  ```js
    function hello(): void {
      alert("Hello Runoob");
    }
  ```
10. null	**null**,表示对象值缺失。

11. undefined	**undefined**	,用于初始化变量为一个未定义的值
12. 函数类型 

  ```js
    函数名称(参数1：类型，参数2:类型):返回值类型{
      函数体
    }
  function add(x:number,y:number):number{
    return x+y
  }

  ```
13. never	**never**	,never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值。
  当一个函数永远不可能执行return的时候，返回的就是never,与void不同，void是执行了return，只是没有值，never是不会执行return，比如抛出异常，导致函数终止执行
  ```js
  function fn():never{
     throw new Error('error')
  }
  let x: never;
  let y: number;

  // 运行错误，数字类型不能转为 never 类型
  x = 123;

  // 运行正确，never 类型可以赋值给 never类型
  x = (()=>{ throw new Error('exception')})();

  // 运行正确，never 类型可以赋值给 数字类型
  y = (()=>{ throw new Error('exception')})();

  // 返回值为 never 的函数可以是抛出异常的情况
  function error(message: string): never {
      throw new Error(message);
  }

  // 返回值为 never 的函数可以是无法被执行到的终止点的情况
  function loop(): never {
      while (true) {}
  }
 ```



### 类型断言
类型断言可以用来手动指定一个值的类型，即允许变量从一种类型更改为另一种类型。
```js
// <类型>值  或者 值 as 类型 
var str = '1' 
var str2:number = <number> <any> str   //str、str2 是 string 类型
console.log(str2)
```
### 类型推断
当类型没有给出时，TypeScript 编译器利用类型推断来推断类型。

如果由于缺乏声明而不能推断出类型，那么它的类型被视作默认的动态 any 类型。

