class Parent {
    private _foo="foo" //私有属性，只能在类内部使用
    protected bar="bar" //保护属性，可用在子类中使用

    //参数属性：构造函数参数加修饰符，能够定义为成员变量
    constructor(public tua="tua"){

    }
    // 方法也有修饰符
    private someMethod(){

    }
    //存取器： 属性方式访问，可添加额外逻辑，控制读写性
    get foo () {
        return this._foo
    }
    set foo (val){
        this._foo=val
    }

}