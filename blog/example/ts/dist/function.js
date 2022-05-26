function fn1(a) {
    return '';
}
let fn2 = function (a) {
    return '';
};
let fn3 = function (b) {
    return '';
};
let fn4 = function (c) {
    return '';
};
let fn5 = () => {
    console.log(this);
    return '';
};
//参数默认值
function sort(data, order = 'desc') {
    return order;
}
sort([1, 5, 23]);
sort([1, 5, 23], 'asc');
function merge(target, ...others) {
    return Object.assign(target, ...others);
}
let newObj = merge({ x: 1 }, { y: 2 }, { z: 3 });
let obj = {
    a: 1,
    //this标注这里只是占位，调用的时候没有
    fn(x) {
    }
};
obj.fn(1);
//箭头函数的this是固定的，当前函数所处的作用域
let obj2 = {
    a: 1,
    fn(x) {
        return () => {
            // 这里this就是window
        };
    }
};
//  函数重载：接收不同类型的参数返回不同的值
// function showOrHide(el:HTMLElement,attr:string,value:'block'|'none'|number){
//     el.style[attr]=value
// }
let div = document.querySelector('.box');
function showOrHide(el, attr, value) {
    el.style[attr] = value;
}
if (div) {
    showOrHide(div, 'display', 'none');
    showOrHide(div, 'display', 'block');
    // showOrHide(div,'display',1)
    showOrHide(div, 'opacity', 1);
}
