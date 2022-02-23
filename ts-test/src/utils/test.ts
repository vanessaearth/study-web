
let username:string
let age:number
let isMale:boolean
let obj1:string[]
let obj2:number[]
let obj3:boolean[]
let list: Array<number> = [1, 2, 3];
//元组 Tuple
let x: [string, number];
// 枚举
enum Color {Red, Green, Blue}
// any
let list2: any[]
// void
function warnUser(): void {
    console.log("This is my warning message");
}
// Null 和 Undefined
let u: undefined = undefined;
let n: null = null;




let isShow=true

let courses:String[]
// 任意类型any,any[]
let varany :any


function greet2 (person:string):string{
    return 'hi'+person
}
function warn():void{

}
// 类型别名
type objType={
    id:number,
    name:string
}
let objStu:objType={id:1,name:''}

// 联合类型，多种类型的其中之一
let union:string|number

//交叉类型，多种类型合成的类型
type First={first: number}
type Second={second: number}
type FirstAndSecond =First&Second

// 函数
// 1.参数一旦声明就要传入
// 2.可选参数：加个问号
// 3.默认值
function greet(person:string,msg?:string, age:number=20):string{
    return ''
}
greet('tom')
// 函数重载，以参数数量、类型、返回值类型区分多个同名函数
// 先声明，在实现
function watch(cb1:()=>void):void;//声明
function watch(cb1:()=>void,cb2:(v1:any,v2:any)=>void):void;//声明
//实现
function watch(cb1:()=>void,cb2?:(v1:any,v2:any)=>void):void{
 if(cb2){
    console.log('执行重载2')
 }else{
    console.log('执行重载1')

 }
}
 interface Foo {
     foo: string
 }
 class Bar implements Foo {
     foo: string = ''
 }
 function abc ( a: Foo) {
     a.foo
 }

// 不具有通用性
interface Result {
    ok: 0 | 1,
    data: First
}
//  泛型，增加代码通用性 <T>
interface Result2<T> {
    ok: 0 | 1,
    data: T
}

// 装饰器,就是工厂函数
function log(fn:(key:string)=>void){
    return function (target:Function){
        target.prototype.log = function (key: string){
           fn(this[key])
        }
    }
    
}

@log(console.log)
class Foo2 {
    bar='bar'
}
const foo2 = new Foo2()
// @ts-ignore
foo2.log('bar')