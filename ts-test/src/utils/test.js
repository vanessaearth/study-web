var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var username;
var age;
var isMale;
var obj1;
var obj2;
var obj3;
var list = [1, 2, 3];
//元组 Tuple
var x;
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
// any
var list2;
// void
function warnUser() {
    console.log("This is my warning message");
}
// Null 和 Undefined
var u = undefined;
var n = null;
var isShow = true;
var courses;
// 任意类型any,any[]
var varany;
function greet2(person) {
    return 'hi' + person;
}
function warn() {
}
var objStu = { id: 1, name: '' };
// 联合类型，多种类型的其中之一
var union;
// 函数
// 1.参数一旦声明就要传入
// 2.可选参数：加个问号
// 3.默认值
function greet(person, msg, age) {
    if (age === void 0) { age = 20; }
    return '';
}
greet('tom');
//实现
function watch(cb1, cb2) {
    if (cb2) {
        console.log('执行重载2');
    }
    else {
        console.log('执行重载1');
    }
}
var Bar = /** @class */ (function () {
    function Bar() {
        this.foo = '';
    }
    return Bar;
}());
function abc(a) {
    a.foo;
}
// 装饰器,就是工厂函数
function log(fn) {
    return function (target) {
        target.prototype.log = function (key) {
            fn(this[key]);
        };
    };
}
var Foo2 = /** @class */ (function () {
    function Foo2() {
        this.bar = 'bar';
    }
    Foo2 = __decorate([
        log(console.log)
    ], Foo2);
    return Foo2;
}());
var foo2 = new Foo2();
// @ts-ignore
foo2.log('bar');
