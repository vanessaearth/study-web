# 6.对象
对象是包含一组键值对的实例。 值可以是标量、函数、数组、对象等，如下实例：

```js
var sites = { 
   site1:"Runoob", 
   site2:"Google" 
};
// 如果在 TypeScript 中使用以上方式则会出现编译错误，因为Typescript 中的对象必须是特定类型的实例。
sites.sayHello = function(){ return "hello";}
//需要现在对象中声明方法名
var sites = { 
   site1:"Runoob", 
   site2:"Google" ,
   sayHello: function () { } // 类型模板
};
sites.sayHello = function () {
    console.log("hello " + sites.site1);
};
sites.sayHello();

```

鸭子类型(Duck Typing)
鸭子类型（英语：duck typing）是动态类型的一种风格，是多态(polymorphism)的一种形式。

在这种风格中，一个对象有效的语义，不是由继承自特定的类或实现特定的接口，而是由"当前方法和属性的集合"决定。
```js
interface IPoint { 
    x:number 
    y:number 
} 
function addPoints(p1:IPoint,p2:IPoint):IPoint { 
    var x = p1.x + p2.x 
    var y = p1.y + p2.y 
    return {x:x,y:y} 
} 
 
// 正确
var newPoint = addPoints({x:3,y:4},{x:5,y:1})  
 
// 错误 
var newPoint2 = addPoints({x:1},{x:4,y:3})
```

## 接口
是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的类去实现，然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法。
```js
interface IPerson { 
    firstName:string, 
    lastName:string, 
    sayHi: ()=>string,
}
var customer:IPerson = { 
    firstName:"Tom",
    lastName:"Hanks", 
    sayHi: ():string =>{return "Hi there"} 
} 
// 联合类型和接口
interface RunOptions { 
    program:string; 
    commandline:string[]|string|(()=>string); 
} 
var options:RunOptions = {program:"test1",commandline:"Hello"}; 
options = {program:"test1",commandline:["Hello","World"]}; 
options = {program:"test1",commandline:()=>{return "**Hello World**";}}; 
// 接口中我们可以将数组的索引值和元素设置为不同类型，索引值可以是数字或字符串。
interface namelist { 
   [index:number]:string 
} 
var list2:namelist = ["Google","Runoob","Taobao"]

```

### 接口继承
接口继承就是说接口可以通过其他接口来扩展自己。
Typescript 允许接口继承多个接口。继承使用关键字 extends。
单接口继承语法格式：
Child_interface_name extends super_interface_name
多接口继承语法格式：
Child_interface_name extends super_interface1_name, super_interface2_name,…,super_interfaceN_name
```js
interface IParent1 { 
    v1:number 
} 
 
interface IParent2 { 
    v2:number 
} 
 
interface Child extends IParent1, IParent2 { } 
var Iobj:Child = { v1:12, v2:23} 
console.log("value 1: "+Iobj.v1+" value 2: "+Iobj.v2)
```