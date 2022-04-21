// let msg: string = 'tom'
// let age: number = 18
// let isShow: boolean = false
// //null 和 undefined这2中类型只有一个直，标注为null或undefined后就不能改变了
// let a: null = null
// let b: undefined = undefined
// //null和undefined是所有类型的子类型，可以把null和undefined赋值给其他类型
// // 如果一个变量声明了，没有赋值，值是undefined，没有标注类型，类型是any
// let c: number //c是undefined
// let d //d值是undefined,类型是any
// let e:number
// e=8
// e.toFixed(2)
// let el=document.querySelector('div')
// if(el){
//   el.style.display = 'none'
// }
// var num:string = "hello"   
// //元组
// let x: [string, number];
// x = ['Runoob', 1];    // 运行正常
// x = [1, 'Runoob'];    // 报错
// x.push(2)//新增的数据必须是初始化类型里某一个
// console.log(x[0]);    // 输出 Runoob
// // 接口
// interface namelist { 
//   [index:number]:string 
// } 
// var list:namelist=[]
// list['0']='tom'
// // 对象
// var sites = { 
//   site1:"Runoob", 
//   site2:"Google" ,
//   sayHello: function () { } // 类型模板
// };
// sites.sayHello = function(){ return "hello";}
// // 枚举
// enum Color {Red, Green, Blue};
// let c: Color = Color.Blue;
// enum CODE {
//   'ERROR'= -1,
//   'SUCCESS'= 0,
//   'UN_LOGIN' //省略后为上一个值+1
// }
// enum CODE2 {
//   'ERROR'= 'ERROR',
//   'SUCCESS'= 'SUCCESS',
//   'UN_LOGIN' ='UN_LOGIN'//上一个值为字符串，这个值不能省略
// }
// let res:CODE=CODE.UN_LOGIN
// let res2:CODE2=CODE2.UN_LOGIN
// console.log(c,res,res2);    // 输出 2
// // 任意类型any,不推荐
// function fn (a:string){
//   a.indexOf('a',1)
// }
// 函数
function fn() {
    throw new Error('error');
}
// 类型断言
let img = document.querySelector('img');
if (img) {
    // (<HTMLImageElement>img).src
    img.src;
    img.src;
}
